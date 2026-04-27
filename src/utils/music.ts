export interface LyricLine {
  time: number;
  text: string;
}

export function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "00:00";
  }

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export function parseLrc(raw: string): LyricLine[] {
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
