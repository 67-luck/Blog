import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PLAYLIST_ID = "2780716602";
const PLAYLIST_URL = `https://music.163.com/api/v6/playlist/detail?id=${PLAYLIST_ID}`;
const SONG_DETAIL_URL = "https://music.163.com/api/v3/song/detail";
const LYRIC_URL = "https://music.163.com/api/song/lyric";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT = path.join(ROOT, "src", "data", "music.ts");
const MAX_TRACKS = 24;

function request(url, options = {}) {
  return fetch(url, {
    headers: {
      Referer: "https://music.163.com/",
      "User-Agent": "Mozilla/5.0",
      ...(options.headers ?? {}),
    },
    ...options,
  });
}

function chunk(items, size) {
  const result = [];

  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size));
  }

  return result;
}

function toTsString(value) {
  return JSON.stringify(value, null, 2);
}

function parseLrc(raw) {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .flatMap((line) => {
      const matches = [...line.matchAll(/\[(\d{2}):(\d{2})(?:\.(\d{1,3}))?\]/g)];
      const text = line.replace(/\[[^\]]+\]/g, "").trim();

      if (!matches.length || !text) {
        return [];
      }

      return matches.map((match) => {
        const minutes = Number(match[1]);
        const seconds = Number(match[2]);
        const milliseconds = Number((match[3] || "0").padEnd(3, "0"));

        return {
          time: minutes * 60 + seconds + milliseconds / 1000,
          text,
        };
      });
    })
    .sort((left, right) => left.time - right.time);
}

async function getPlaylist() {
  const response = await request(PLAYLIST_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch playlist detail: ${response.status}`);
  }

  return response.json();
}

async function getSongs(ids) {
  const body = new URLSearchParams({
    c: JSON.stringify(ids.map((id) => ({ id }))),
  });

  const response = await request(SONG_DETAIL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch song detail: ${response.status}`);
  }

  return response.json();
}

async function getLyrics(id) {
  const response = await request(`${LYRIC_URL}?id=${id}&lv=-1&kv=-1&tv=-1`);

  if (!response.ok) {
    return "";
  }

  const payload = await response.json();
  return payload?.lrc?.lyric ?? "";
}

async function isPlayable(id) {
  const response = await request(
    `https://music.163.com/song/media/outer/url?id=${id}.mp3`,
    { method: "HEAD" },
  );
  const contentType = response.headers.get("content-type") ?? "";

  return response.ok && contentType.includes("audio/mpeg");
}

async function buildTrack(song) {
  const artists = song.ar.map((artist) => artist.name).join(" / ");
  const lyricsRaw = await getLyrics(song.id);

  return {
    id: song.id,
    title: song.name,
    artist: artists,
    album: song.al.name,
    coverUrl: song.al.picUrl.replace("http://", "https://"),
    audioUrl: `https://music.163.com/song/media/outer/url?id=${song.id}.mp3`,
    sourceUrl: `https://music.163.com/#/song?id=${song.id}`,
    duration: Math.round(song.dt / 1000),
    summary: `${artists} · ${song.al.name}`,
    lyricsRaw,
    lyrics: parseLrc(lyricsRaw),
  };
}

async function main() {
  const payload = await getPlaylist();
  const playlist = payload.playlist;
  const trackIds = playlist.trackIds.map((item) => item.id);
  const songsById = new Map();

  for (const ids of chunk(trackIds, 50)) {
    const detail = await getSongs(ids);

    for (const song of detail.songs) {
      songsById.set(song.id, song);
    }
  }

  const pickedSongs = [];

  for (const id of trackIds) {
    if (pickedSongs.length >= MAX_TRACKS) {
      break;
    }

    const song = songsById.get(id);

    if (!song) {
      continue;
    }

    if (await isPlayable(id)) {
      pickedSongs.push(song);
    }
  }

  const tracks = [];

  for (const song of pickedSongs) {
    tracks.push(await buildTrack(song));
  }

  const meta = {
    id: playlist.id,
    name: `${playlist.name} · Curated`,
    creator: playlist.creator.nickname,
    coverUrl: playlist.coverImgUrl.replace("http://", "https://"),
    trackCount: tracks.length,
    sourceUrl: `https://music.163.com/#/my/m/music/playlist?id=${playlist.id}`,
    syncedAt: new Date().toISOString(),
  };

  const file = `export interface PlaylistMeta {
  id: number;
  name: string;
  creator: string;
  coverUrl: string;
  trackCount: number;
  sourceUrl: string;
  syncedAt: string;
}

export interface MusicTrack {
  id: number;
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
  audioUrl: string;
  sourceUrl: string;
  duration: number;
  summary: string;
  lyricsRaw: string;
  lyrics: Array<{ time: number; text: string }>;
}

export const playlistMeta: PlaylistMeta = ${toTsString(meta)} as const;

export const musicTracks: MusicTrack[] = ${toTsString(tracks)};
`;

  await mkdir(path.dirname(OUTPUT), { recursive: true });
  await writeFile(OUTPUT, file, "utf8");

  console.log(`Synced ${tracks.length} playable tracks to ${OUTPUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
