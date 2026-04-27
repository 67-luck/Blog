export interface PlaylistMeta {
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

export const playlistMeta: PlaylistMeta = {
  "id": 2780716602,
  "name": "不想下训喜欢的音乐 · Curated",
  "creator": "不想下训",
  "coverUrl": "https://p1.music.126.net/eKyQ97HJprWjcIYKfXAbqA==/109951172214310562.jpg",
  "trackCount": 24,
  "sourceUrl": "https://music.163.com/#/my/m/music/playlist?id=2780716602",
  "syncedAt": "2026-04-26T08:07:48.957Z"
} as const;

export const musicTracks: MusicTrack[] = [
  {
    "id": 2741144144,
    "title": "99",
    "artist": "TizzyT",
    "album": "99",
    "coverUrl": "https://p1.music.126.net/D-kiZM7mbHrqdB6X8Yoi8Q==/109951171947326885.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=2741144144.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=2741144144",
    "duration": 282,
    "summary": "TizzyT · 99",
    "lyricsRaw": "[00:00.00] 制作人 : TizzyT/Tim姜皓天\n[00:01.00] 演唱 : TizzyT\n[00:02.00] 作词 : TizzyT\n[00:03.00] 作曲 : TizzyT\n[00:04.00] 编曲 : Tim姜皓天/Chief Maloney\n[00:17.46]\n[00:20.09]熬过寒冷的夜\n[00:21.46]空气中冒着烟\n[00:23.40]还好今天正好是个晴天\n[00:27.48]白色衬衣搭配哪一对鞋\n[00:32.38]babe我想听听你的意见\n[00:35.64]你说要化一个精致的妆容\n[00:40.77]因为今天是第99天\n[00:44.88]你还没发现你对我而言多特别\n[00:48.13]跟你每一天都值得纪念\n[00:52.96]我想要看见阳光落在你的肩\n[00:59.91]我想要为你赶走不安和胆怯\n[01:08.77]我想要把你拥入怀里为你抵挡狂风和暴雪\n[01:17.70]我想要笑容永远挂在你的脸\n[01:24.01]\n[01:59.29]baby girl很感谢你能包容我的ego\n[02:01.94]我的脾气赶走我的emo\n[02:04.11]感谢你的爱感谢你不记仇\n[02:06.12]感谢你也才让我学会低头\n[02:08.36]谈论电影我们谈论宇宙\n[02:10.56]柴米油盐我们讨论以后\n[02:13.00]计划去约会 计划着去旅游\n[02:14.68]造一座飞船我们逃离地球\n[02:16.66]让我苦恼是当你皱着眉头\n[02:18.95]我会站在你身后每当你回头\n[02:20.85]穿过人群我们穿过高楼\n[02:22.79]不要改变我们让我双手合十祈求\n[02:25.06]We talking about the love\n[02:26.27]We talking about the loyalty\n[02:27.47]想把自己变好我才能照顾你\n[02:29.20]有时候情绪压得我喘不过气\n[02:31.22]寒冷的夜因为有你我才熬过去\n[02:33.31]\n[02:33.66]你像蜂蜜 你像柠檬\n[02:35.90]你是歌手 也是听众\n[02:37.68]你像花朵 你像星空\n[02:39.69]有你在我身边不再害怕平庸\n[02:41.80]你给的爱 他们望尘莫及\n[02:43.96]眼神确定 是我们的默契\n[02:46.02]She’s so pure七月份的茉莉\n[02:48.03]让我为你歌唱让我为你落笔\n[02:49.96]\n[02:51.47]落叶在微风中摇曳\n[02:54.20]让我们穿过拥挤的街\n[02:58.88]你怎么可能没感觉\n[03:02.18]你对我而言有多特别\n[03:05.79]我想要看见阳光落在你的肩\n[03:13.27]我想要为你赶走不安和胆怯\n[03:23.27]我想要把你拥入怀里为你抵挡狂风和暴雪\n[03:31.28]我想要笑容永远挂在你的脸\n[03:36.55]\n[03:39.29]我想要看见阳光落在你的肩\n[03:47.28]我想要为你赶走不安和胆怯\n[03:55.13]我想要把你拥入怀里为你抵挡狂风和暴雪\n[04:04.39]我想要笑容永远挂在你的脸\n[04:12.81]我想要笑容永远挂在你的脸\n[04:19.18]\n[04:37.18] 吉他 : Kai Ma\n[04:38.02] 和声 : HEAT J\n[04:38.85] 录音工程 : Tim姜皓天\n[04:39.68] 音频编辑 : 徐天鸿@Studio21A\n[04:40.52] 混音 : 周天澈\n[04:41.35] 母带 : 周天澈\n",
    "lyrics": [
      {
        "time": 0,
        "text": "制作人 : TizzyT/Tim姜皓天"
      },
      {
        "time": 1,
        "text": "演唱 : TizzyT"
      },
      {
        "time": 2,
        "text": "作词 : TizzyT"
      },
      {
        "time": 3,
        "text": "作曲 : TizzyT"
      },
      {
        "time": 4,
        "text": "编曲 : Tim姜皓天/Chief Maloney"
      },
      {
        "time": 20.09,
        "text": "熬过寒冷的夜"
      },
      {
        "time": 21.46,
        "text": "空气中冒着烟"
      },
      {
        "time": 23.4,
        "text": "还好今天正好是个晴天"
      },
      {
        "time": 27.48,
        "text": "白色衬衣搭配哪一对鞋"
      },
      {
        "time": 32.38,
        "text": "babe我想听听你的意见"
      },
      {
        "time": 35.64,
        "text": "你说要化一个精致的妆容"
      },
      {
        "time": 40.77,
        "text": "因为今天是第99天"
      },
      {
        "time": 44.88,
        "text": "你还没发现你对我而言多特别"
      },
      {
        "time": 48.13,
        "text": "跟你每一天都值得纪念"
      },
      {
        "time": 52.96,
        "text": "我想要看见阳光落在你的肩"
      },
      {
        "time": 59.91,
        "text": "我想要为你赶走不安和胆怯"
      },
      {
        "time": 68.77,
        "text": "我想要把你拥入怀里为你抵挡狂风和暴雪"
      },
      {
        "time": 77.7,
        "text": "我想要笑容永远挂在你的脸"
      },
      {
        "time": 119.29,
        "text": "baby girl很感谢你能包容我的ego"
      },
      {
        "time": 121.94,
        "text": "我的脾气赶走我的emo"
      },
      {
        "time": 124.11,
        "text": "感谢你的爱感谢你不记仇"
      },
      {
        "time": 126.12,
        "text": "感谢你也才让我学会低头"
      },
      {
        "time": 128.36,
        "text": "谈论电影我们谈论宇宙"
      },
      {
        "time": 130.56,
        "text": "柴米油盐我们讨论以后"
      },
      {
        "time": 133,
        "text": "计划去约会 计划着去旅游"
      },
      {
        "time": 134.68,
        "text": "造一座飞船我们逃离地球"
      },
      {
        "time": 136.66,
        "text": "让我苦恼是当你皱着眉头"
      },
      {
        "time": 138.95,
        "text": "我会站在你身后每当你回头"
      },
      {
        "time": 140.85,
        "text": "穿过人群我们穿过高楼"
      },
      {
        "time": 142.79,
        "text": "不要改变我们让我双手合十祈求"
      },
      {
        "time": 145.06,
        "text": "We talking about the love"
      },
      {
        "time": 146.27,
        "text": "We talking about the loyalty"
      },
      {
        "time": 147.47,
        "text": "想把自己变好我才能照顾你"
      },
      {
        "time": 149.2,
        "text": "有时候情绪压得我喘不过气"
      },
      {
        "time": 151.22,
        "text": "寒冷的夜因为有你我才熬过去"
      },
      {
        "time": 153.66,
        "text": "你像蜂蜜 你像柠檬"
      },
      {
        "time": 155.9,
        "text": "你是歌手 也是听众"
      },
      {
        "time": 157.68,
        "text": "你像花朵 你像星空"
      },
      {
        "time": 159.69,
        "text": "有你在我身边不再害怕平庸"
      },
      {
        "time": 161.8,
        "text": "你给的爱 他们望尘莫及"
      },
      {
        "time": 163.96,
        "text": "眼神确定 是我们的默契"
      },
      {
        "time": 166.02,
        "text": "She’s so pure七月份的茉莉"
      },
      {
        "time": 168.03,
        "text": "让我为你歌唱让我为你落笔"
      },
      {
        "time": 171.47,
        "text": "落叶在微风中摇曳"
      },
      {
        "time": 174.2,
        "text": "让我们穿过拥挤的街"
      },
      {
        "time": 178.88,
        "text": "你怎么可能没感觉"
      },
      {
        "time": 182.18,
        "text": "你对我而言有多特别"
      },
      {
        "time": 185.79,
        "text": "我想要看见阳光落在你的肩"
      },
      {
        "time": 193.27,
        "text": "我想要为你赶走不安和胆怯"
      },
      {
        "time": 203.27,
        "text": "我想要把你拥入怀里为你抵挡狂风和暴雪"
      },
      {
        "time": 211.28,
        "text": "我想要笑容永远挂在你的脸"
      },
      {
        "time": 219.29,
        "text": "我想要看见阳光落在你的肩"
      },
      {
        "time": 227.28,
        "text": "我想要为你赶走不安和胆怯"
      },
      {
        "time": 235.13,
        "text": "我想要把你拥入怀里为你抵挡狂风和暴雪"
      },
      {
        "time": 244.39,
        "text": "我想要笑容永远挂在你的脸"
      },
      {
        "time": 252.81,
        "text": "我想要笑容永远挂在你的脸"
      },
      {
        "time": 277.18,
        "text": "吉他 : Kai Ma"
      },
      {
        "time": 278.02,
        "text": "和声 : HEAT J"
      },
      {
        "time": 278.85,
        "text": "录音工程 : Tim姜皓天"
      },
      {
        "time": 279.68,
        "text": "音频编辑 : 徐天鸿@Studio21A"
      },
      {
        "time": 280.52,
        "text": "混音 : 周天澈"
      },
      {
        "time": 281.35,
        "text": "母带 : 周天澈"
      }
    ]
  },
  {
    "id": 1850131301,
    "title": "Attached",
    "artist": "Ollie",
    "album": "Attached",
    "coverUrl": "https://p1.music.126.net/oTS5EmrJ2F2rfoZ_xryjtA==/109951166060818221.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=1850131301.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=1850131301",
    "duration": 209,
    "summary": "Ollie · Attached",
    "lyricsRaw": "[00:00.000] 作曲 : Denton Oliver/Chris Stiliadis\n[00:01.000] 作词 : Denton Oliver\n[00:02.466]Hoping I don't get too attached cause I know you'll probably leave\n[00:07.978]I'm trying not too hold shit back, but it's harder than it seems\n[00:13.043]I promised you I'd try my best but its not like you don't believe\n[00:18.731]I'm sorry that I can't forget all things you said to me\n[00:23.741]\n[00:24.824]I don't wanna get too attached, cause I know you'll probably leave\n[00:30.491]I'm trying not too hold shit back, but it's harder than it seems\n[00:35.865]I promised you I'd try my best but its like you don't believe\n[00:41.221]I'm sorry that I can't forget all the things you said to me\n[00:44.678]\n[00:45.390]The worst feeling in the world is knowing that I hurt you\n[00:48.102]I tried to call you on your phone I got no one to turn to\n[00:50.988]When laying in my bed I swear I still can smell your perfume\n[00:53.709]Makes me think back to the times wed break our parents curfew\n[00:56.610]2 am, shooting stars, the taste of your lips\n[00:59.122]Recline the seats in my car then grab in your hips\n[01:02.170]You revived my aching heart then broke it bits\n[01:04.988]I guess that timing always hard when you falling as kids\n[01:07.679]I put this message in a bottle, hope you find it some day\n[01:10.587]Maybe ill wake up tomorrow to your beautiful face\n[01:13.590]Swear I think about you every-time I'm on this runway\n[01:16.298]Its okay if feelings leave, but mine always goin' stay\n[01:18.610]\n[01:20.821]Now tears that I shed show the way I care\n[01:26.560]I'm fearing silence I just want you here\n[01:30.156]\n[01:32.345]I don't wanna get too attached, cause I know you'll probably leave\n[01:37.834]I'm trying not too hold shit back, but it's harder than it seems\n[01:43.321]I promised you I'd try my best but its like you don't believe\n[01:49.167]I'm sorry that I can't forget all things you said to me\n[01:52.213]\n[01:53.629]I can't forget the things you said to me\n[01:56.231]I'm sorry it's goin' take a while to fix my tendencies\n[01:58.790]A lot to learn so many flaws that dragging me down\n[02:01.361]I'm finding comfort as I write them into melodies\n[02:04.401]It hurts different when you the one who's actually trying\n[02:07.021]When our relationship depending on love I'm supplying\n[02:09.946]I guess the roles were once reversed an we both have been lying\n[02:12.712]I just hope that you come back before both of us dying\n[02:15.699]Done playing petty games you the one that I choose\n[02:18.641]Nothing ever be the same if I somehow lost you\n[02:21.352]Only thing that's on my brain hope you feel like I do\n[02:24.117]Everybody's got a chapter in their story confused\n[02:25.732]\n[02:28.717]Now tears that I shed show the way I care\n[02:34.232]I'm fearing silence I just want you here\n[02:36.520]\n[02:39.919]I don't wanna get too attached, cause I know you'll probably leave\n[02:45.425]I'm trying not too hold shit back, but it's harder than it seems\n[02:51.043]I promised you I'd try my best but its like you don't believe\n[02:56.841]I'm sorry that I can't forget all things you said to me\n",
    "lyrics": [
      {
        "time": 0,
        "text": "作曲 : Denton Oliver/Chris Stiliadis"
      },
      {
        "time": 1,
        "text": "作词 : Denton Oliver"
      },
      {
        "time": 2.466,
        "text": "Hoping I don't get too attached cause I know you'll probably leave"
      },
      {
        "time": 7.978,
        "text": "I'm trying not too hold shit back, but it's harder than it seems"
      },
      {
        "time": 13.043,
        "text": "I promised you I'd try my best but its not like you don't believe"
      },
      {
        "time": 18.731,
        "text": "I'm sorry that I can't forget all things you said to me"
      },
      {
        "time": 24.824,
        "text": "I don't wanna get too attached, cause I know you'll probably leave"
      },
      {
        "time": 30.491,
        "text": "I'm trying not too hold shit back, but it's harder than it seems"
      },
      {
        "time": 35.865,
        "text": "I promised you I'd try my best but its like you don't believe"
      },
      {
        "time": 41.221,
        "text": "I'm sorry that I can't forget all the things you said to me"
      },
      {
        "time": 45.39,
        "text": "The worst feeling in the world is knowing that I hurt you"
      },
      {
        "time": 48.102,
        "text": "I tried to call you on your phone I got no one to turn to"
      },
      {
        "time": 50.988,
        "text": "When laying in my bed I swear I still can smell your perfume"
      },
      {
        "time": 53.709,
        "text": "Makes me think back to the times wed break our parents curfew"
      },
      {
        "time": 56.61,
        "text": "2 am, shooting stars, the taste of your lips"
      },
      {
        "time": 59.122,
        "text": "Recline the seats in my car then grab in your hips"
      },
      {
        "time": 62.17,
        "text": "You revived my aching heart then broke it bits"
      },
      {
        "time": 64.988,
        "text": "I guess that timing always hard when you falling as kids"
      },
      {
        "time": 67.679,
        "text": "I put this message in a bottle, hope you find it some day"
      },
      {
        "time": 70.587,
        "text": "Maybe ill wake up tomorrow to your beautiful face"
      },
      {
        "time": 73.59,
        "text": "Swear I think about you every-time I'm on this runway"
      },
      {
        "time": 76.298,
        "text": "Its okay if feelings leave, but mine always goin' stay"
      },
      {
        "time": 80.821,
        "text": "Now tears that I shed show the way I care"
      },
      {
        "time": 86.56,
        "text": "I'm fearing silence I just want you here"
      },
      {
        "time": 92.345,
        "text": "I don't wanna get too attached, cause I know you'll probably leave"
      },
      {
        "time": 97.834,
        "text": "I'm trying not too hold shit back, but it's harder than it seems"
      },
      {
        "time": 103.321,
        "text": "I promised you I'd try my best but its like you don't believe"
      },
      {
        "time": 109.167,
        "text": "I'm sorry that I can't forget all things you said to me"
      },
      {
        "time": 113.629,
        "text": "I can't forget the things you said to me"
      },
      {
        "time": 116.231,
        "text": "I'm sorry it's goin' take a while to fix my tendencies"
      },
      {
        "time": 118.79,
        "text": "A lot to learn so many flaws that dragging me down"
      },
      {
        "time": 121.361,
        "text": "I'm finding comfort as I write them into melodies"
      },
      {
        "time": 124.401,
        "text": "It hurts different when you the one who's actually trying"
      },
      {
        "time": 127.021,
        "text": "When our relationship depending on love I'm supplying"
      },
      {
        "time": 129.946,
        "text": "I guess the roles were once reversed an we both have been lying"
      },
      {
        "time": 132.712,
        "text": "I just hope that you come back before both of us dying"
      },
      {
        "time": 135.699,
        "text": "Done playing petty games you the one that I choose"
      },
      {
        "time": 138.641,
        "text": "Nothing ever be the same if I somehow lost you"
      },
      {
        "time": 141.352,
        "text": "Only thing that's on my brain hope you feel like I do"
      },
      {
        "time": 144.117,
        "text": "Everybody's got a chapter in their story confused"
      },
      {
        "time": 148.717,
        "text": "Now tears that I shed show the way I care"
      },
      {
        "time": 154.232,
        "text": "I'm fearing silence I just want you here"
      },
      {
        "time": 159.919,
        "text": "I don't wanna get too attached, cause I know you'll probably leave"
      },
      {
        "time": 165.425,
        "text": "I'm trying not too hold shit back, but it's harder than it seems"
      },
      {
        "time": 171.043,
        "text": "I promised you I'd try my best but its like you don't believe"
      },
      {
        "time": 176.841,
        "text": "I'm sorry that I can't forget all things you said to me"
      }
    ]
  },
  {
    "id": 2741374843,
    "title": "可我在十六岁遇到了你",
    "artist": "First—Top",
    "album": "可我在十六岁遇到了你",
    "coverUrl": "https://p1.music.126.net/T5tAO9d8in7jEpGsU-TzdA==/109951171949388941.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=2741374843.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=2741374843",
    "duration": 187,
    "summary": "First—Top · 可我在十六岁遇到了你",
    "lyricsRaw": "[00:00.00] 词 : FirstTop\n[00:01.00] 曲 : FirstTop\n[00:02.00] 编曲 : APC Beats\n[00:03.00] 制作人 : 王东东\n[00:04.00] 出品 : 网易子弹x柏宇音乐\n[00:19.98]可我在16岁遇到了你\n[00:21.93]遇到了小事就计较的你\n[00:23.82]遇到了分开前和开始前\n[00:26.19]那一个开心的你\n[00:27.66]遇到了分享了你心里的底\n[00:29.55]遇到了分开后心里的你\n[00:31.35]可惜我16岁心高气傲\n[00:33.75]你分开的迫不得已\n[00:35.10]我16岁\n[00:36.15]相信了感情是永远\n[00:37.68]相信到白头才是终点\n[00:40.02]她不该相信我\n[00:41.31]分手的剧情在晚上重演\n[00:43.44]Please让我再懂点心\n[00:45.12]我们懂对方也懂眼睛\n[00:47.01]你照常打开了《冬眠》听\n[00:48.99]现在我换上了恋爱的红眼病\n[00:51.33]“其实我12点想要睡觉为了你熬到3点”\n[00:55.35]我们是注定要分开的\n[00:57.51]对恋爱不同的观点\n[00:59.16]那天我躺在了沙发上\n[01:01.26]提不起兴趣的半点\n[01:02.94]现在我不奢求爱情重来\n[01:05.10]只希望时间过得快一点\n[01:06.78]快一点忘掉\n[01:07.71]忘掉关于你的性格还有你的样貌\n[01:10.53]快一点让我去忘掉\n[01:12.03]不要让我回到熟悉的巷道\n[01:14.22]现在我不想再讲道理\n[01:16.26]每次一讲就讲到你\n[01:18.00]现在我不想再想道理\n[01:19.98]每次一想就想到你\n[01:21.90]恋爱的喷雾让心情又带了层口罩\n[01:24.39]相爱相杀的凑巧\n[01:25.86]恋爱的话把我带上了手铐\n[01:27.87]虐杀心灵的幼小\n[01:29.64]我并不完美没那么周到\n[01:31.56]不能把破碎的心给修好\n[01:33.39]现在我赚到了钱\n[01:34.80]但是只能祝福你我\n[01:36.21]哼\n[01:36.69]都好\n[01:39.03]吕钦扬\n[01:41.04]我要结婚了\n[01:42.36]和我们想象的一样\n[01:44.04]有鲜花拱门有红地毯\n[01:48.03]有白婚纱黑礼服\n[01:49.92]但就是没有你\n[01:51.42]可我在十六岁遇到了你\n[01:53.25]没有遇到那合适的你\n[01:55.17]我遇到了面对问题\n[01:57.00]只会在不断驳斥的你\n[01:59.01]可是用爱来命名的枷锁\n[02:01.05]分开之后只会有 problem\n[02:02.94]真正伤人的不是现实\n[02:04.65]而是回忆在分开后抓我\n[02:06.69]他们用爱来命名了永驻\n[02:08.67]他们用爱来命名了痛苦\n[02:10.59]他们用爱制造了恐怖\n[02:12.48]再用感情的刀去 s我\n[02:14.34]比起黑夜的孤独\n[02:15.81]我反而觉得清醒的心更伤\n[02:18.06]因为我发现现在的我\n[02:19.83]比孤独的自己的心更脏\n[02:21.78]你说你爱我是假话\n[02:23.46]在意我是假话\n[02:24.42]爱我的行为是假的\n[02:25.80]我想\n[02:26.28]骗我是假话\n[02:27.27]不爱我是假话\n[02:28.17]分开了也是假的\n[02:29.55]What are you fk doing\n[02:30.84]you say on my way\n[02:31.77]最后的陪伴不是永远\n[02:33.42]如果能重来我会去坚持\n[02:35.37]而你的选择却是重选\n[02:37.59]Oh,I'm sorry.you're me right person\n[02:41.25]You are\n[02:41.37]You're me right person\n[03:01.92] 混音 : 学渣_xuezha\n[03:02.75] 营销推广 : 林焓/乐为\n[03:03.59] 总营销 : 施沛洋/欧阳慧琳\n[03:04.42] 企划 : 黄馨萱/姜凯朝\n[03:05.25] 监制 : 梦圆/弋章\n[03:06.09] 出品人 : 如风\n",
    "lyrics": [
      {
        "time": 0,
        "text": "词 : FirstTop"
      },
      {
        "time": 1,
        "text": "曲 : FirstTop"
      },
      {
        "time": 2,
        "text": "编曲 : APC Beats"
      },
      {
        "time": 3,
        "text": "制作人 : 王东东"
      },
      {
        "time": 4,
        "text": "出品 : 网易子弹x柏宇音乐"
      },
      {
        "time": 19.98,
        "text": "可我在16岁遇到了你"
      },
      {
        "time": 21.93,
        "text": "遇到了小事就计较的你"
      },
      {
        "time": 23.82,
        "text": "遇到了分开前和开始前"
      },
      {
        "time": 26.19,
        "text": "那一个开心的你"
      },
      {
        "time": 27.66,
        "text": "遇到了分享了你心里的底"
      },
      {
        "time": 29.55,
        "text": "遇到了分开后心里的你"
      },
      {
        "time": 31.35,
        "text": "可惜我16岁心高气傲"
      },
      {
        "time": 33.75,
        "text": "你分开的迫不得已"
      },
      {
        "time": 35.1,
        "text": "我16岁"
      },
      {
        "time": 36.15,
        "text": "相信了感情是永远"
      },
      {
        "time": 37.68,
        "text": "相信到白头才是终点"
      },
      {
        "time": 40.02,
        "text": "她不该相信我"
      },
      {
        "time": 41.31,
        "text": "分手的剧情在晚上重演"
      },
      {
        "time": 43.44,
        "text": "Please让我再懂点心"
      },
      {
        "time": 45.12,
        "text": "我们懂对方也懂眼睛"
      },
      {
        "time": 47.01,
        "text": "你照常打开了《冬眠》听"
      },
      {
        "time": 48.99,
        "text": "现在我换上了恋爱的红眼病"
      },
      {
        "time": 51.33,
        "text": "“其实我12点想要睡觉为了你熬到3点”"
      },
      {
        "time": 55.35,
        "text": "我们是注定要分开的"
      },
      {
        "time": 57.51,
        "text": "对恋爱不同的观点"
      },
      {
        "time": 59.16,
        "text": "那天我躺在了沙发上"
      },
      {
        "time": 61.26,
        "text": "提不起兴趣的半点"
      },
      {
        "time": 62.94,
        "text": "现在我不奢求爱情重来"
      },
      {
        "time": 65.1,
        "text": "只希望时间过得快一点"
      },
      {
        "time": 66.78,
        "text": "快一点忘掉"
      },
      {
        "time": 67.71,
        "text": "忘掉关于你的性格还有你的样貌"
      },
      {
        "time": 70.53,
        "text": "快一点让我去忘掉"
      },
      {
        "time": 72.03,
        "text": "不要让我回到熟悉的巷道"
      },
      {
        "time": 74.22,
        "text": "现在我不想再讲道理"
      },
      {
        "time": 76.26,
        "text": "每次一讲就讲到你"
      },
      {
        "time": 78,
        "text": "现在我不想再想道理"
      },
      {
        "time": 79.98,
        "text": "每次一想就想到你"
      },
      {
        "time": 81.9,
        "text": "恋爱的喷雾让心情又带了层口罩"
      },
      {
        "time": 84.39,
        "text": "相爱相杀的凑巧"
      },
      {
        "time": 85.86,
        "text": "恋爱的话把我带上了手铐"
      },
      {
        "time": 87.87,
        "text": "虐杀心灵的幼小"
      },
      {
        "time": 89.64,
        "text": "我并不完美没那么周到"
      },
      {
        "time": 91.56,
        "text": "不能把破碎的心给修好"
      },
      {
        "time": 93.39,
        "text": "现在我赚到了钱"
      },
      {
        "time": 94.8,
        "text": "但是只能祝福你我"
      },
      {
        "time": 96.21,
        "text": "哼"
      },
      {
        "time": 96.69,
        "text": "都好"
      },
      {
        "time": 99.03,
        "text": "吕钦扬"
      },
      {
        "time": 101.04,
        "text": "我要结婚了"
      },
      {
        "time": 102.36,
        "text": "和我们想象的一样"
      },
      {
        "time": 104.04,
        "text": "有鲜花拱门有红地毯"
      },
      {
        "time": 108.03,
        "text": "有白婚纱黑礼服"
      },
      {
        "time": 109.92,
        "text": "但就是没有你"
      },
      {
        "time": 111.42,
        "text": "可我在十六岁遇到了你"
      },
      {
        "time": 113.25,
        "text": "没有遇到那合适的你"
      },
      {
        "time": 115.17,
        "text": "我遇到了面对问题"
      },
      {
        "time": 117,
        "text": "只会在不断驳斥的你"
      },
      {
        "time": 119.01,
        "text": "可是用爱来命名的枷锁"
      },
      {
        "time": 121.05,
        "text": "分开之后只会有 problem"
      },
      {
        "time": 122.94,
        "text": "真正伤人的不是现实"
      },
      {
        "time": 124.65,
        "text": "而是回忆在分开后抓我"
      },
      {
        "time": 126.69,
        "text": "他们用爱来命名了永驻"
      },
      {
        "time": 128.67,
        "text": "他们用爱来命名了痛苦"
      },
      {
        "time": 130.59,
        "text": "他们用爱制造了恐怖"
      },
      {
        "time": 132.48,
        "text": "再用感情的刀去 s我"
      },
      {
        "time": 134.34,
        "text": "比起黑夜的孤独"
      },
      {
        "time": 135.81,
        "text": "我反而觉得清醒的心更伤"
      },
      {
        "time": 138.06,
        "text": "因为我发现现在的我"
      },
      {
        "time": 139.83,
        "text": "比孤独的自己的心更脏"
      },
      {
        "time": 141.78,
        "text": "你说你爱我是假话"
      },
      {
        "time": 143.46,
        "text": "在意我是假话"
      },
      {
        "time": 144.42,
        "text": "爱我的行为是假的"
      },
      {
        "time": 145.8,
        "text": "我想"
      },
      {
        "time": 146.28,
        "text": "骗我是假话"
      },
      {
        "time": 147.27,
        "text": "不爱我是假话"
      },
      {
        "time": 148.17,
        "text": "分开了也是假的"
      },
      {
        "time": 149.55,
        "text": "What are you fk doing"
      },
      {
        "time": 150.84,
        "text": "you say on my way"
      },
      {
        "time": 151.77,
        "text": "最后的陪伴不是永远"
      },
      {
        "time": 153.42,
        "text": "如果能重来我会去坚持"
      },
      {
        "time": 155.37,
        "text": "而你的选择却是重选"
      },
      {
        "time": 157.59,
        "text": "Oh,I'm sorry.you're me right person"
      },
      {
        "time": 161.25,
        "text": "You are"
      },
      {
        "time": 161.37,
        "text": "You're me right person"
      },
      {
        "time": 181.92,
        "text": "混音 : 学渣_xuezha"
      },
      {
        "time": 182.75,
        "text": "营销推广 : 林焓/乐为"
      },
      {
        "time": 183.59,
        "text": "总营销 : 施沛洋/欧阳慧琳"
      },
      {
        "time": 184.42,
        "text": "企划 : 黄馨萱/姜凯朝"
      },
      {
        "time": 185.25,
        "text": "监制 : 梦圆/弋章"
      },
      {
        "time": 186.09,
        "text": "出品人 : 如风"
      }
    ]
  },
  {
    "id": 3339853915,
    "title": "孤独beat",
    "artist": "prodjaded",
    "album": "\"孤独\" SASIOVERLXRD X BOBBYNOPEACE Type beat 痛苦旋律伴奏",
    "coverUrl": "https://p1.music.126.net/Tj4QmFC1-lKytduYFFtX6w==/109951172597407268.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=3339853915.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=3339853915",
    "duration": 150,
    "summary": "prodjaded · \"孤独\" SASIOVERLXRD X BOBBYNOPEACE Type beat 痛苦旋律伴奏",
    "lyricsRaw": "\n风格：嘻哈说唱 Hip Hop/Rap\nBPM：128\nKEY：\n-音名：G\n-调号：无\n-调式：Minor\n\nBeat说明：已买断，仅供欣赏。\nBeat Maker : prodjaded/Wlao.T\n",
    "lyrics": []
  },
  {
    "id": 3341952805,
    "title": "所以呢",
    "artist": "洗澡爱唱歌",
    "album": "所以呢",
    "coverUrl": "https://p1.music.126.net/bogVFGRZEuDG2nKFdOCTFA==/109951172626889683.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=3341952805.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=3341952805",
    "duration": 209,
    "summary": "洗澡爱唱歌 · 所以呢",
    "lyricsRaw": "[00:00.00] 作词 : 洗澡爱唱歌\n[00:01.00] 作曲 : 洗澡爱唱歌\n[00:17.04]散场灯光 将你背影拉长\n[00:24.66]我没伸手 也没练习说谎\n[00:32.41]你眼里的霜 够我抵挡整季的荒凉\n[00:36.87]咖啡在凉 像拥抱的过往\n[00:40.42]指纹还在 触碰过的车窗\n[00:48.66]所以呢 挽留的话 要怎样才够漂亮\n[00:52.50]是否该感谢你 用离开为我 加冕了成长\n[00:56.61]我反复修改着 那些自欺的答案\n[01:00.44]可夜里辗转 思念就 无处躲藏\n[01:04.16]所以呢 回忆进度 停在争吵的夜晚\n[01:08.16]你的晚安截图 在相册替我 保存着温暖\n[01:12.80]我学你的语气 对自己说着别回头看\n[01:16.53]可每句对不起 都像是命运对我的审判\n[01:37.12]散场灯光 将你背影拉长\n[01:44.68]我没伸手 也没练习说谎\n[01:52.25]你眼里的霜 够我抵挡整季的荒凉\n[01:56.78]街景向后 像倒带的时光\n[02:00.43]耳机分你 右耳的情歌太响\n[02:02.78]那句别遗憾 悬在嘴边成了默片\n[02:08.91]所以呢 挽留的话 要怎样才够漂亮\n[02:12.62]是否该感谢你 用离开为我 加冕了成长\n[02:16.66]我反复修改着 那些自欺的答案\n[02:20.51]可夜里辗转 思念就 无处躲藏\n[02:24.34]所以呢 回忆进度 停在争吵的夜晚\n[02:28.43]你的晚安截图 在相册替我 保存着温暖\n[02:32.84]我学你的语气 对自己说着别回头看\n[02:36.75]可每句对不起 都像是命运对我的审判\n[02:40.78]所以呢 所以呢\n[02:44.19]练习多少遍 才能忘掉你的模样\n[02:48.52]所以呢 所以呢\n[02:51.09]若重逢在下个路口\n[02:52.71]能否用陌生人口吻 问候彼此别来无恙\n[02:59.99]所以呢 回忆进度 停在争吵的夜晚\n[03:04.45]你的晚安截图 在相册替我 保存着温暖\n[03:08.67]我学你的语气 对自己说着别回头看\n[03:12.45]可每句对不起 都像是命运对我的审判\n",
    "lyrics": [
      {
        "time": 0,
        "text": "作词 : 洗澡爱唱歌"
      },
      {
        "time": 1,
        "text": "作曲 : 洗澡爱唱歌"
      },
      {
        "time": 17.04,
        "text": "散场灯光 将你背影拉长"
      },
      {
        "time": 24.66,
        "text": "我没伸手 也没练习说谎"
      },
      {
        "time": 32.41,
        "text": "你眼里的霜 够我抵挡整季的荒凉"
      },
      {
        "time": 36.87,
        "text": "咖啡在凉 像拥抱的过往"
      },
      {
        "time": 40.42,
        "text": "指纹还在 触碰过的车窗"
      },
      {
        "time": 48.66,
        "text": "所以呢 挽留的话 要怎样才够漂亮"
      },
      {
        "time": 52.5,
        "text": "是否该感谢你 用离开为我 加冕了成长"
      },
      {
        "time": 56.61,
        "text": "我反复修改着 那些自欺的答案"
      },
      {
        "time": 60.44,
        "text": "可夜里辗转 思念就 无处躲藏"
      },
      {
        "time": 64.16,
        "text": "所以呢 回忆进度 停在争吵的夜晚"
      },
      {
        "time": 68.16,
        "text": "你的晚安截图 在相册替我 保存着温暖"
      },
      {
        "time": 72.8,
        "text": "我学你的语气 对自己说着别回头看"
      },
      {
        "time": 76.53,
        "text": "可每句对不起 都像是命运对我的审判"
      },
      {
        "time": 97.12,
        "text": "散场灯光 将你背影拉长"
      },
      {
        "time": 104.68,
        "text": "我没伸手 也没练习说谎"
      },
      {
        "time": 112.25,
        "text": "你眼里的霜 够我抵挡整季的荒凉"
      },
      {
        "time": 116.78,
        "text": "街景向后 像倒带的时光"
      },
      {
        "time": 120.43,
        "text": "耳机分你 右耳的情歌太响"
      },
      {
        "time": 122.78,
        "text": "那句别遗憾 悬在嘴边成了默片"
      },
      {
        "time": 128.91,
        "text": "所以呢 挽留的话 要怎样才够漂亮"
      },
      {
        "time": 132.62,
        "text": "是否该感谢你 用离开为我 加冕了成长"
      },
      {
        "time": 136.66,
        "text": "我反复修改着 那些自欺的答案"
      },
      {
        "time": 140.51,
        "text": "可夜里辗转 思念就 无处躲藏"
      },
      {
        "time": 144.34,
        "text": "所以呢 回忆进度 停在争吵的夜晚"
      },
      {
        "time": 148.43,
        "text": "你的晚安截图 在相册替我 保存着温暖"
      },
      {
        "time": 152.84,
        "text": "我学你的语气 对自己说着别回头看"
      },
      {
        "time": 156.75,
        "text": "可每句对不起 都像是命运对我的审判"
      },
      {
        "time": 160.78,
        "text": "所以呢 所以呢"
      },
      {
        "time": 164.19,
        "text": "练习多少遍 才能忘掉你的模样"
      },
      {
        "time": 168.52,
        "text": "所以呢 所以呢"
      },
      {
        "time": 171.09,
        "text": "若重逢在下个路口"
      },
      {
        "time": 172.71,
        "text": "能否用陌生人口吻 问候彼此别来无恙"
      },
      {
        "time": 179.99,
        "text": "所以呢 回忆进度 停在争吵的夜晚"
      },
      {
        "time": 184.45,
        "text": "你的晚安截图 在相册替我 保存着温暖"
      },
      {
        "time": 188.67,
        "text": "我学你的语气 对自己说着别回头看"
      },
      {
        "time": 192.45,
        "text": "可每句对不起 都像是命运对我的审判"
      }
    ]
  },
  {
    "id": 3336111049,
    "title": "Promise",
    "artist": "Wonstein",
    "album": "이 사랑 통역 되나요? (Soundtrack from the Netflix Series)",
    "coverUrl": "https://p1.music.126.net/seqH0WDy3R6o79t3FxUvdA==/109951172545086235.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=3336111049.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=3336111049",
    "duration": 188,
    "summary": "Wonstein · 이 사랑 통역 되나요? (Soundtrack from the Netflix Series)",
    "lyricsRaw": "[00:00.000] 作词 : Dailog/16\n[00:01.000] 作曲 : Dailog/Naiv\n[00:06.576]Keep in mind\n[00:11.023]I'm never gonna leave your life ever long\n[00:17.333]하루 종일 너의 마음 깊은 곳\n[00:21.878]계속 머물게 해 줘\n[00:25.077]언제라도 어디에도\n[00:28.155]날 느낄 수 있게\n[00:30.846]You'll be okay\n[00:35.650]난 너의 편이 돼 줄게 언제나\n[00:42.030]지금처럼 가장 가까운 곳\n[00:46.511]네 곁에 있게 해 줘\n[00:49.653]너의 상처가 궁금해도\n[00:52.782]담아둘게\n[00:55.323]So stay close\n[01:00.140]너의 진심은 내가 아니까\n[01:07.017]한 발짝만 다가와 줘\n[01:10.330]네게 손 닿을 수 있게\n[01:13.828]So babe I promise\n[01:16.946]Forever I'll never leave\n[01:23.019]가끔 서툰 표현도 난 의심 안 할게\n[01:29.196]날 선 너의 단어도 이해할 수 있어\n[01:34.989]너의 눈빛이면 난 충분해\n[01:38.780]아무 말 안 해도 돼\n[01:41.669]너의 마음도 너의 침묵도\n[01:44.925]느낄 수 있어\n[01:47.676]So stay close\n[01:52.609]너의 진심은 내가 아니까\n[01:59.395]한 발짝만 다가와 줘\n[02:02.637]네게 손 닿을 수 있게\n[02:06.155]So babe I promise\n[02:09.197]I won't ever leave\n[02:37.404]When you're down and falling\n[02:40.425]Know that I'll be there\n[02:43.496]눈물의 의미를 알 수 있게\n[02:50.003]쏟아지는 빗속에\n[02:53.148]너의 우산이 되어 줄게\n[02:58.466]Forever I'll never leave\n",
    "lyrics": [
      {
        "time": 0,
        "text": "作词 : Dailog/16"
      },
      {
        "time": 1,
        "text": "作曲 : Dailog/Naiv"
      },
      {
        "time": 6.576,
        "text": "Keep in mind"
      },
      {
        "time": 11.023,
        "text": "I'm never gonna leave your life ever long"
      },
      {
        "time": 17.333,
        "text": "하루 종일 너의 마음 깊은 곳"
      },
      {
        "time": 21.878,
        "text": "계속 머물게 해 줘"
      },
      {
        "time": 25.077,
        "text": "언제라도 어디에도"
      },
      {
        "time": 28.155,
        "text": "날 느낄 수 있게"
      },
      {
        "time": 30.846,
        "text": "You'll be okay"
      },
      {
        "time": 35.65,
        "text": "난 너의 편이 돼 줄게 언제나"
      },
      {
        "time": 42.03,
        "text": "지금처럼 가장 가까운 곳"
      },
      {
        "time": 46.511,
        "text": "네 곁에 있게 해 줘"
      },
      {
        "time": 49.653,
        "text": "너의 상처가 궁금해도"
      },
      {
        "time": 52.782,
        "text": "담아둘게"
      },
      {
        "time": 55.323,
        "text": "So stay close"
      },
      {
        "time": 60.14,
        "text": "너의 진심은 내가 아니까"
      },
      {
        "time": 67.017,
        "text": "한 발짝만 다가와 줘"
      },
      {
        "time": 70.33,
        "text": "네게 손 닿을 수 있게"
      },
      {
        "time": 73.828,
        "text": "So babe I promise"
      },
      {
        "time": 76.946,
        "text": "Forever I'll never leave"
      },
      {
        "time": 83.019,
        "text": "가끔 서툰 표현도 난 의심 안 할게"
      },
      {
        "time": 89.196,
        "text": "날 선 너의 단어도 이해할 수 있어"
      },
      {
        "time": 94.989,
        "text": "너의 눈빛이면 난 충분해"
      },
      {
        "time": 98.78,
        "text": "아무 말 안 해도 돼"
      },
      {
        "time": 101.669,
        "text": "너의 마음도 너의 침묵도"
      },
      {
        "time": 104.925,
        "text": "느낄 수 있어"
      },
      {
        "time": 107.676,
        "text": "So stay close"
      },
      {
        "time": 112.609,
        "text": "너의 진심은 내가 아니까"
      },
      {
        "time": 119.395,
        "text": "한 발짝만 다가와 줘"
      },
      {
        "time": 122.637,
        "text": "네게 손 닿을 수 있게"
      },
      {
        "time": 126.155,
        "text": "So babe I promise"
      },
      {
        "time": 129.197,
        "text": "I won't ever leave"
      },
      {
        "time": 157.404,
        "text": "When you're down and falling"
      },
      {
        "time": 160.425,
        "text": "Know that I'll be there"
      },
      {
        "time": 163.496,
        "text": "눈물의 의미를 알 수 있게"
      },
      {
        "time": 170.003,
        "text": "쏟아지는 빗속에"
      },
      {
        "time": 173.148,
        "text": "너의 우산이 되어 줄게"
      },
      {
        "time": 178.466,
        "text": "Forever I'll never leave"
      }
    ]
  },
  {
    "id": 3323748441,
    "title": "童话 R&B",
    "artist": "余翊",
    "album": "童话 R&B",
    "coverUrl": "https://p1.music.126.net/nKu7GdRvY9-x7JTkwdtRYQ==/109951172371103942.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=3323748441.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=3323748441",
    "duration": 228,
    "summary": "余翊 · 童话 R&B",
    "lyricsRaw": "[00:14.70]忘了有多久再没听到你\n[00:21.72]对我说你最爱的故事\n[00:28.74]我想了很久我开始慌了\n[00:35.64]是不是我又做错了什么\n[00:42.75]你哭着对我说\n[00:46.26]童话里都是骗人的\n[00:49.41]我不可能是你的王子\n[00:56.76]也许你不会懂\n[01:00.30]从你说爱我以后\n[01:03.69]我的天空星星都亮了\n[01:10.92]我愿变成童话里\n[01:14.67]你爱的那个天使\n[01:17.70]张开双手\n[01:19.89]变成翅膀守护你\n[01:24.75]你要相信\n[01:26.85]相信我们会像童话故事里\n[01:32.19]幸福和快乐是结局\n[01:42.24]你哭着对我说\n[01:45.87]童话里都是骗人的\n[01:49.32]我不可能是你的王子\n[01:56.22]也许你不会懂\n[01:59.67]从你说爱我以后\n[02:03.18]我的天空星星都亮了\n[02:10.32]我愿变成童话里\n[02:14.61]你爱的那个天使\n[02:17.22]张开双手变成翅膀守护你\n[02:24.42]你要相信\n[02:26.22]相信我们会像童话故事里\n[02:31.56]幸福和快乐是结局\n[02:38.19]我要变成童话里\n[02:42.51]你爱的那个天使\n[02:45.15]张开双手\n[02:47.37]变成翅膀守护你\n[02:52.53]你要相信\n[02:54.12]相信我们会像童话故事里\n[02:59.46]幸福和快乐是结局\n[03:06.39]我会变成童话里\n[03:10.47]你爱的那个天使\n[03:13.59]张开双手\n[03:15.18]变成翅膀守护你\n[03:20.58]你要相信\n[03:22.17]相信我们会像童话故事里\n[03:27.39]幸福和快乐是结局\n[03:35.67]一起写我们的结局\n",
    "lyrics": [
      {
        "time": 14.7,
        "text": "忘了有多久再没听到你"
      },
      {
        "time": 21.72,
        "text": "对我说你最爱的故事"
      },
      {
        "time": 28.74,
        "text": "我想了很久我开始慌了"
      },
      {
        "time": 35.64,
        "text": "是不是我又做错了什么"
      },
      {
        "time": 42.75,
        "text": "你哭着对我说"
      },
      {
        "time": 46.26,
        "text": "童话里都是骗人的"
      },
      {
        "time": 49.41,
        "text": "我不可能是你的王子"
      },
      {
        "time": 56.76,
        "text": "也许你不会懂"
      },
      {
        "time": 60.3,
        "text": "从你说爱我以后"
      },
      {
        "time": 63.69,
        "text": "我的天空星星都亮了"
      },
      {
        "time": 70.92,
        "text": "我愿变成童话里"
      },
      {
        "time": 74.67,
        "text": "你爱的那个天使"
      },
      {
        "time": 77.7,
        "text": "张开双手"
      },
      {
        "time": 79.89,
        "text": "变成翅膀守护你"
      },
      {
        "time": 84.75,
        "text": "你要相信"
      },
      {
        "time": 86.85,
        "text": "相信我们会像童话故事里"
      },
      {
        "time": 92.19,
        "text": "幸福和快乐是结局"
      },
      {
        "time": 102.24,
        "text": "你哭着对我说"
      },
      {
        "time": 105.87,
        "text": "童话里都是骗人的"
      },
      {
        "time": 109.32,
        "text": "我不可能是你的王子"
      },
      {
        "time": 116.22,
        "text": "也许你不会懂"
      },
      {
        "time": 119.67,
        "text": "从你说爱我以后"
      },
      {
        "time": 123.18,
        "text": "我的天空星星都亮了"
      },
      {
        "time": 130.32,
        "text": "我愿变成童话里"
      },
      {
        "time": 134.61,
        "text": "你爱的那个天使"
      },
      {
        "time": 137.22,
        "text": "张开双手变成翅膀守护你"
      },
      {
        "time": 144.42,
        "text": "你要相信"
      },
      {
        "time": 146.22,
        "text": "相信我们会像童话故事里"
      },
      {
        "time": 151.56,
        "text": "幸福和快乐是结局"
      },
      {
        "time": 158.19,
        "text": "我要变成童话里"
      },
      {
        "time": 162.51,
        "text": "你爱的那个天使"
      },
      {
        "time": 165.15,
        "text": "张开双手"
      },
      {
        "time": 167.37,
        "text": "变成翅膀守护你"
      },
      {
        "time": 172.53,
        "text": "你要相信"
      },
      {
        "time": 174.12,
        "text": "相信我们会像童话故事里"
      },
      {
        "time": 179.46,
        "text": "幸福和快乐是结局"
      },
      {
        "time": 186.39,
        "text": "我会变成童话里"
      },
      {
        "time": 190.47,
        "text": "你爱的那个天使"
      },
      {
        "time": 193.59,
        "text": "张开双手"
      },
      {
        "time": 195.18,
        "text": "变成翅膀守护你"
      },
      {
        "time": 200.58,
        "text": "你要相信"
      },
      {
        "time": 202.17,
        "text": "相信我们会像童话故事里"
      },
      {
        "time": 207.39,
        "text": "幸福和快乐是结局"
      },
      {
        "time": 215.67,
        "text": "一起写我们的结局"
      }
    ]
  },
  {
    "id": 2653800985,
    "title": "爱河",
    "artist": "ZaZaZsu咂咂苏",
    "album": "第一千夜",
    "coverUrl": "https://p1.music.126.net/mcywVZFTWOiB92rH5fM8LA==/109951170242389679.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=2653800985.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=2653800985",
    "duration": 197,
    "summary": "ZaZaZsu咂咂苏 · 第一千夜",
    "lyricsRaw": "[00:00.00] 作词 : 马懿\n[00:00.32] 作曲 : 程锦远\n[00:00.65]如果\n[00:02.30]晚霞绕过火车 等着\n[00:08.39]恋人就能猜完\n[00:12.34]彼此情话\n[00:16.37]如果\n[00:18.03]最相爱的才能去天涯\n[00:24.19]你会不会和我一起\n[00:28.28]看浪花跃下\n[00:34.23]谁生来要做智者\n[00:37.42]我只想要入爱河\n[00:42.23]只有你\n[00:43.99]听到我 荡漾着\n[00:50.21]选一个愚笨的我\n[00:53.31]陪你荡入爱河\n[00:58.20]无论落日在哪\n[01:02.36]我们都 荡漾着\n[01:24.18]如果\n[01:26.30]晚风绕着海鸥 吹过\n[01:32.39]恋人就能听见\n[01:36.45]彼此牵挂\n[01:40.23]如果\n[01:42.15]最相爱的才能去天涯\n[01:48.16]你会不会和我一起\n[01:51.98]看浪花跃下\n[02:02.44]谁生来要做智者\n[02:05.65]我只想要入爱河\n[02:10.23]只有你\n[02:12.10]听到我 荡漾着\n[02:18.22]选一个愚笨的我\n[02:21.35]陪你荡入爱河\n[02:26.16]无论落日在哪\n[02:30.25]我们都 荡漾着\n[02:58.34]无论落日多晚\n[03:02.50]我们都 荡漾着\n[03:10.68]\n[03:12.12] 编曲 : 程锦远\n[03:12.84] 钢琴 : 程锦远\n[03:13.55] 和声 : 曾雪雅/程锦远\n[03:14.27] 音轨编辑 : 程锦远\n[03:14.98] 录音 : 小武@Sync Studio\n[03:15.69] 混音 : 小武@Sync Studio\n[03:16.41] 母带 : 小武@Sync Studio\n",
    "lyrics": [
      {
        "time": 0,
        "text": "作词 : 马懿"
      },
      {
        "time": 0.32,
        "text": "作曲 : 程锦远"
      },
      {
        "time": 0.65,
        "text": "如果"
      },
      {
        "time": 2.3,
        "text": "晚霞绕过火车 等着"
      },
      {
        "time": 8.39,
        "text": "恋人就能猜完"
      },
      {
        "time": 12.34,
        "text": "彼此情话"
      },
      {
        "time": 16.37,
        "text": "如果"
      },
      {
        "time": 18.03,
        "text": "最相爱的才能去天涯"
      },
      {
        "time": 24.19,
        "text": "你会不会和我一起"
      },
      {
        "time": 28.28,
        "text": "看浪花跃下"
      },
      {
        "time": 34.23,
        "text": "谁生来要做智者"
      },
      {
        "time": 37.42,
        "text": "我只想要入爱河"
      },
      {
        "time": 42.23,
        "text": "只有你"
      },
      {
        "time": 43.99,
        "text": "听到我 荡漾着"
      },
      {
        "time": 50.21,
        "text": "选一个愚笨的我"
      },
      {
        "time": 53.31,
        "text": "陪你荡入爱河"
      },
      {
        "time": 58.2,
        "text": "无论落日在哪"
      },
      {
        "time": 62.36,
        "text": "我们都 荡漾着"
      },
      {
        "time": 84.18,
        "text": "如果"
      },
      {
        "time": 86.3,
        "text": "晚风绕着海鸥 吹过"
      },
      {
        "time": 92.39,
        "text": "恋人就能听见"
      },
      {
        "time": 96.45,
        "text": "彼此牵挂"
      },
      {
        "time": 100.23,
        "text": "如果"
      },
      {
        "time": 102.15,
        "text": "最相爱的才能去天涯"
      },
      {
        "time": 108.16,
        "text": "你会不会和我一起"
      },
      {
        "time": 111.98,
        "text": "看浪花跃下"
      },
      {
        "time": 122.44,
        "text": "谁生来要做智者"
      },
      {
        "time": 125.65,
        "text": "我只想要入爱河"
      },
      {
        "time": 130.23,
        "text": "只有你"
      },
      {
        "time": 132.1,
        "text": "听到我 荡漾着"
      },
      {
        "time": 138.22,
        "text": "选一个愚笨的我"
      },
      {
        "time": 141.35,
        "text": "陪你荡入爱河"
      },
      {
        "time": 146.16,
        "text": "无论落日在哪"
      },
      {
        "time": 150.25,
        "text": "我们都 荡漾着"
      },
      {
        "time": 178.34,
        "text": "无论落日多晚"
      },
      {
        "time": 182.5,
        "text": "我们都 荡漾着"
      },
      {
        "time": 192.12,
        "text": "编曲 : 程锦远"
      },
      {
        "time": 192.84,
        "text": "钢琴 : 程锦远"
      },
      {
        "time": 193.55,
        "text": "和声 : 曾雪雅/程锦远"
      },
      {
        "time": 194.27,
        "text": "音轨编辑 : 程锦远"
      },
      {
        "time": 194.98,
        "text": "录音 : 小武@Sync Studio"
      },
      {
        "time": 195.69,
        "text": "混音 : 小武@Sync Studio"
      },
      {
        "time": 196.41,
        "text": "母带 : 小武@Sync Studio"
      }
    ]
  },
  {
    "id": 3333988321,
    "title": "一半一半",
    "artist": "Top Barry / INDEcompany",
    "album": "一半一半",
    "coverUrl": "https://p1.music.126.net/EgbPD3CwVQojZ4OWse4YrA==/109951172511748152.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=3333988321.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=3333988321",
    "duration": 235,
    "summary": "Top Barry / INDEcompany · 一半一半",
    "lyricsRaw": "[00:00.00] 作词 : Top Barry\n[00:01.00] 作曲 : Top Barry\n[00:02.00] 制作人 : Ocd@INDE company/LusciousBB\n[00:03.00] OP : INDEcompany\n[00:14.61]无力感在把眼泪一点一点吞噬\n[00:17.99]空旷的街道早没了一点声\n[00:21.60]那天回到我们俩熟悉的城市\n[00:24.38]马路上关闭的灯有一半熟悉一半生\n[00:28.46]酒精让我一半温热一般冷\n[00:31.60]可你扮演着成熟\n[00:32.47]我一半没感觉一半疼\n[00:34.97]就最后变成一半猜忌 一半问\n[00:38.22]我可能是自己一半爱你 一半恨\n[00:41.95]这离别是我灵感的秤砣\n[00:44.99]我内心的痛是\n[00:46.26]不对等的沉默\n[00:48.93]思念是困住我俩的绳索\n[00:51.51]就算血肉模糊\n[00:53.10]我也没办法挣脱\n[00:56.19]完美的你终于接受\n[00:58.11]放过剩下的我走\n[01:01.39]我接受这结果\n[01:03.36]你画的杰作\n[01:04.99]我找不到线索\n[01:06.37]像被牵着走\n[01:07.81]但是我不想要一半一半\n[01:10.17]一半一半\n[01:11.39]可我们俩这一段一段\n[01:13.51]已断已断\n[01:14.78]街上的路灯一盏一盏\n[01:16.89]一闪一闪\n[01:18.17]眼泪滴在路上一瓣一瓣\n[01:20.31]一瓣一瓣\n[01:21.56]可是我不想要一半一半\n[01:23.73]一半一半\n[01:24.96]我深陷在一边喜欢一边离开\n[01:28.65]他们问我丢掉了太多遗不遗憾\n[01:35.11]一半一半\n[01:50.56]在浪漫还有现实之间作斗争\n[01:53.79]我是脆弱的 可面对你我不敢疼\n[01:57.41]我思来想去谁的对错有可能\n[02:00.22]在不完整的马拉松里也只有时间获胜\n[02:03.92]一半包扎 一半被留下伤疤\n[02:07.13]一半在冷言相对 另一半在不断讲话\n[02:10.81]我知道这些矛盾都是爱在拱火\n[02:14.12]我想要找到平衡于是对着麦克风说\n[02:17.39]Marry\n[02:18.22]我知道你在\n[02:19.51]我已经习惯了平淡\n[02:20.85]我感受不到你的脉络\n[02:22.80]可能这是我最大遗憾\n[02:24.20]我知道除了痛以外\n[02:25.85]以前经历过的幸福那也算\n[02:27.55]这个世界没纯粹的恨与爱\n[02:29.83]更多的是一半一半\n[02:31.12]没机会重来一遍\n[02:32.81]没机会让我能多看一眼\n[02:34.90]没机会能和你能讨论\n[02:36.44]如果我们再勇敢一点\n[02:38.16]我想要克服懦弱是我的超能力\n[02:41.64]下决心不能回头我是我最大的矛盾体\n[02:44.79]后来我继续rap and rap\n[02:46.66]我告诉我心不疼\n[02:48.39]越来越多的back to back\n[02:49.83]你身边也换了位新的人\n[02:51.94]思念 断又不断\n[02:53.42]我感受到变两半的身体\n[02:55.60]一半在恨在念旧\n[02:56.85]另一半走向了新的路程\n[02:58.87]夜里的眼泪太苦了\n[03:00.37]对我来说有点不下酒\n[03:01.94]我把上个我放原地\n[03:03.74]继续自己往下走\n[03:05.46]我问自己\n[03:06.62]你给的爱是不是我不想要的那种\n[03:08.76]So please don’t calling my phone\n[03:10.63]我想要完整的我because i know\n[03:12.16]但是我不想要一半一半\n[03:13.61]一半一半\n[03:14.79]可我们俩这一段一段\n[03:16.80]已断已断\n[03:18.20]街上的路灯一盏一盏\n[03:20.27]一闪一闪\n[03:21.65]眼泪滴在路上一瓣一瓣\n[03:23.69]一瓣一瓣\n[03:24.93]可是我不想要一半一半\n[03:27.12]一半一半\n[03:28.49]我深陷在一边喜欢一边离开\n[03:31.95]他们问我丢掉了太多遗不遗憾\n[03:38.98]一半一半\n[03:50.28] 编曲 : LusciousBB\n[03:50.91]  混音：LeeHX李鸿翔\n[03:51.53]  母带：LeeHX李鸿翔\n[03:52.16]  和声：罗陈鹤子Heazy\n[03:52.78]  音乐营销：乐象新息Y3XMUSIC\n[03:53.41]  视觉设计：杰克波\n[03:54.03]  统筹：费曼/嘟嘟\n[03:54.66]  出品人：车澈 / Terry\n",
    "lyrics": [
      {
        "time": 0,
        "text": "作词 : Top Barry"
      },
      {
        "time": 1,
        "text": "作曲 : Top Barry"
      },
      {
        "time": 2,
        "text": "制作人 : Ocd@INDE company/LusciousBB"
      },
      {
        "time": 3,
        "text": "OP : INDEcompany"
      },
      {
        "time": 14.61,
        "text": "无力感在把眼泪一点一点吞噬"
      },
      {
        "time": 17.99,
        "text": "空旷的街道早没了一点声"
      },
      {
        "time": 21.6,
        "text": "那天回到我们俩熟悉的城市"
      },
      {
        "time": 24.38,
        "text": "马路上关闭的灯有一半熟悉一半生"
      },
      {
        "time": 28.46,
        "text": "酒精让我一半温热一般冷"
      },
      {
        "time": 31.6,
        "text": "可你扮演着成熟"
      },
      {
        "time": 32.47,
        "text": "我一半没感觉一半疼"
      },
      {
        "time": 34.97,
        "text": "就最后变成一半猜忌 一半问"
      },
      {
        "time": 38.22,
        "text": "我可能是自己一半爱你 一半恨"
      },
      {
        "time": 41.95,
        "text": "这离别是我灵感的秤砣"
      },
      {
        "time": 44.99,
        "text": "我内心的痛是"
      },
      {
        "time": 46.26,
        "text": "不对等的沉默"
      },
      {
        "time": 48.93,
        "text": "思念是困住我俩的绳索"
      },
      {
        "time": 51.51,
        "text": "就算血肉模糊"
      },
      {
        "time": 53.1,
        "text": "我也没办法挣脱"
      },
      {
        "time": 56.19,
        "text": "完美的你终于接受"
      },
      {
        "time": 58.11,
        "text": "放过剩下的我走"
      },
      {
        "time": 61.39,
        "text": "我接受这结果"
      },
      {
        "time": 63.36,
        "text": "你画的杰作"
      },
      {
        "time": 64.99,
        "text": "我找不到线索"
      },
      {
        "time": 66.37,
        "text": "像被牵着走"
      },
      {
        "time": 67.81,
        "text": "但是我不想要一半一半"
      },
      {
        "time": 70.17,
        "text": "一半一半"
      },
      {
        "time": 71.39,
        "text": "可我们俩这一段一段"
      },
      {
        "time": 73.51,
        "text": "已断已断"
      },
      {
        "time": 74.78,
        "text": "街上的路灯一盏一盏"
      },
      {
        "time": 76.89,
        "text": "一闪一闪"
      },
      {
        "time": 78.17,
        "text": "眼泪滴在路上一瓣一瓣"
      },
      {
        "time": 80.31,
        "text": "一瓣一瓣"
      },
      {
        "time": 81.56,
        "text": "可是我不想要一半一半"
      },
      {
        "time": 83.73,
        "text": "一半一半"
      },
      {
        "time": 84.96,
        "text": "我深陷在一边喜欢一边离开"
      },
      {
        "time": 88.65,
        "text": "他们问我丢掉了太多遗不遗憾"
      },
      {
        "time": 95.11,
        "text": "一半一半"
      },
      {
        "time": 110.56,
        "text": "在浪漫还有现实之间作斗争"
      },
      {
        "time": 113.79,
        "text": "我是脆弱的 可面对你我不敢疼"
      },
      {
        "time": 117.41,
        "text": "我思来想去谁的对错有可能"
      },
      {
        "time": 120.22,
        "text": "在不完整的马拉松里也只有时间获胜"
      },
      {
        "time": 123.92,
        "text": "一半包扎 一半被留下伤疤"
      },
      {
        "time": 127.13,
        "text": "一半在冷言相对 另一半在不断讲话"
      },
      {
        "time": 130.81,
        "text": "我知道这些矛盾都是爱在拱火"
      },
      {
        "time": 134.12,
        "text": "我想要找到平衡于是对着麦克风说"
      },
      {
        "time": 137.39,
        "text": "Marry"
      },
      {
        "time": 138.22,
        "text": "我知道你在"
      },
      {
        "time": 139.51,
        "text": "我已经习惯了平淡"
      },
      {
        "time": 140.85,
        "text": "我感受不到你的脉络"
      },
      {
        "time": 142.8,
        "text": "可能这是我最大遗憾"
      },
      {
        "time": 144.2,
        "text": "我知道除了痛以外"
      },
      {
        "time": 145.85,
        "text": "以前经历过的幸福那也算"
      },
      {
        "time": 147.55,
        "text": "这个世界没纯粹的恨与爱"
      },
      {
        "time": 149.83,
        "text": "更多的是一半一半"
      },
      {
        "time": 151.12,
        "text": "没机会重来一遍"
      },
      {
        "time": 152.81,
        "text": "没机会让我能多看一眼"
      },
      {
        "time": 154.9,
        "text": "没机会能和你能讨论"
      },
      {
        "time": 156.44,
        "text": "如果我们再勇敢一点"
      },
      {
        "time": 158.16,
        "text": "我想要克服懦弱是我的超能力"
      },
      {
        "time": 161.64,
        "text": "下决心不能回头我是我最大的矛盾体"
      },
      {
        "time": 164.79,
        "text": "后来我继续rap and rap"
      },
      {
        "time": 166.66,
        "text": "我告诉我心不疼"
      },
      {
        "time": 168.39,
        "text": "越来越多的back to back"
      },
      {
        "time": 169.83,
        "text": "你身边也换了位新的人"
      },
      {
        "time": 171.94,
        "text": "思念 断又不断"
      },
      {
        "time": 173.42,
        "text": "我感受到变两半的身体"
      },
      {
        "time": 175.6,
        "text": "一半在恨在念旧"
      },
      {
        "time": 176.85,
        "text": "另一半走向了新的路程"
      },
      {
        "time": 178.87,
        "text": "夜里的眼泪太苦了"
      },
      {
        "time": 180.37,
        "text": "对我来说有点不下酒"
      },
      {
        "time": 181.94,
        "text": "我把上个我放原地"
      },
      {
        "time": 183.74,
        "text": "继续自己往下走"
      },
      {
        "time": 185.46,
        "text": "我问自己"
      },
      {
        "time": 186.62,
        "text": "你给的爱是不是我不想要的那种"
      },
      {
        "time": 188.76,
        "text": "So please don’t calling my phone"
      },
      {
        "time": 190.63,
        "text": "我想要完整的我because i know"
      },
      {
        "time": 192.16,
        "text": "但是我不想要一半一半"
      },
      {
        "time": 193.61,
        "text": "一半一半"
      },
      {
        "time": 194.79,
        "text": "可我们俩这一段一段"
      },
      {
        "time": 196.8,
        "text": "已断已断"
      },
      {
        "time": 198.2,
        "text": "街上的路灯一盏一盏"
      },
      {
        "time": 200.27,
        "text": "一闪一闪"
      },
      {
        "time": 201.65,
        "text": "眼泪滴在路上一瓣一瓣"
      },
      {
        "time": 203.69,
        "text": "一瓣一瓣"
      },
      {
        "time": 204.93,
        "text": "可是我不想要一半一半"
      },
      {
        "time": 207.12,
        "text": "一半一半"
      },
      {
        "time": 208.49,
        "text": "我深陷在一边喜欢一边离开"
      },
      {
        "time": 211.95,
        "text": "他们问我丢掉了太多遗不遗憾"
      },
      {
        "time": 218.98,
        "text": "一半一半"
      },
      {
        "time": 230.28,
        "text": "编曲 : LusciousBB"
      },
      {
        "time": 230.91,
        "text": "混音：LeeHX李鸿翔"
      },
      {
        "time": 231.53,
        "text": "母带：LeeHX李鸿翔"
      },
      {
        "time": 232.16,
        "text": "和声：罗陈鹤子Heazy"
      },
      {
        "time": 232.78,
        "text": "音乐营销：乐象新息Y3XMUSIC"
      },
      {
        "time": 233.41,
        "text": "视觉设计：杰克波"
      },
      {
        "time": 234.03,
        "text": "统筹：费曼/嘟嘟"
      },
      {
        "time": 234.66,
        "text": "出品人：车澈 / Terry"
      }
    ]
  },
  {
    "id": 2096427703,
    "title": "察觉",
    "artist": "TC",
    "album": "察觉",
    "coverUrl": "https://p1.music.126.net/07nzFzMiOhhx_6_qVkc8PQ==/109951169029181629.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=2096427703.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=2096427703",
    "duration": 217,
    "summary": "TC · 察觉",
    "lyricsRaw": "[00:00.00] 作词 : TC\n[00:01.00] 作曲 : TC\n[00:02.00] 编曲 : MORROW\n[00:03.00] 制作人 : TC\n[00:27.96]思念总将我拉回那个冬夜\n[00:31.37]你刻意⾛进雪⾥我看不⻅\n[00:34.88]说我们的距离你能否察觉\n[00:38.44]离得很近却像在不同世界\n[00:42.38]依旧还记得你说那句抱歉\n[00:45.69]把我推向情绪崩塌的边缘\n[00:49.29]所有感情最终换来是告别\n[00:52.90]就让我成为你的过眼云烟\n[00:56.15]如此不起眼\n[00:58.27]像是⽚落叶\n[00:59.16]承载着我们的誓⾔\n[01:00.98]伴随着你的⾛远也逐渐消失在这⽚空间\n[01:05.44]我闭上双眼都是那些美好画⾯ 不断浮现\n[01:09.88]纠缠我 沉重的步伐 ⽆法迈向前\n[01:13.58]那不真实的爱意我怎么没察觉\n[01:17.16]你我经历的那么多怎么能忘却\n[01:20.86]难道那些你说的永远都是谎⾔\n[01:24.54]在你⼼⾥⾯\n[01:27.49]有没有任何⼀个瞬间 对我动了情\n[01:30.99]有没有任何⼀个瞬间 对我动了情\n[01:34.33]有没有任何⼀个瞬间 对我动了情\n[01:37.83]有没有 有没有\n[01:43.71]pls don’t lie to me\n[01:50.86]pls don’t lie to me\n[01:54.55]思念总将我拉回那个冬夜\n[01:57.71]你刻意⾛进雪⾥我看不⻅\n[02:01.42]说我们的距离你能否察觉\n[02:05.06]离得很近却像在不同世界\n[02:08.87]依旧还记得你说那句抱歉\n[02:12.20]把我推向情绪崩塌的边缘\n[02:15.70]所有感情最终换来是告别\n[02:19.38]就让我成为你的过眼云烟\n[02:22.56]如此不起眼\n[02:24.79]你为何躲避我视线\n[02:26.15]就算这是我们终点\n[02:27.98]你却还在那⾥对我说客套话\n[02:31.25]就算是感情有⼀些\n[02:33.36]⼀起经历也有⼀些\n[02:35.32]那为何你还在拒绝说⼼⾥话\n[02:38.23]我知道你也会讨厌这时刻\n[02:41.85]但你连给个答案都不舍\n[02:45.43]留下是⽆尽痛苦和猜测\n[02:49.06]就让我坠⼊回忆漩涡吧\n[02:52.00]思念总将我拉回那个冬夜\n[02:55.28]你刻意⾛进雪⾥我看不⻅\n[02:58.97]说我们的距离你能否察觉\n[03:02.61]离得很近却像在不同世界\n[03:06.46]依旧还记得你说那句抱歉\n[03:09.79]把我推向情绪崩塌的边缘\n[03:13.44]所有感情最终换来是告别\n[03:17.05]就让我成为你的过眼云烟\n[03:20.16]如此不起眼\n[03:31.83] 和声 : TC\n[03:32.83] 混音 : TC\n[03:33.83] 封⾯：Ms.CANG\n",
    "lyrics": [
      {
        "time": 0,
        "text": "作词 : TC"
      },
      {
        "time": 1,
        "text": "作曲 : TC"
      },
      {
        "time": 2,
        "text": "编曲 : MORROW"
      },
      {
        "time": 3,
        "text": "制作人 : TC"
      },
      {
        "time": 27.96,
        "text": "思念总将我拉回那个冬夜"
      },
      {
        "time": 31.37,
        "text": "你刻意⾛进雪⾥我看不⻅"
      },
      {
        "time": 34.88,
        "text": "说我们的距离你能否察觉"
      },
      {
        "time": 38.44,
        "text": "离得很近却像在不同世界"
      },
      {
        "time": 42.38,
        "text": "依旧还记得你说那句抱歉"
      },
      {
        "time": 45.69,
        "text": "把我推向情绪崩塌的边缘"
      },
      {
        "time": 49.29,
        "text": "所有感情最终换来是告别"
      },
      {
        "time": 52.9,
        "text": "就让我成为你的过眼云烟"
      },
      {
        "time": 56.15,
        "text": "如此不起眼"
      },
      {
        "time": 58.27,
        "text": "像是⽚落叶"
      },
      {
        "time": 59.16,
        "text": "承载着我们的誓⾔"
      },
      {
        "time": 60.98,
        "text": "伴随着你的⾛远也逐渐消失在这⽚空间"
      },
      {
        "time": 65.44,
        "text": "我闭上双眼都是那些美好画⾯ 不断浮现"
      },
      {
        "time": 69.88,
        "text": "纠缠我 沉重的步伐 ⽆法迈向前"
      },
      {
        "time": 73.58,
        "text": "那不真实的爱意我怎么没察觉"
      },
      {
        "time": 77.16,
        "text": "你我经历的那么多怎么能忘却"
      },
      {
        "time": 80.86,
        "text": "难道那些你说的永远都是谎⾔"
      },
      {
        "time": 84.54,
        "text": "在你⼼⾥⾯"
      },
      {
        "time": 87.49,
        "text": "有没有任何⼀个瞬间 对我动了情"
      },
      {
        "time": 90.99,
        "text": "有没有任何⼀个瞬间 对我动了情"
      },
      {
        "time": 94.33,
        "text": "有没有任何⼀个瞬间 对我动了情"
      },
      {
        "time": 97.83,
        "text": "有没有 有没有"
      },
      {
        "time": 103.71,
        "text": "pls don’t lie to me"
      },
      {
        "time": 110.86,
        "text": "pls don’t lie to me"
      },
      {
        "time": 114.55,
        "text": "思念总将我拉回那个冬夜"
      },
      {
        "time": 117.71,
        "text": "你刻意⾛进雪⾥我看不⻅"
      },
      {
        "time": 121.42,
        "text": "说我们的距离你能否察觉"
      },
      {
        "time": 125.06,
        "text": "离得很近却像在不同世界"
      },
      {
        "time": 128.87,
        "text": "依旧还记得你说那句抱歉"
      },
      {
        "time": 132.2,
        "text": "把我推向情绪崩塌的边缘"
      },
      {
        "time": 135.7,
        "text": "所有感情最终换来是告别"
      },
      {
        "time": 139.38,
        "text": "就让我成为你的过眼云烟"
      },
      {
        "time": 142.56,
        "text": "如此不起眼"
      },
      {
        "time": 144.79,
        "text": "你为何躲避我视线"
      },
      {
        "time": 146.15,
        "text": "就算这是我们终点"
      },
      {
        "time": 147.98,
        "text": "你却还在那⾥对我说客套话"
      },
      {
        "time": 151.25,
        "text": "就算是感情有⼀些"
      },
      {
        "time": 153.36,
        "text": "⼀起经历也有⼀些"
      },
      {
        "time": 155.32,
        "text": "那为何你还在拒绝说⼼⾥话"
      },
      {
        "time": 158.23,
        "text": "我知道你也会讨厌这时刻"
      },
      {
        "time": 161.85,
        "text": "但你连给个答案都不舍"
      },
      {
        "time": 165.43,
        "text": "留下是⽆尽痛苦和猜测"
      },
      {
        "time": 169.06,
        "text": "就让我坠⼊回忆漩涡吧"
      },
      {
        "time": 172,
        "text": "思念总将我拉回那个冬夜"
      },
      {
        "time": 175.28,
        "text": "你刻意⾛进雪⾥我看不⻅"
      },
      {
        "time": 178.97,
        "text": "说我们的距离你能否察觉"
      },
      {
        "time": 182.61,
        "text": "离得很近却像在不同世界"
      },
      {
        "time": 186.46,
        "text": "依旧还记得你说那句抱歉"
      },
      {
        "time": 189.79,
        "text": "把我推向情绪崩塌的边缘"
      },
      {
        "time": 193.44,
        "text": "所有感情最终换来是告别"
      },
      {
        "time": 197.05,
        "text": "就让我成为你的过眼云烟"
      },
      {
        "time": 200.16,
        "text": "如此不起眼"
      },
      {
        "time": 211.83,
        "text": "和声 : TC"
      },
      {
        "time": 212.83,
        "text": "混音 : TC"
      },
      {
        "time": 213.83,
        "text": "封⾯：Ms.CANG"
      }
    ]
  },
  {
    "id": 3326399703,
    "title": "你的眼睛像星星",
    "artist": "乐乐",
    "album": "你的眼睛像星星",
    "coverUrl": "https://p1.music.126.net/7oCB9mqEqOFCS6U4COaJ1w==/109951172402757013.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=3326399703.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=3326399703",
    "duration": 192,
    "summary": "乐乐 · 你的眼睛像星星",
    "lyricsRaw": "[00:21.87]怎么看你都不会厌倦\n[00:26.46]这种感觉一直没有改变\n[00:31.02]只想陪你在每一个明天\n[00:35.04]一直在你身边\n[00:40.20]你就像礼物降临人间\n[00:44.76]把美好全都带到我面前\n[00:49.29]就像是天使许下的愿\n[00:53.34]让幸福都兑现\n[00:57.60]你的眼睛像星星\n[01:01.05]亮晶晶照亮了我的生命\n[01:04.47]多幸运是命中注定\n[01:07.32]这一次我为你暂停\n[01:10.14]全都是你的身影\n[01:12.42]只有你让我偏心\n[01:15.84]你的笑声像风铃\n[01:19.29]太动听唤醒了我的神经\n[01:22.56]好安静此刻的风景\n[01:25.59]这感觉叫做爱情\n[01:35.55]如果孤单是漫长的夜\n[01:40.20]你就是那轮皎洁的月\n[01:45.15]照亮了我寒冷的世界\n[01:47.55]融化了所有的雪\n[01:53.22]是你改写了我的情节\n[01:57.66]带我去看了更广阔的原野\n[02:03.54]那里的风吹得很惬意\n[02:05.70]是我们最美的这一页\n[02:11.34]你的眼睛像星星\n[02:14.13]亮晶晶照亮了我的生命\n[02:17.55]多幸运是命中注定\n[02:20.37]这一次我为你暂停\n[02:23.25]全都是你的身影\n[02:25.53]只有你让我偏心\n[02:29.52]你的笑声像风铃\n[02:32.31]太动听唤醒了我的神经\n[02:35.49]好安静此刻的风景\n[02:38.64]这感觉叫做爱情\n",
    "lyrics": [
      {
        "time": 21.87,
        "text": "怎么看你都不会厌倦"
      },
      {
        "time": 26.46,
        "text": "这种感觉一直没有改变"
      },
      {
        "time": 31.02,
        "text": "只想陪你在每一个明天"
      },
      {
        "time": 35.04,
        "text": "一直在你身边"
      },
      {
        "time": 40.2,
        "text": "你就像礼物降临人间"
      },
      {
        "time": 44.76,
        "text": "把美好全都带到我面前"
      },
      {
        "time": 49.29,
        "text": "就像是天使许下的愿"
      },
      {
        "time": 53.34,
        "text": "让幸福都兑现"
      },
      {
        "time": 57.6,
        "text": "你的眼睛像星星"
      },
      {
        "time": 61.05,
        "text": "亮晶晶照亮了我的生命"
      },
      {
        "time": 64.47,
        "text": "多幸运是命中注定"
      },
      {
        "time": 67.32,
        "text": "这一次我为你暂停"
      },
      {
        "time": 70.14,
        "text": "全都是你的身影"
      },
      {
        "time": 72.42,
        "text": "只有你让我偏心"
      },
      {
        "time": 75.84,
        "text": "你的笑声像风铃"
      },
      {
        "time": 79.29,
        "text": "太动听唤醒了我的神经"
      },
      {
        "time": 82.56,
        "text": "好安静此刻的风景"
      },
      {
        "time": 85.59,
        "text": "这感觉叫做爱情"
      },
      {
        "time": 95.55,
        "text": "如果孤单是漫长的夜"
      },
      {
        "time": 100.2,
        "text": "你就是那轮皎洁的月"
      },
      {
        "time": 105.15,
        "text": "照亮了我寒冷的世界"
      },
      {
        "time": 107.55,
        "text": "融化了所有的雪"
      },
      {
        "time": 113.22,
        "text": "是你改写了我的情节"
      },
      {
        "time": 117.66,
        "text": "带我去看了更广阔的原野"
      },
      {
        "time": 123.54,
        "text": "那里的风吹得很惬意"
      },
      {
        "time": 125.7,
        "text": "是我们最美的这一页"
      },
      {
        "time": 131.34,
        "text": "你的眼睛像星星"
      },
      {
        "time": 134.13,
        "text": "亮晶晶照亮了我的生命"
      },
      {
        "time": 137.55,
        "text": "多幸运是命中注定"
      },
      {
        "time": 140.37,
        "text": "这一次我为你暂停"
      },
      {
        "time": 143.25,
        "text": "全都是你的身影"
      },
      {
        "time": 145.53,
        "text": "只有你让我偏心"
      },
      {
        "time": 149.52,
        "text": "你的笑声像风铃"
      },
      {
        "time": 152.31,
        "text": "太动听唤醒了我的神经"
      },
      {
        "time": 155.49,
        "text": "好安静此刻的风景"
      },
      {
        "time": 158.64,
        "text": "这感觉叫做爱情"
      }
    ]
  },
  {
    "id": 1917411376,
    "title": "玛奇玛 (Prod.muto)",
    "artist": "SASIOVERLXRD",
    "album": "成嶋亮",
    "coverUrl": "https://p1.music.126.net/cabX9QFRIZa2dHJny-qTpg==/109951167009569183.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=1917411376.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=1917411376",
    "duration": 120,
    "summary": "SASIOVERLXRD · 成嶋亮",
    "lyricsRaw": "[00:00.000] 制作人 : muto\n[00:01.000] 作词 : SASIOVERLXRD\n[00:02.000] 作曲 : SASIOVERLXRD\n[00:03.000] 编曲 : SASIOVERLXRD\n[00:19.643]说完你就笑了这她吗是对不起?\n[00:22.149]报复太多连温柔都会想不起\n[00:24.906]实在恨不起你这个精神控制者\n[00:27.411]这次说的喜欢你又要来通过谁\n[00:29.666]我真的不想抱团取暖和他们一堆\n[00:32.424]只有你才能把鸽子都养的不会飞\n[00:34.681]我现在乱用钱是觉得以前自己亏\n[00:37.188]我说的太少因为话都全在mixtape\n[00:40.451]他才是你肉体上的king\n[00:41.954]你不是狗就有问题\n[00:43.208]都看到你脖子的印\n[00:44.211]不是代表爱是代表性\n[00:45.716]说句想我就能掏了心\n[00:46.970]离不开我的饲养区\n[00:48.223]直到我想过真的跳下去\n[00:49.728]你只说我还没同意\n[00:50.982]Fall 我们只有绳子没得桥\n[00:52.737]想你真的太痛了甚至超过一把刀\n[00:55.496]我把命都给了好像你会觉得少\n[00:58.004]到底捏住什么知道我不愿跑\n[01:00.762]我怕取不下来就像戴上口罩\n[01:03.270]你下的每个命令都是我的饲料\n[01:05.777]手臂有抓痕因为被你远程捆到\n[01:08.284]一只动物你会怎么叫它do urself\n[01:10.792]你想靠支配还是其实你也弱小\n[01:13.548]不用做举动我自己能混淆\n[01:15.806]你舔起手就能尝到我的味道\n[01:18.563]想让你消失到又怕不能再遇到\n[01:20.820]说完你就笑了这她吗是对不起?\n[01:23.579]报复太多 连温柔都会想不起\n[01:26.085]实在恨不起你这个精神控制者\n[01:28.593]这次说的喜欢你又要来通过谁\n[01:31.100]我真的不想抱团取暖和他们一堆\n[01:33.608]只有你才能把鸽子都养的不会飞\n[01:36.114]我现在乱用钱是觉得以前自己亏\n[01:40.126]我说的太少因为话都全在mixtape\n",
    "lyrics": [
      {
        "time": 0,
        "text": "制作人 : muto"
      },
      {
        "time": 1,
        "text": "作词 : SASIOVERLXRD"
      },
      {
        "time": 2,
        "text": "作曲 : SASIOVERLXRD"
      },
      {
        "time": 3,
        "text": "编曲 : SASIOVERLXRD"
      },
      {
        "time": 19.643,
        "text": "说完你就笑了这她吗是对不起?"
      },
      {
        "time": 22.149,
        "text": "报复太多连温柔都会想不起"
      },
      {
        "time": 24.906,
        "text": "实在恨不起你这个精神控制者"
      },
      {
        "time": 27.411,
        "text": "这次说的喜欢你又要来通过谁"
      },
      {
        "time": 29.666,
        "text": "我真的不想抱团取暖和他们一堆"
      },
      {
        "time": 32.424,
        "text": "只有你才能把鸽子都养的不会飞"
      },
      {
        "time": 34.681,
        "text": "我现在乱用钱是觉得以前自己亏"
      },
      {
        "time": 37.188,
        "text": "我说的太少因为话都全在mixtape"
      },
      {
        "time": 40.451,
        "text": "他才是你肉体上的king"
      },
      {
        "time": 41.954,
        "text": "你不是狗就有问题"
      },
      {
        "time": 43.208,
        "text": "都看到你脖子的印"
      },
      {
        "time": 44.211,
        "text": "不是代表爱是代表性"
      },
      {
        "time": 45.716,
        "text": "说句想我就能掏了心"
      },
      {
        "time": 46.97,
        "text": "离不开我的饲养区"
      },
      {
        "time": 48.223,
        "text": "直到我想过真的跳下去"
      },
      {
        "time": 49.728,
        "text": "你只说我还没同意"
      },
      {
        "time": 50.982,
        "text": "Fall 我们只有绳子没得桥"
      },
      {
        "time": 52.737,
        "text": "想你真的太痛了甚至超过一把刀"
      },
      {
        "time": 55.496,
        "text": "我把命都给了好像你会觉得少"
      },
      {
        "time": 58.004,
        "text": "到底捏住什么知道我不愿跑"
      },
      {
        "time": 60.762,
        "text": "我怕取不下来就像戴上口罩"
      },
      {
        "time": 63.27,
        "text": "你下的每个命令都是我的饲料"
      },
      {
        "time": 65.777,
        "text": "手臂有抓痕因为被你远程捆到"
      },
      {
        "time": 68.284,
        "text": "一只动物你会怎么叫它do urself"
      },
      {
        "time": 70.792,
        "text": "你想靠支配还是其实你也弱小"
      },
      {
        "time": 73.548,
        "text": "不用做举动我自己能混淆"
      },
      {
        "time": 75.806,
        "text": "你舔起手就能尝到我的味道"
      },
      {
        "time": 78.563,
        "text": "想让你消失到又怕不能再遇到"
      },
      {
        "time": 80.82,
        "text": "说完你就笑了这她吗是对不起?"
      },
      {
        "time": 83.579,
        "text": "报复太多 连温柔都会想不起"
      },
      {
        "time": 86.085,
        "text": "实在恨不起你这个精神控制者"
      },
      {
        "time": 88.593,
        "text": "这次说的喜欢你又要来通过谁"
      },
      {
        "time": 91.1,
        "text": "我真的不想抱团取暖和他们一堆"
      },
      {
        "time": 93.608,
        "text": "只有你才能把鸽子都养的不会飞"
      },
      {
        "time": 96.114,
        "text": "我现在乱用钱是觉得以前自己亏"
      },
      {
        "time": 100.126,
        "text": "我说的太少因为话都全在mixtape"
      }
    ]
  },
  {
    "id": 2681431603,
    "title": "初春",
    "artist": "王齐铭WatchMe / OneOne",
    "album": "初春",
    "coverUrl": "https://p1.music.126.net/Xqw4EwB_Pm9-Z8YfwCufZw==/109951170610344117.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=2681431603.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=2681431603",
    "duration": 178,
    "summary": "王齐铭WatchMe / OneOne · 初春",
    "lyricsRaw": "[00:00.000] 作词 : 王齐铭WatchMe/OneOne\n[00:01.000] 作曲 : 王齐铭WatchMe/OneOne\n[00:10.026]编曲：Boyfifty\n[00:12.745]混音：李雨杭Yuu\n[00:15.089]母带：李雨杭Yuu\n[00:17.300]王齐铭：\n[00:21.587]我曾经以为 长大后我们勒生活比小时候更加精彩\n[00:38.461]我曾经以为 爱情是长久勒只要你选择对就不分开\n[00:42.985]我曾经以为 错过了机会 也许在下一次它就会来\n[00:47.283]我曾经以为 只是种以为 我们都不得从梦里醒来\n[00:51.515]oneone：\n[00:51.751]我曾经以为 变得更强大后 我就不会再为低谷烦心\n[00:56.079]我曾经以为 找寻着真理 我就够能把所有人都看清\n[01:00.409]我曾经以为  我像那点点繁星 上帝为我偏心\n[01:04.672]抓住了机会 我没人能依偎 我从我生下来就是冠军\n[01:08.902]王齐铭：\n[01:09.138]最近的生活一塌糊涂 日子每天过得差不多\n[01:13.502]有些人走太快抓不住 时间在催促你加速度\n[01:17.924]你看那停留在原地的人啊 看不到眼里的魂啊\n[01:22.728]曾以为那充满了希望的远方却只是座迷失的城啊\n[01:26.503]oneone：\n[01:26.752]漫步在嘉陵江边 树上银杏凋落\n[01:29.129]我们纵横交错 和时空线飘过\n[01:31.095]岁月在把刀磨 罗曼蒂克消磨 时光漂泊\n[01:33.561]我把记忆雕琢后去其糟粕\n[01:36.423]踏上了列车我即将远行\n[01:38.691]在雪和霜还没有融化的初春\n[01:40.892]分别时我不敢看你眼睛\n[01:42.825]或许是因为我家庭出生\n[01:45.018]在绿皮的火车我坐上座位\n[01:47.448]慢慢地学会了抽烟过肺\n[01:49.583]要由奢入俭省得再去破费\n[01:51.542]开始权衡自己不是权衡错对\n[01:53.850]不贪图便宜 也不能够贪心\n[01:55.915]妈说不怕一万 但是只怕万一\n[01:58.182]我能消化情绪 也能陪你开心\n[02:00.024]既能不动如山 也能雷霆万钧\n[02:02.044]王齐铭：\n[02:02.199]人生如梦 失去和得到的好像都注定在冥冥之中\n[02:07.944]在经历过每一次漫长的季节后我们才发现\n[02:12.242]那远飞的大雁 在初春的那天 它还会再回来\n[02:19.023]人生如梦 失去和得到的好像都注定在冥冥之中\n[02:25.545]在经历过每一次漫长的季节后我们才发现\n[02:29.721]那远飞的大雁 在初春的那天 它还会再回来\n[02:36.352]我不再以为 我们勒生活太平淡没想象中那么精彩\n[02:40.828]我不再以为 爱情是短暂勒因为我早已经得到了爱\n[02:45.235]我不再以为 错过了机会 大不了第二天重头再来\n[02:49.523]我不再以为 只是去体会 生命中每一天春暖花开\n",
    "lyrics": [
      {
        "time": 0,
        "text": "作词 : 王齐铭WatchMe/OneOne"
      },
      {
        "time": 1,
        "text": "作曲 : 王齐铭WatchMe/OneOne"
      },
      {
        "time": 10.026,
        "text": "编曲：Boyfifty"
      },
      {
        "time": 12.745,
        "text": "混音：李雨杭Yuu"
      },
      {
        "time": 15.089,
        "text": "母带：李雨杭Yuu"
      },
      {
        "time": 17.3,
        "text": "王齐铭："
      },
      {
        "time": 21.587,
        "text": "我曾经以为 长大后我们勒生活比小时候更加精彩"
      },
      {
        "time": 38.461,
        "text": "我曾经以为 爱情是长久勒只要你选择对就不分开"
      },
      {
        "time": 42.985,
        "text": "我曾经以为 错过了机会 也许在下一次它就会来"
      },
      {
        "time": 47.283,
        "text": "我曾经以为 只是种以为 我们都不得从梦里醒来"
      },
      {
        "time": 51.515,
        "text": "oneone："
      },
      {
        "time": 51.751,
        "text": "我曾经以为 变得更强大后 我就不会再为低谷烦心"
      },
      {
        "time": 56.079,
        "text": "我曾经以为 找寻着真理 我就够能把所有人都看清"
      },
      {
        "time": 60.409,
        "text": "我曾经以为  我像那点点繁星 上帝为我偏心"
      },
      {
        "time": 64.672,
        "text": "抓住了机会 我没人能依偎 我从我生下来就是冠军"
      },
      {
        "time": 68.902,
        "text": "王齐铭："
      },
      {
        "time": 69.138,
        "text": "最近的生活一塌糊涂 日子每天过得差不多"
      },
      {
        "time": 73.502,
        "text": "有些人走太快抓不住 时间在催促你加速度"
      },
      {
        "time": 77.924,
        "text": "你看那停留在原地的人啊 看不到眼里的魂啊"
      },
      {
        "time": 82.728,
        "text": "曾以为那充满了希望的远方却只是座迷失的城啊"
      },
      {
        "time": 86.503,
        "text": "oneone："
      },
      {
        "time": 86.752,
        "text": "漫步在嘉陵江边 树上银杏凋落"
      },
      {
        "time": 89.129,
        "text": "我们纵横交错 和时空线飘过"
      },
      {
        "time": 91.095,
        "text": "岁月在把刀磨 罗曼蒂克消磨 时光漂泊"
      },
      {
        "time": 93.561,
        "text": "我把记忆雕琢后去其糟粕"
      },
      {
        "time": 96.423,
        "text": "踏上了列车我即将远行"
      },
      {
        "time": 98.691,
        "text": "在雪和霜还没有融化的初春"
      },
      {
        "time": 100.892,
        "text": "分别时我不敢看你眼睛"
      },
      {
        "time": 102.825,
        "text": "或许是因为我家庭出生"
      },
      {
        "time": 105.018,
        "text": "在绿皮的火车我坐上座位"
      },
      {
        "time": 107.448,
        "text": "慢慢地学会了抽烟过肺"
      },
      {
        "time": 109.583,
        "text": "要由奢入俭省得再去破费"
      },
      {
        "time": 111.542,
        "text": "开始权衡自己不是权衡错对"
      },
      {
        "time": 113.85,
        "text": "不贪图便宜 也不能够贪心"
      },
      {
        "time": 115.915,
        "text": "妈说不怕一万 但是只怕万一"
      },
      {
        "time": 118.182,
        "text": "我能消化情绪 也能陪你开心"
      },
      {
        "time": 120.024,
        "text": "既能不动如山 也能雷霆万钧"
      },
      {
        "time": 122.044,
        "text": "王齐铭："
      },
      {
        "time": 122.199,
        "text": "人生如梦 失去和得到的好像都注定在冥冥之中"
      },
      {
        "time": 127.944,
        "text": "在经历过每一次漫长的季节后我们才发现"
      },
      {
        "time": 132.242,
        "text": "那远飞的大雁 在初春的那天 它还会再回来"
      },
      {
        "time": 139.023,
        "text": "人生如梦 失去和得到的好像都注定在冥冥之中"
      },
      {
        "time": 145.545,
        "text": "在经历过每一次漫长的季节后我们才发现"
      },
      {
        "time": 149.721,
        "text": "那远飞的大雁 在初春的那天 它还会再回来"
      },
      {
        "time": 156.352,
        "text": "我不再以为 我们勒生活太平淡没想象中那么精彩"
      },
      {
        "time": 160.828,
        "text": "我不再以为 爱情是短暂勒因为我早已经得到了爱"
      },
      {
        "time": 165.235,
        "text": "我不再以为 错过了机会 大不了第二天重头再来"
      },
      {
        "time": 169.523,
        "text": "我不再以为 只是去体会 生命中每一天春暖花开"
      }
    ]
  },
  {
    "id": 3322044868,
    "title": "我把想念忍住",
    "artist": "余翊",
    "album": "忍住",
    "coverUrl": "https://p1.music.126.net/-RXnBX4n0N3G3MJN0_bxnQ==/109951172346377327.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=3322044868.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=3322044868",
    "duration": 162,
    "summary": "余翊 · 忍住",
    "lyricsRaw": "[00:00.69]忍住\n[00:02.97]我把想念忍住\n[00:06.66]不让眼泪泄露我的无助\n[00:10.23]假装自己真的毫不在乎\n[00:15.27]忍住\n[00:17.55]我把情绪都忍住\n[00:20.94]等到有一天我也变得麻木\n[00:24.00]才算对得起这最后的结束\n[00:30.66]天空毫无预兆突然下起大雨\n[00:33.84]人群瞬间走散我被留在原地\n[00:37.74]这画面多熟悉像我们的结局\n[00:41.13]来得那么措手不及\n[00:44.07]也没有刻意去找寻\n[00:47.43]只是总会不自觉想起\n[00:51.03]最后的倔强是假装不想念你\n[00:54.93]等数到一百秒就忘记\n[00:58.86]忍住\n[01:01.08]我把想念忍住\n[01:04.71]不让眼泪泄露我的无助\n[01:08.25]假装自己真的毫不在乎\n[01:13.23]忍住\n[01:15.42]我把情绪都忍住\n[01:18.81]等到有一天我也变得麻木\n[01:22.08]才算对得起这最后的结束\n[01:42.54]天空毫无预兆突然下起大雨\n[01:45.75]人群瞬间走散我被留在原地\n[01:49.56]这画面多熟悉像我们的结局\n[01:52.86]来得那么措手不及\n[01:55.77]也没有刻意去找寻\n[01:59.10]只是总会不自觉想起\n[02:02.64]最后的倔强是假装不想念你\n[02:06.45]等数到一百秒就忘记\n[02:10.26]忍住\n[02:12.27]我把想念忍住\n[02:15.84]不让眼泪泄露我的无助\n[02:19.26]假装自己真的毫不在乎\n[02:24.36]忍住\n[02:26.31]我把情绪都忍住\n[02:29.82]等到有一天我也变得麻木\n[02:33.00]才算对得起这最后的结束\n",
    "lyrics": [
      {
        "time": 0.69,
        "text": "忍住"
      },
      {
        "time": 2.9699999999999998,
        "text": "我把想念忍住"
      },
      {
        "time": 6.66,
        "text": "不让眼泪泄露我的无助"
      },
      {
        "time": 10.23,
        "text": "假装自己真的毫不在乎"
      },
      {
        "time": 15.27,
        "text": "忍住"
      },
      {
        "time": 17.55,
        "text": "我把情绪都忍住"
      },
      {
        "time": 20.94,
        "text": "等到有一天我也变得麻木"
      },
      {
        "time": 24,
        "text": "才算对得起这最后的结束"
      },
      {
        "time": 30.66,
        "text": "天空毫无预兆突然下起大雨"
      },
      {
        "time": 33.84,
        "text": "人群瞬间走散我被留在原地"
      },
      {
        "time": 37.74,
        "text": "这画面多熟悉像我们的结局"
      },
      {
        "time": 41.13,
        "text": "来得那么措手不及"
      },
      {
        "time": 44.07,
        "text": "也没有刻意去找寻"
      },
      {
        "time": 47.43,
        "text": "只是总会不自觉想起"
      },
      {
        "time": 51.03,
        "text": "最后的倔强是假装不想念你"
      },
      {
        "time": 54.93,
        "text": "等数到一百秒就忘记"
      },
      {
        "time": 58.86,
        "text": "忍住"
      },
      {
        "time": 61.08,
        "text": "我把想念忍住"
      },
      {
        "time": 64.71,
        "text": "不让眼泪泄露我的无助"
      },
      {
        "time": 68.25,
        "text": "假装自己真的毫不在乎"
      },
      {
        "time": 73.23,
        "text": "忍住"
      },
      {
        "time": 75.42,
        "text": "我把情绪都忍住"
      },
      {
        "time": 78.81,
        "text": "等到有一天我也变得麻木"
      },
      {
        "time": 82.08,
        "text": "才算对得起这最后的结束"
      },
      {
        "time": 102.54,
        "text": "天空毫无预兆突然下起大雨"
      },
      {
        "time": 105.75,
        "text": "人群瞬间走散我被留在原地"
      },
      {
        "time": 109.56,
        "text": "这画面多熟悉像我们的结局"
      },
      {
        "time": 112.86,
        "text": "来得那么措手不及"
      },
      {
        "time": 115.77,
        "text": "也没有刻意去找寻"
      },
      {
        "time": 119.1,
        "text": "只是总会不自觉想起"
      },
      {
        "time": 122.64,
        "text": "最后的倔强是假装不想念你"
      },
      {
        "time": 126.45,
        "text": "等数到一百秒就忘记"
      },
      {
        "time": 130.26,
        "text": "忍住"
      },
      {
        "time": 132.27,
        "text": "我把想念忍住"
      },
      {
        "time": 135.84,
        "text": "不让眼泪泄露我的无助"
      },
      {
        "time": 139.26,
        "text": "假装自己真的毫不在乎"
      },
      {
        "time": 144.36,
        "text": "忍住"
      },
      {
        "time": 146.31,
        "text": "我把情绪都忍住"
      },
      {
        "time": 149.82,
        "text": "等到有一天我也变得麻木"
      },
      {
        "time": 153,
        "text": "才算对得起这最后的结束"
      }
    ]
  },
  {
    "id": 1869248652,
    "title": "Princess",
    "artist": "XMASwu(吴骜)",
    "album": "Princess",
    "coverUrl": "https://p1.music.126.net/jJT58QCcbrtrRvQ7Prcw3w==/109951166285330042.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=1869248652.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=1869248652",
    "duration": 152,
    "summary": "XMASwu(吴骜) · Princess",
    "lyricsRaw": "[00:00.000] 制作人 : XMASwu(吴骜)\n[00:01.000] 作词 : XMASwu(吴骜)\n[00:02.000] 作曲 : XMASwu(吴骜)\n[00:04.169]编曲：bezimeni\n[00:06.669]和声编写：冬瓜炖湯\n[00:09.920]和声录制：昤玥loyi\n[00:14.082]混音：tc\n[00:15.082]录音工程：K3 production\n[00:15.882]封面：luoxi\n[00:16.833]我想在东京下雨时牵你手一起遨游\n[00:20.080]玩世不恭却偏心留给你我所有的温柔\n[00:23.331]一束花的仪式感\n[00:26.257]奶茶也分你一半\n[00:27.007]不过时的仪式感\n[00:28.758]我想问\n[00:29.507]你息怒了没 生气不要一直憋\n[00:32.508]你肯理我了没 给我心情打了结\n[00:35.509]我是你的谁 那你自己最了解\n[00:39.009]世界你最美 送你999朵玫瑰\n[00:43.509]很简单我只需要你在我身边永远不会离开\n[00:50.259]原谅我年少轻狂只对你产生无限依赖\n[00:57.009]我爱你\n[00:58.509]你知道吗\n[01:00.262]虽然我经常缺乏表达\n[01:04.507]I want you by my side\n[01:08.009]I want you by my side\n[01:10.507]摇下车窗感受秋天\n[01:13.509]落叶承载我的思念\n[01:16.762]梦的发生跟你关联\n[01:20.259]You’re my baby\n[01:21.508]You’re my princess\n[01:23.507]忘记关了空调我怎敢骂你记忆力不好\n[01:26.758]电话打不通你总是会闹脾气要去哪里找\n[01:30.011]时间不够用一辈子放在这里为你准备好\n[01:33.257]巴士看日落躺在我怀中\n[01:36.760]很简单我只需要你在我身边永远不会离开\n[01:43.757]原谅我年少轻狂只对你产生无限依赖\n[01:50.257]我爱你\n[01:51.758]你知道吗\n[01:53.757]虽然我经常缺乏表达\n[01:57.757]I want you by my side\n[02:01.261]I want you by my side\n",
    "lyrics": [
      {
        "time": 0,
        "text": "制作人 : XMASwu(吴骜)"
      },
      {
        "time": 1,
        "text": "作词 : XMASwu(吴骜)"
      },
      {
        "time": 2,
        "text": "作曲 : XMASwu(吴骜)"
      },
      {
        "time": 4.169,
        "text": "编曲：bezimeni"
      },
      {
        "time": 6.6690000000000005,
        "text": "和声编写：冬瓜炖湯"
      },
      {
        "time": 9.92,
        "text": "和声录制：昤玥loyi"
      },
      {
        "time": 14.082,
        "text": "混音：tc"
      },
      {
        "time": 15.082,
        "text": "录音工程：K3 production"
      },
      {
        "time": 15.882,
        "text": "封面：luoxi"
      },
      {
        "time": 16.833,
        "text": "我想在东京下雨时牵你手一起遨游"
      },
      {
        "time": 20.08,
        "text": "玩世不恭却偏心留给你我所有的温柔"
      },
      {
        "time": 23.331,
        "text": "一束花的仪式感"
      },
      {
        "time": 26.257,
        "text": "奶茶也分你一半"
      },
      {
        "time": 27.007,
        "text": "不过时的仪式感"
      },
      {
        "time": 28.758,
        "text": "我想问"
      },
      {
        "time": 29.507,
        "text": "你息怒了没 生气不要一直憋"
      },
      {
        "time": 32.508,
        "text": "你肯理我了没 给我心情打了结"
      },
      {
        "time": 35.509,
        "text": "我是你的谁 那你自己最了解"
      },
      {
        "time": 39.009,
        "text": "世界你最美 送你999朵玫瑰"
      },
      {
        "time": 43.509,
        "text": "很简单我只需要你在我身边永远不会离开"
      },
      {
        "time": 50.259,
        "text": "原谅我年少轻狂只对你产生无限依赖"
      },
      {
        "time": 57.009,
        "text": "我爱你"
      },
      {
        "time": 58.509,
        "text": "你知道吗"
      },
      {
        "time": 60.262,
        "text": "虽然我经常缺乏表达"
      },
      {
        "time": 64.507,
        "text": "I want you by my side"
      },
      {
        "time": 68.009,
        "text": "I want you by my side"
      },
      {
        "time": 70.507,
        "text": "摇下车窗感受秋天"
      },
      {
        "time": 73.509,
        "text": "落叶承载我的思念"
      },
      {
        "time": 76.762,
        "text": "梦的发生跟你关联"
      },
      {
        "time": 80.259,
        "text": "You’re my baby"
      },
      {
        "time": 81.508,
        "text": "You’re my princess"
      },
      {
        "time": 83.507,
        "text": "忘记关了空调我怎敢骂你记忆力不好"
      },
      {
        "time": 86.758,
        "text": "电话打不通你总是会闹脾气要去哪里找"
      },
      {
        "time": 90.011,
        "text": "时间不够用一辈子放在这里为你准备好"
      },
      {
        "time": 93.257,
        "text": "巴士看日落躺在我怀中"
      },
      {
        "time": 96.76,
        "text": "很简单我只需要你在我身边永远不会离开"
      },
      {
        "time": 103.757,
        "text": "原谅我年少轻狂只对你产生无限依赖"
      },
      {
        "time": 110.257,
        "text": "我爱你"
      },
      {
        "time": 111.758,
        "text": "你知道吗"
      },
      {
        "time": 113.757,
        "text": "虽然我经常缺乏表达"
      },
      {
        "time": 117.757,
        "text": "I want you by my side"
      },
      {
        "time": 121.261,
        "text": "I want you by my side"
      }
    ]
  },
  {
    "id": 2758538358,
    "title": "冷空气",
    "artist": "Zzh / 赋生",
    "album": "冷空气",
    "coverUrl": "https://p1.music.126.net/Ptk4g3BWtTU9lkB2rwXyBg==/109951172194860522.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=2758538358.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=2758538358",
    "duration": 232,
    "summary": "Zzh / 赋生 · 冷空气",
    "lyricsRaw": "[00:00.00] 编曲 : 空空壹\n[00:00.39]作词： Zzh赋生\n[00:00.69]作曲： Zzh赋生\n[00:00.99]表演者： Zzh赋生\n[00:01.38]制作人：陈子健\n[00:15.99]你裹紧外套说风又大了些\n[00:22.92]我盯着你侧脸没敢说想念早漫过边界\n[00:30.12]他们说爱该顺着季节慢慢浓烈\n[00:33.99]偏有份心动像反季的绿绽在寒风又匆匆凋谢\n[00:39.48]爱像反季节\n[00:41.31]总后知后觉\n[00:45.06]可是我不舍得可是你走远了\n[00:49.65]都怪我犯了错放你走是骗你的\n[00:53.43]我害怕雪花飘落时\n[00:56.31]有别人在你身边\n[01:02.16]我不懂离别的重量直到冷空气它吸入我怀中\n[01:06.00]没搞懂分开的理由是不是怪自己太过于平庸\n[01:09.75]我还是没舍得离开独自去面对这刺骨的寒风\n[01:13.56]谁为你披上了外套谁陪你度过这难熬的寒冬\n[01:17.43]想抓却抓不住为什么我们俩总是会渐行又渐远\n[01:21.24]现实的问题无法解决我该用怎样的理由去辩解\n[01:25.05]我们的爱最终还是变成部烂尾的电影\n[01:29.97]我到底应该怎样忘记你\n[01:47.34]你更新动态字里行间疏离\n[01:51.12]些我盯着屏幕没敢问心事早漫过边界\n[02:01.50]他们说爱该随时间线慢慢淡却\n[02:05.37]偏有份思念像冷空气积在心底无法停歇\n[02:10.95]爱像反季节总后知后觉\n[02:16.50]可是我还惦念可是你走远了\n[02:21.06]都怪我没说破说放下是骗你的\n[02:24.90]我害怕雪花飘落时\n[02:27.69]有别人在你身边\n[02:33.63]我不懂离别的重量直到冷空气它吸入我怀中\n[02:37.50]没搞懂分开的理由是不是怪自己太过于平庸\n[02:41.25]我还是没舍得离开独自去面对这刺骨的寒风\n[02:45.06]谁为你披上了外套谁陪你度过这难熬的寒冬\n[02:48.84]想抓却抓不住为什么我们俩总是会渐行又渐远\n[02:52.68]现实的问题无法解决我该用怎样的理由去辩解\n[02:56.52]我们的爱最终还是变成部烂尾的电影\n[03:01.56]我到底应该怎样忘记你怎样忘记你\n[03:09.84]可是我不舍得可是你走远了\n[03:24.18]都怪我犯了错放你走是骗你的\n[03:47.40] 音乐营销 : 欧阳慧琳/彭帆敏\n[03:48.40] 企划 : 黄柒柒yuki/王禧萍\n[03:49.40] 出品人 : Dylan刘勇\n[03:50.40] 出品 : 网易电波\n",
    "lyrics": [
      {
        "time": 0,
        "text": "编曲 : 空空壹"
      },
      {
        "time": 0.39,
        "text": "作词： Zzh赋生"
      },
      {
        "time": 0.69,
        "text": "作曲： Zzh赋生"
      },
      {
        "time": 0.99,
        "text": "表演者： Zzh赋生"
      },
      {
        "time": 1.38,
        "text": "制作人：陈子健"
      },
      {
        "time": 15.99,
        "text": "你裹紧外套说风又大了些"
      },
      {
        "time": 22.92,
        "text": "我盯着你侧脸没敢说想念早漫过边界"
      },
      {
        "time": 30.12,
        "text": "他们说爱该顺着季节慢慢浓烈"
      },
      {
        "time": 33.99,
        "text": "偏有份心动像反季的绿绽在寒风又匆匆凋谢"
      },
      {
        "time": 39.48,
        "text": "爱像反季节"
      },
      {
        "time": 41.31,
        "text": "总后知后觉"
      },
      {
        "time": 45.06,
        "text": "可是我不舍得可是你走远了"
      },
      {
        "time": 49.65,
        "text": "都怪我犯了错放你走是骗你的"
      },
      {
        "time": 53.43,
        "text": "我害怕雪花飘落时"
      },
      {
        "time": 56.31,
        "text": "有别人在你身边"
      },
      {
        "time": 62.16,
        "text": "我不懂离别的重量直到冷空气它吸入我怀中"
      },
      {
        "time": 66,
        "text": "没搞懂分开的理由是不是怪自己太过于平庸"
      },
      {
        "time": 69.75,
        "text": "我还是没舍得离开独自去面对这刺骨的寒风"
      },
      {
        "time": 73.56,
        "text": "谁为你披上了外套谁陪你度过这难熬的寒冬"
      },
      {
        "time": 77.43,
        "text": "想抓却抓不住为什么我们俩总是会渐行又渐远"
      },
      {
        "time": 81.24,
        "text": "现实的问题无法解决我该用怎样的理由去辩解"
      },
      {
        "time": 85.05,
        "text": "我们的爱最终还是变成部烂尾的电影"
      },
      {
        "time": 89.97,
        "text": "我到底应该怎样忘记你"
      },
      {
        "time": 107.34,
        "text": "你更新动态字里行间疏离"
      },
      {
        "time": 111.12,
        "text": "些我盯着屏幕没敢问心事早漫过边界"
      },
      {
        "time": 121.5,
        "text": "他们说爱该随时间线慢慢淡却"
      },
      {
        "time": 125.37,
        "text": "偏有份思念像冷空气积在心底无法停歇"
      },
      {
        "time": 130.95,
        "text": "爱像反季节总后知后觉"
      },
      {
        "time": 136.5,
        "text": "可是我还惦念可是你走远了"
      },
      {
        "time": 141.06,
        "text": "都怪我没说破说放下是骗你的"
      },
      {
        "time": 144.9,
        "text": "我害怕雪花飘落时"
      },
      {
        "time": 147.69,
        "text": "有别人在你身边"
      },
      {
        "time": 153.63,
        "text": "我不懂离别的重量直到冷空气它吸入我怀中"
      },
      {
        "time": 157.5,
        "text": "没搞懂分开的理由是不是怪自己太过于平庸"
      },
      {
        "time": 161.25,
        "text": "我还是没舍得离开独自去面对这刺骨的寒风"
      },
      {
        "time": 165.06,
        "text": "谁为你披上了外套谁陪你度过这难熬的寒冬"
      },
      {
        "time": 168.84,
        "text": "想抓却抓不住为什么我们俩总是会渐行又渐远"
      },
      {
        "time": 172.68,
        "text": "现实的问题无法解决我该用怎样的理由去辩解"
      },
      {
        "time": 176.52,
        "text": "我们的爱最终还是变成部烂尾的电影"
      },
      {
        "time": 181.56,
        "text": "我到底应该怎样忘记你怎样忘记你"
      },
      {
        "time": 189.84,
        "text": "可是我不舍得可是你走远了"
      },
      {
        "time": 204.18,
        "text": "都怪我犯了错放你走是骗你的"
      },
      {
        "time": 227.4,
        "text": "音乐营销 : 欧阳慧琳/彭帆敏"
      },
      {
        "time": 228.4,
        "text": "企划 : 黄柒柒yuki/王禧萍"
      },
      {
        "time": 229.4,
        "text": "出品人 : Dylan刘勇"
      },
      {
        "time": 230.4,
        "text": "出品 : 网易电波"
      }
    ]
  },
  {
    "id": 479979029,
    "title": "Lost ",
    "artist": "满舒克 / Jony J",
    "album": "Almost Perfect",
    "coverUrl": "https://p1.music.126.net/yItnsMJs7dFr0s5abn5_fQ==/19153492555999484.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=479979029.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=479979029",
    "duration": 251,
    "summary": "满舒克 / Jony J · Almost Perfect",
    "lyricsRaw": "[00:00.00] 作词 : 满舒克/Jony J\n[00:00.25] 作曲 : 满舒克/Jony J\n[00:00.50] 编曲 : Taylor\n[00:00.75] 混音 : Mai\n[00:01.00]Hook\n[00:01.02]YJ：\n[00:01.04]I lose myself tonight\n[00:04.83]I lose myself tonight\n[00:08.51]I lose myself tonight\n[00:11.27]Don't leave me alone\n[00:15.70]I lose myself tonight\n[00:18.93]I lose myself tonight\n[00:22.52]I lose myself tonight\n[00:25.54]Don't leave me alone\n[00:27.54]\n[00:29.40]Verse.1\n[00:29.44]YJ：\n[00:29.46]白天还是没搞懂黑夜\n[00:31.55]想把整个城市停电\n[00:33.42]你出现创造了经典\n[00:35.13]轻松到达美的临界点\n[00:37.04]点缀？\n[00:37.33]你从不需点缀\n[00:38.66]你需要我我就追随\n[00:40.46]可现在我非常后悔\n[00:42.15]Where you at\n[00:43.38]Where you at babe\n[00:45.33]我只想让你不再为我流泪\n[00:48.73]没有你的时光我变成酒鬼\n[00:52.43]无解的孤独让我怎么收尾\n[00:55.83]可只有你让我愿意卑微\n[00:59.32]多希望你也会埋下伏笔\n[01:01.75]来引起我注意\n[01:03.59]让我的心触地\n[01:05.68]可你又在哪里 babe\n[01:09.26]原来只是我以为\n[01:12.16]还能去散个步聊一整路\n[01:14.36]没有拘束因为你\n[01:16.30]Like a crew\n[01:17.25]风雨无阻\n[01:18.01]整夜只有我和你\n[01:21.34]让我的心触地\n[01:25.10]可你又在哪里\n[01:26.36]Maybe I losemyself\n[01:29.94]Maybe I losemyself\n[01:33.58]Maybe I losemyself\n[01:36.98]Maybe I losemyself\n[01:40.04]\n[01:40.30]Hook\n[01:40.75]YJ：\n[01:40.78]I lose myself tonight\n[01:44.06]I lose myself tonight\n[01:47.79]I lose myself tonight\n[01:50.92]Don't leave me alone\n[01:54.87]I lose myself tonight\n[01:58.41]I lose myself tonight\n[02:02.06]I lose myself tonight\n[02:05.00]Don't leave me alone\n[02:06.97]\n[02:08.18]Verse.2\n[02:08.59]JonyJ:\n[02:09.01]你总是盘旋在我脑海里面\n[02:12.57]想跟你缠绵一直到路灯熄灭\n[02:16.01]你在我身边说可以放弃体面\n[02:19.56]我装没听见还越来越没底线\n[02:23.29]这几年像个失了控的小野兽\n[02:25.43]玩的快要着魔\n[02:26.88]游走在肉欲的丛林中\n[02:29.01]可是内心一直漂泊\n[02:30.50]身边总是留个空但是从不缺\n[02:32.40]对我来说都是风景\n[02:34.05]如果不是因为我写的歌选的路\n[02:35.85]他们肯定早就不见踪影\n[02:37.52]我知道物欲中的酷与疯要怎么选择\n[02:40.90]我知道恋爱中的很多人的忠诚都是演的\n[02:44.65]我承认我害怕痛才把头用力点着\n[02:48.16]反正我已经在这条路上走了这么远了\n[02:51.75]太多情的便利店\n[02:53.84]门开着没法藏\n[02:55.14]我知道也许有一天我也会为了谁打烊\n[02:58.70]但不是现在我像是掉拍没卡上\n[03:02.23]我盼着那天可以早点来却总是鬼打墙\n[03:05.84]你总是盘旋在我脑海里面\n[03:09.26]想跟你缠绵一直到路灯熄灭\n[03:12.75]你在我身边说可以放弃体面\n[03:16.26]我装没听见还越来越没底线\n[03:19.88]\n[03:19.90]Hook\n[03:19.93]YJ：\n[03:19.95]Maybe I losemyself\n[03:23.54]Maybe I losemyself\n[03:26.83]Maybe I losemyself\n[03:30.73]Maybe I losemyself\n[03:34.31]I lose myself tonight\n[03:37.67]I lose myself tonight\n[03:41.43]I lose myself tonight\n[03:44.46]Don't leave me alone\n[03:48.54]I lose myself tonight\n[03:51.97]I lose myself tonight\n[03:55.62]I lose myself tonight\n[03:58.75]Don't leave me alone\n[04:00.41]\n",
    "lyrics": [
      {
        "time": 0,
        "text": "作词 : 满舒克/Jony J"
      },
      {
        "time": 0.25,
        "text": "作曲 : 满舒克/Jony J"
      },
      {
        "time": 0.5,
        "text": "编曲 : Taylor"
      },
      {
        "time": 0.75,
        "text": "混音 : Mai"
      },
      {
        "time": 1,
        "text": "Hook"
      },
      {
        "time": 1.02,
        "text": "YJ："
      },
      {
        "time": 1.04,
        "text": "I lose myself tonight"
      },
      {
        "time": 4.83,
        "text": "I lose myself tonight"
      },
      {
        "time": 8.51,
        "text": "I lose myself tonight"
      },
      {
        "time": 11.27,
        "text": "Don't leave me alone"
      },
      {
        "time": 15.7,
        "text": "I lose myself tonight"
      },
      {
        "time": 18.93,
        "text": "I lose myself tonight"
      },
      {
        "time": 22.52,
        "text": "I lose myself tonight"
      },
      {
        "time": 25.54,
        "text": "Don't leave me alone"
      },
      {
        "time": 29.4,
        "text": "Verse.1"
      },
      {
        "time": 29.44,
        "text": "YJ："
      },
      {
        "time": 29.46,
        "text": "白天还是没搞懂黑夜"
      },
      {
        "time": 31.55,
        "text": "想把整个城市停电"
      },
      {
        "time": 33.42,
        "text": "你出现创造了经典"
      },
      {
        "time": 35.13,
        "text": "轻松到达美的临界点"
      },
      {
        "time": 37.04,
        "text": "点缀？"
      },
      {
        "time": 37.33,
        "text": "你从不需点缀"
      },
      {
        "time": 38.66,
        "text": "你需要我我就追随"
      },
      {
        "time": 40.46,
        "text": "可现在我非常后悔"
      },
      {
        "time": 42.15,
        "text": "Where you at"
      },
      {
        "time": 43.38,
        "text": "Where you at babe"
      },
      {
        "time": 45.33,
        "text": "我只想让你不再为我流泪"
      },
      {
        "time": 48.73,
        "text": "没有你的时光我变成酒鬼"
      },
      {
        "time": 52.43,
        "text": "无解的孤独让我怎么收尾"
      },
      {
        "time": 55.83,
        "text": "可只有你让我愿意卑微"
      },
      {
        "time": 59.32,
        "text": "多希望你也会埋下伏笔"
      },
      {
        "time": 61.75,
        "text": "来引起我注意"
      },
      {
        "time": 63.59,
        "text": "让我的心触地"
      },
      {
        "time": 65.68,
        "text": "可你又在哪里 babe"
      },
      {
        "time": 69.26,
        "text": "原来只是我以为"
      },
      {
        "time": 72.16,
        "text": "还能去散个步聊一整路"
      },
      {
        "time": 74.36,
        "text": "没有拘束因为你"
      },
      {
        "time": 76.3,
        "text": "Like a crew"
      },
      {
        "time": 77.25,
        "text": "风雨无阻"
      },
      {
        "time": 78.01,
        "text": "整夜只有我和你"
      },
      {
        "time": 81.34,
        "text": "让我的心触地"
      },
      {
        "time": 85.1,
        "text": "可你又在哪里"
      },
      {
        "time": 86.36,
        "text": "Maybe I losemyself"
      },
      {
        "time": 89.94,
        "text": "Maybe I losemyself"
      },
      {
        "time": 93.58,
        "text": "Maybe I losemyself"
      },
      {
        "time": 96.98,
        "text": "Maybe I losemyself"
      },
      {
        "time": 100.3,
        "text": "Hook"
      },
      {
        "time": 100.75,
        "text": "YJ："
      },
      {
        "time": 100.78,
        "text": "I lose myself tonight"
      },
      {
        "time": 104.06,
        "text": "I lose myself tonight"
      },
      {
        "time": 107.79,
        "text": "I lose myself tonight"
      },
      {
        "time": 110.92,
        "text": "Don't leave me alone"
      },
      {
        "time": 114.87,
        "text": "I lose myself tonight"
      },
      {
        "time": 118.41,
        "text": "I lose myself tonight"
      },
      {
        "time": 122.06,
        "text": "I lose myself tonight"
      },
      {
        "time": 125,
        "text": "Don't leave me alone"
      },
      {
        "time": 128.18,
        "text": "Verse.2"
      },
      {
        "time": 128.59,
        "text": "JonyJ:"
      },
      {
        "time": 129.01,
        "text": "你总是盘旋在我脑海里面"
      },
      {
        "time": 132.57,
        "text": "想跟你缠绵一直到路灯熄灭"
      },
      {
        "time": 136.01,
        "text": "你在我身边说可以放弃体面"
      },
      {
        "time": 139.56,
        "text": "我装没听见还越来越没底线"
      },
      {
        "time": 143.29,
        "text": "这几年像个失了控的小野兽"
      },
      {
        "time": 145.43,
        "text": "玩的快要着魔"
      },
      {
        "time": 146.88,
        "text": "游走在肉欲的丛林中"
      },
      {
        "time": 149.01,
        "text": "可是内心一直漂泊"
      },
      {
        "time": 150.5,
        "text": "身边总是留个空但是从不缺"
      },
      {
        "time": 152.4,
        "text": "对我来说都是风景"
      },
      {
        "time": 154.05,
        "text": "如果不是因为我写的歌选的路"
      },
      {
        "time": 155.85,
        "text": "他们肯定早就不见踪影"
      },
      {
        "time": 157.52,
        "text": "我知道物欲中的酷与疯要怎么选择"
      },
      {
        "time": 160.9,
        "text": "我知道恋爱中的很多人的忠诚都是演的"
      },
      {
        "time": 164.65,
        "text": "我承认我害怕痛才把头用力点着"
      },
      {
        "time": 168.16,
        "text": "反正我已经在这条路上走了这么远了"
      },
      {
        "time": 171.75,
        "text": "太多情的便利店"
      },
      {
        "time": 173.84,
        "text": "门开着没法藏"
      },
      {
        "time": 175.14,
        "text": "我知道也许有一天我也会为了谁打烊"
      },
      {
        "time": 178.7,
        "text": "但不是现在我像是掉拍没卡上"
      },
      {
        "time": 182.23,
        "text": "我盼着那天可以早点来却总是鬼打墙"
      },
      {
        "time": 185.84,
        "text": "你总是盘旋在我脑海里面"
      },
      {
        "time": 189.26,
        "text": "想跟你缠绵一直到路灯熄灭"
      },
      {
        "time": 192.75,
        "text": "你在我身边说可以放弃体面"
      },
      {
        "time": 196.26,
        "text": "我装没听见还越来越没底线"
      },
      {
        "time": 199.9,
        "text": "Hook"
      },
      {
        "time": 199.93,
        "text": "YJ："
      },
      {
        "time": 199.95,
        "text": "Maybe I losemyself"
      },
      {
        "time": 203.54,
        "text": "Maybe I losemyself"
      },
      {
        "time": 206.83,
        "text": "Maybe I losemyself"
      },
      {
        "time": 210.73,
        "text": "Maybe I losemyself"
      },
      {
        "time": 214.31,
        "text": "I lose myself tonight"
      },
      {
        "time": 217.67,
        "text": "I lose myself tonight"
      },
      {
        "time": 221.43,
        "text": "I lose myself tonight"
      },
      {
        "time": 224.46,
        "text": "Don't leave me alone"
      },
      {
        "time": 228.54,
        "text": "I lose myself tonight"
      },
      {
        "time": 231.97,
        "text": "I lose myself tonight"
      },
      {
        "time": 235.62,
        "text": "I lose myself tonight"
      },
      {
        "time": 238.75,
        "text": "Don't leave me alone"
      }
    ]
  },
  {
    "id": 1336856864,
    "title": "形容",
    "artist": "沈以诚",
    "album": "初遇",
    "coverUrl": "https://p1.music.126.net/1iLwRvMtUMYLZUNR-HQW7Q==/109951163957708692.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=1336856864.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=1336856864",
    "duration": 226,
    "summary": "沈以诚 · 初遇",
    "lyricsRaw": "[00:00.000] 作词 : 沈以诚\n[00:01.000] 作曲 : 沈以诚\n[00:02.000] 编曲 : 李星宇\n[00:03.000] 制作人 : 李星宇\n[00:25.639]就像是那 灰色天空中的小雨\n[00:31.638]下下停停 不动声色淋湿土地\n[00:36.140]尽管总是阴晴不定\n[00:38.887]但偶尔也会闪出星星\n[00:42.137]这都是形容你的眼睛\n[00:48.888]就像是那 古老城堡里的油画\n[00:54.638]突然抬头 定格在黄昏的晚霞\n[00:59.386]远看一片苍苍蒹葭\n[01:02.387]近处抚摸软似棉花\n[01:05.138]这都是形容你的长发\n[01:11.388]原谅我不可自拔\n[01:13.388]可能不经意看你一眼\n[01:15.890]百米冲刺都会停下\n[01:17.888]只恨科技不够发达\n[01:19.888]逆着时光回去陪你从小长大\n[01:23.637]风里还没有细沙\n[01:28.637]不切实际的想法\n[01:34.637]\n[01:58.137]就像是那 错综复杂的小枝丫\n[02:04.138]过去未来 冥冥中对悠长宿命微妙地潜移默化\n[02:09.888]很细腻 不年轻\n[02:12.637]想轻轻把它抚平\n[02:15.638]这是形容你的手掌心\n[02:20.638]原谅我不可自拔\n[02:22.884]可能不经意看你一眼\n[02:25.137]心里石头都会落下\n[02:27.134]只恨科技不够发达\n[02:29.384]逆着时光回去陪你从小长大\n[02:33.138]风里还没有细沙\n[02:38.138]地球还没有老化\n[02:43.887]原谅我不可自拔\n[02:45.887]可能不经意看你一眼\n[02:48.385]心里石头都会落下\n[02:50.389]只恨科技不够发达\n[02:52.389]逆着时光回去陪你从小长大\n[02:56.139]风里还没有细沙\n[03:01.139]不切实际的想法\n[03:07.137]原谅我不可自拔\n[03:09.137]可能不经意看你一眼\n[03:11.637]百米冲刺都会停下\n[03:13.388]只恨科技不够发达\n[03:15.638]逆着时光回去陪你从小长大\n[03:19.137]风里还没有细沙\n[03:24.389]地球还没有老化\n[03:30.388]不切实际的想法\n[03:40.633] 制作人：李星宇\n[03:40.945] 封面设计 : 武中奇\n[03:41.257] 混音/母带 : 李马科（RC）\n[03:41.569] 人声录音 : 大伟（上声）\n[03:41.881] 鼓录音 : 李马科（RC）\n[03:42.193] 吉他录音 : 刘晶晶（TTL）\n[03:42.505] 和声 : 沈以诚/李星宇\n[03:42.817] 和声编写 : 李星宇\n[03:43.129] 鼓 : 刘星星\n[03:43.441] 吉他 : 陈卉\n[03:43.753] 监制 : moonik蛛蛛\n[03:44.065] 统筹 : 黄鲲\n[03:44.377] 企划 : 小粉\n[03:44.689] 本歌曲来自〖网易音乐人〗\n[03:45.001] 10亿现金激励，千亿流量扶持！\n[03:45.313] 合作：st399@vip.163.com\n",
    "lyrics": [
      {
        "time": 0,
        "text": "作词 : 沈以诚"
      },
      {
        "time": 1,
        "text": "作曲 : 沈以诚"
      },
      {
        "time": 2,
        "text": "编曲 : 李星宇"
      },
      {
        "time": 3,
        "text": "制作人 : 李星宇"
      },
      {
        "time": 25.639,
        "text": "就像是那 灰色天空中的小雨"
      },
      {
        "time": 31.638,
        "text": "下下停停 不动声色淋湿土地"
      },
      {
        "time": 36.14,
        "text": "尽管总是阴晴不定"
      },
      {
        "time": 38.887,
        "text": "但偶尔也会闪出星星"
      },
      {
        "time": 42.137,
        "text": "这都是形容你的眼睛"
      },
      {
        "time": 48.888,
        "text": "就像是那 古老城堡里的油画"
      },
      {
        "time": 54.638,
        "text": "突然抬头 定格在黄昏的晚霞"
      },
      {
        "time": 59.386,
        "text": "远看一片苍苍蒹葭"
      },
      {
        "time": 62.387,
        "text": "近处抚摸软似棉花"
      },
      {
        "time": 65.138,
        "text": "这都是形容你的长发"
      },
      {
        "time": 71.388,
        "text": "原谅我不可自拔"
      },
      {
        "time": 73.388,
        "text": "可能不经意看你一眼"
      },
      {
        "time": 75.89,
        "text": "百米冲刺都会停下"
      },
      {
        "time": 77.888,
        "text": "只恨科技不够发达"
      },
      {
        "time": 79.888,
        "text": "逆着时光回去陪你从小长大"
      },
      {
        "time": 83.637,
        "text": "风里还没有细沙"
      },
      {
        "time": 88.637,
        "text": "不切实际的想法"
      },
      {
        "time": 118.137,
        "text": "就像是那 错综复杂的小枝丫"
      },
      {
        "time": 124.138,
        "text": "过去未来 冥冥中对悠长宿命微妙地潜移默化"
      },
      {
        "time": 129.888,
        "text": "很细腻 不年轻"
      },
      {
        "time": 132.637,
        "text": "想轻轻把它抚平"
      },
      {
        "time": 135.638,
        "text": "这是形容你的手掌心"
      },
      {
        "time": 140.638,
        "text": "原谅我不可自拔"
      },
      {
        "time": 142.884,
        "text": "可能不经意看你一眼"
      },
      {
        "time": 145.137,
        "text": "心里石头都会落下"
      },
      {
        "time": 147.134,
        "text": "只恨科技不够发达"
      },
      {
        "time": 149.384,
        "text": "逆着时光回去陪你从小长大"
      },
      {
        "time": 153.138,
        "text": "风里还没有细沙"
      },
      {
        "time": 158.138,
        "text": "地球还没有老化"
      },
      {
        "time": 163.887,
        "text": "原谅我不可自拔"
      },
      {
        "time": 165.887,
        "text": "可能不经意看你一眼"
      },
      {
        "time": 168.385,
        "text": "心里石头都会落下"
      },
      {
        "time": 170.389,
        "text": "只恨科技不够发达"
      },
      {
        "time": 172.389,
        "text": "逆着时光回去陪你从小长大"
      },
      {
        "time": 176.139,
        "text": "风里还没有细沙"
      },
      {
        "time": 181.139,
        "text": "不切实际的想法"
      },
      {
        "time": 187.137,
        "text": "原谅我不可自拔"
      },
      {
        "time": 189.137,
        "text": "可能不经意看你一眼"
      },
      {
        "time": 191.637,
        "text": "百米冲刺都会停下"
      },
      {
        "time": 193.388,
        "text": "只恨科技不够发达"
      },
      {
        "time": 195.638,
        "text": "逆着时光回去陪你从小长大"
      },
      {
        "time": 199.137,
        "text": "风里还没有细沙"
      },
      {
        "time": 204.389,
        "text": "地球还没有老化"
      },
      {
        "time": 210.388,
        "text": "不切实际的想法"
      },
      {
        "time": 220.633,
        "text": "制作人：李星宇"
      },
      {
        "time": 220.945,
        "text": "封面设计 : 武中奇"
      },
      {
        "time": 221.257,
        "text": "混音/母带 : 李马科（RC）"
      },
      {
        "time": 221.569,
        "text": "人声录音 : 大伟（上声）"
      },
      {
        "time": 221.881,
        "text": "鼓录音 : 李马科（RC）"
      },
      {
        "time": 222.193,
        "text": "吉他录音 : 刘晶晶（TTL）"
      },
      {
        "time": 222.505,
        "text": "和声 : 沈以诚/李星宇"
      },
      {
        "time": 222.817,
        "text": "和声编写 : 李星宇"
      },
      {
        "time": 223.129,
        "text": "鼓 : 刘星星"
      },
      {
        "time": 223.441,
        "text": "吉他 : 陈卉"
      },
      {
        "time": 223.753,
        "text": "监制 : moonik蛛蛛"
      },
      {
        "time": 224.065,
        "text": "统筹 : 黄鲲"
      },
      {
        "time": 224.377,
        "text": "企划 : 小粉"
      },
      {
        "time": 224.689,
        "text": "本歌曲来自〖网易音乐人〗"
      },
      {
        "time": 225.001,
        "text": "10亿现金激励，千亿流量扶持！"
      },
      {
        "time": 225.313,
        "text": "合作：st399@vip.163.com"
      }
    ]
  },
  {
    "id": 1918576268,
    "title": "红",
    "artist": "罗言",
    "album": "When the world is came，take it！",
    "coverUrl": "https://p1.music.126.net/G-inyKjA-jO5MuOuV3g7Pg==/109951167027986653.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=1918576268.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=1918576268",
    "duration": 162,
    "summary": "罗言 · When the world is came，take it！",
    "lyricsRaw": "[00:00.000] 作词 : 罗言\n[00:01.000] 作曲 : 罗言\n[00:15.638]出品：网易飓风\n[00:15.638]营销：网易飓风\n[00:15.638]OP：唯迹文化\n[00:15.638]爱上了一个人眼睛不说谎\n[00:18.891]眼泪总偷偷的躲在眼眶\n[00:22.903]感情是珍惜 其实名为“互相”\n[00:26.406]中途离场就会独自悲伤\n[00:29.662]我好像做到了我想要的样子\n[00:35.672]但却不能够再为你唱一首歌\n[00:39.176]唉 无休止的黄昏\n[00:46.184]想起我的时候你总会说\n[00:49.939]我们一起去海边走走\n[00:54.439]粉色的天配软绵绵的云朵\n[00:57.688]几千公里也不算太颠簸\n[01:01.189]For tonight\n[01:03.951]（就在今晚）\n[01:04.950]你也想我了但是你不说\n[01:09.206]悲伤海\n[01:12.712]就像颗流星从这夜空划过\n[01:16.471]just for tonight\n[01:20.730]我不懂你的心思不想去猜\n[01:24.236]而现在\n[01:28.504]我做的一切好像都是应该\n[01:32.516]破镜如果不能被重圆治好\n[01:36.772]感情就会从裂缝中溜掉\n[01:40.278]分开时用最恶毒的话争吵\n[01:45.537]爱她下雪也宁愿光着脚\n[02:03.656]在这座城市里 我们的记忆\n[02:07.677]不停变换扮演不同角色\n[02:11.437]那些猛烈的情绪 盘踞在我心底\n[02:15.437]在我脑海上演不同坎坷\n[02:20.197]just for tonight\n[02:22.953]我不懂你的心思不想去猜\n[02:26.956]Just for tonight\n[02:31.212]我做的一切好像都是应该\n",
    "lyrics": [
      {
        "time": 0,
        "text": "作词 : 罗言"
      },
      {
        "time": 1,
        "text": "作曲 : 罗言"
      },
      {
        "time": 15.638,
        "text": "出品：网易飓风"
      },
      {
        "time": 15.638,
        "text": "营销：网易飓风"
      },
      {
        "time": 15.638,
        "text": "OP：唯迹文化"
      },
      {
        "time": 15.638,
        "text": "爱上了一个人眼睛不说谎"
      },
      {
        "time": 18.891,
        "text": "眼泪总偷偷的躲在眼眶"
      },
      {
        "time": 22.903,
        "text": "感情是珍惜 其实名为“互相”"
      },
      {
        "time": 26.406,
        "text": "中途离场就会独自悲伤"
      },
      {
        "time": 29.662,
        "text": "我好像做到了我想要的样子"
      },
      {
        "time": 35.672,
        "text": "但却不能够再为你唱一首歌"
      },
      {
        "time": 39.176,
        "text": "唉 无休止的黄昏"
      },
      {
        "time": 46.184,
        "text": "想起我的时候你总会说"
      },
      {
        "time": 49.939,
        "text": "我们一起去海边走走"
      },
      {
        "time": 54.439,
        "text": "粉色的天配软绵绵的云朵"
      },
      {
        "time": 57.688,
        "text": "几千公里也不算太颠簸"
      },
      {
        "time": 61.189,
        "text": "For tonight"
      },
      {
        "time": 63.951,
        "text": "（就在今晚）"
      },
      {
        "time": 64.95,
        "text": "你也想我了但是你不说"
      },
      {
        "time": 69.206,
        "text": "悲伤海"
      },
      {
        "time": 72.712,
        "text": "就像颗流星从这夜空划过"
      },
      {
        "time": 76.471,
        "text": "just for tonight"
      },
      {
        "time": 80.73,
        "text": "我不懂你的心思不想去猜"
      },
      {
        "time": 84.236,
        "text": "而现在"
      },
      {
        "time": 88.504,
        "text": "我做的一切好像都是应该"
      },
      {
        "time": 92.516,
        "text": "破镜如果不能被重圆治好"
      },
      {
        "time": 96.772,
        "text": "感情就会从裂缝中溜掉"
      },
      {
        "time": 100.278,
        "text": "分开时用最恶毒的话争吵"
      },
      {
        "time": 105.537,
        "text": "爱她下雪也宁愿光着脚"
      },
      {
        "time": 123.656,
        "text": "在这座城市里 我们的记忆"
      },
      {
        "time": 127.677,
        "text": "不停变换扮演不同角色"
      },
      {
        "time": 131.437,
        "text": "那些猛烈的情绪 盘踞在我心底"
      },
      {
        "time": 135.437,
        "text": "在我脑海上演不同坎坷"
      },
      {
        "time": 140.197,
        "text": "just for tonight"
      },
      {
        "time": 142.953,
        "text": "我不懂你的心思不想去猜"
      },
      {
        "time": 146.956,
        "text": "Just for tonight"
      },
      {
        "time": 151.212,
        "text": "我做的一切好像都是应该"
      }
    ]
  },
  {
    "id": 2108845007,
    "title": "讴歌",
    "artist": "Vansdaddy",
    "album": "讴歌",
    "coverUrl": "https://p1.music.126.net/xfPdDoM-Kk14BFdJT7Qxgw==/109951169164991342.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=2108845007.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=2108845007",
    "duration": 136,
    "summary": "Vansdaddy · 讴歌",
    "lyricsRaw": "[00:00.00] 作词 : Vansdaddy\n[00:01.00] 作曲 : Vansdaddy\n[00:14.39]我告诉我朋友离开她我有片星海\n[00:17.87]Every time when I sing her and I’m on show\n[00:21.66]这个冬天冷的好慢但你依旧不在\n[00:25.24]我已变得不爱说话找理由\n[00:28.91]I remember the time of the your birthday\n[00:31.52]我给你发了短信 你回了句你是谁\n[00:36.08]成都的秋天总是下雨我也低着头走\n[00:39.82]几年空想阴天喝不完的酒\n[00:43.31]我最害怕秋天突然的变冷\n[00:50.23]那时候却害怕白纸的前程\n[00:57.50]I paid big rent house我幻想你和我一起\n[01:01.17]在你的城市 我每天独自艰难的前行\n[01:05.22]每当我睡去十有八九会梦见你\n[01:08.76]变星星 变星星\n[01:19.50]离开她我才有片星海\n[01:26.65]你告诉我其实你没什么梦想\n[01:29.91]我攻击你的缺点你哭着把心放下\n[01:33.64]我赋予给你的自卑\n[01:35.70]在反噬一切\n[01:38.00]我静静等待审判伤悲\n[02:10.78] mixed by 歪歪mixing\n",
    "lyrics": [
      {
        "time": 0,
        "text": "作词 : Vansdaddy"
      },
      {
        "time": 1,
        "text": "作曲 : Vansdaddy"
      },
      {
        "time": 14.39,
        "text": "我告诉我朋友离开她我有片星海"
      },
      {
        "time": 17.87,
        "text": "Every time when I sing her and I’m on show"
      },
      {
        "time": 21.66,
        "text": "这个冬天冷的好慢但你依旧不在"
      },
      {
        "time": 25.24,
        "text": "我已变得不爱说话找理由"
      },
      {
        "time": 28.91,
        "text": "I remember the time of the your birthday"
      },
      {
        "time": 31.52,
        "text": "我给你发了短信 你回了句你是谁"
      },
      {
        "time": 36.08,
        "text": "成都的秋天总是下雨我也低着头走"
      },
      {
        "time": 39.82,
        "text": "几年空想阴天喝不完的酒"
      },
      {
        "time": 43.31,
        "text": "我最害怕秋天突然的变冷"
      },
      {
        "time": 50.23,
        "text": "那时候却害怕白纸的前程"
      },
      {
        "time": 57.5,
        "text": "I paid big rent house我幻想你和我一起"
      },
      {
        "time": 61.17,
        "text": "在你的城市 我每天独自艰难的前行"
      },
      {
        "time": 65.22,
        "text": "每当我睡去十有八九会梦见你"
      },
      {
        "time": 68.76,
        "text": "变星星 变星星"
      },
      {
        "time": 79.5,
        "text": "离开她我才有片星海"
      },
      {
        "time": 86.65,
        "text": "你告诉我其实你没什么梦想"
      },
      {
        "time": 89.91,
        "text": "我攻击你的缺点你哭着把心放下"
      },
      {
        "time": 93.64,
        "text": "我赋予给你的自卑"
      },
      {
        "time": 95.7,
        "text": "在反噬一切"
      },
      {
        "time": 98,
        "text": "我静静等待审判伤悲"
      },
      {
        "time": 130.78,
        "text": "mixed by 歪歪mixing"
      }
    ]
  },
  {
    "id": 28793187,
    "title": "再见 你好",
    "artist": "金玟岐",
    "album": "热门华语228",
    "coverUrl": "https://p1.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=28793187.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=28793187",
    "duration": 254,
    "summary": "金玟岐 · 热门华语228",
    "lyricsRaw": "[00:14.490]那些年的颜色 渐渐淡掉\n[00:22.490]而我很好 只缺了些烦恼\n[00:30.490]也曾想过 若再遇到\n[00:37.490]礼貌着微笑说你好\n[00:45.490]回忆就像电话偶尔打扰\n[00:52.490]它说过去 是善意的玩笑\n[01:00:490]我仰起头 不让泪往下掉\n[01:07.490]如果各自安好\n[01:10.490]就应该放掉\n[01:14.490]我终于可以不再爱你了\n[01:18.490]我终于可以不再想你了\n[01:21.490]日子填满了 心却空空的\n[01:26.490]我知道是我不好\n[01:30.490]我终于可以不再爱你了\n[01:33.490]也终于决定放过自己了\n[01:37.490]笑过的嘴角\n[01:39.490]哭过的眼梢\n[01:41.490]时间在这一刻却静止了\n[01:44.490]说再见你好\n[02:02.490]回忆就像电话偶尔打扰\n[02:09.490]它说过去 是善意的玩笑\n[02:17:490]我仰起头 不让泪往下掉\n[02:23.490]如果各自安好\n[02:27.490]就应该放掉\n[02:31.490]我终于可以不再爱你了\n[02:35.490]我终于可以不再想你了\n[02:38.490]日子填满了 心却空空的\n[02:42.490]我知道是我不好\n[02:46.490]我终于可以不再爱你了\n[02:50.490]也终于决定放过自己了\n[02:54.490]笑过的嘴角\n[02:55.490]哭过的眼梢\n[02:57.490]时间在这一刻却静止了\n[03:01.490]说再见你好\n[03:17.490]我终于可以不再爱你了\n[03:21.490]我终于可以不再想你了\n[03:25.490]日子填满了 心却空空的\n[03:29.490]我知道是我不好\n[03:32.490]我终于可以不再爱你了\n[03:37.490]也终于决定放过自己了\n[03:41.490]笑过的嘴角\n[03:42.490]哭过的眼梢\n[03:44.490]时间在这一刻却静止了\n[03:48.490]说再见你好\n",
    "lyrics": [
      {
        "time": 14.49,
        "text": "那些年的颜色 渐渐淡掉"
      },
      {
        "time": 22.49,
        "text": "而我很好 只缺了些烦恼"
      },
      {
        "time": 30.49,
        "text": "也曾想过 若再遇到"
      },
      {
        "time": 37.49,
        "text": "礼貌着微笑说你好"
      },
      {
        "time": 45.49,
        "text": "回忆就像电话偶尔打扰"
      },
      {
        "time": 52.49,
        "text": "它说过去 是善意的玩笑"
      },
      {
        "time": 67.49,
        "text": "如果各自安好"
      },
      {
        "time": 70.49,
        "text": "就应该放掉"
      },
      {
        "time": 74.49,
        "text": "我终于可以不再爱你了"
      },
      {
        "time": 78.49,
        "text": "我终于可以不再想你了"
      },
      {
        "time": 81.49,
        "text": "日子填满了 心却空空的"
      },
      {
        "time": 86.49,
        "text": "我知道是我不好"
      },
      {
        "time": 90.49,
        "text": "我终于可以不再爱你了"
      },
      {
        "time": 93.49,
        "text": "也终于决定放过自己了"
      },
      {
        "time": 97.49,
        "text": "笑过的嘴角"
      },
      {
        "time": 99.49,
        "text": "哭过的眼梢"
      },
      {
        "time": 101.49,
        "text": "时间在这一刻却静止了"
      },
      {
        "time": 104.49,
        "text": "说再见你好"
      },
      {
        "time": 122.49,
        "text": "回忆就像电话偶尔打扰"
      },
      {
        "time": 129.49,
        "text": "它说过去 是善意的玩笑"
      },
      {
        "time": 143.49,
        "text": "如果各自安好"
      },
      {
        "time": 147.49,
        "text": "就应该放掉"
      },
      {
        "time": 151.49,
        "text": "我终于可以不再爱你了"
      },
      {
        "time": 155.49,
        "text": "我终于可以不再想你了"
      },
      {
        "time": 158.49,
        "text": "日子填满了 心却空空的"
      },
      {
        "time": 162.49,
        "text": "我知道是我不好"
      },
      {
        "time": 166.49,
        "text": "我终于可以不再爱你了"
      },
      {
        "time": 170.49,
        "text": "也终于决定放过自己了"
      },
      {
        "time": 174.49,
        "text": "笑过的嘴角"
      },
      {
        "time": 175.49,
        "text": "哭过的眼梢"
      },
      {
        "time": 177.49,
        "text": "时间在这一刻却静止了"
      },
      {
        "time": 181.49,
        "text": "说再见你好"
      },
      {
        "time": 197.49,
        "text": "我终于可以不再爱你了"
      },
      {
        "time": 201.49,
        "text": "我终于可以不再想你了"
      },
      {
        "time": 205.49,
        "text": "日子填满了 心却空空的"
      },
      {
        "time": 209.49,
        "text": "我知道是我不好"
      },
      {
        "time": 212.49,
        "text": "我终于可以不再爱你了"
      },
      {
        "time": 217.49,
        "text": "也终于决定放过自己了"
      },
      {
        "time": 221.49,
        "text": "笑过的嘴角"
      },
      {
        "time": 222.49,
        "text": "哭过的眼梢"
      },
      {
        "time": 224.49,
        "text": "时间在这一刻却静止了"
      },
      {
        "time": 228.49,
        "text": "说再见你好"
      }
    ]
  },
  {
    "id": 1936095074,
    "title": "再次爱上你",
    "artist": "金润吉",
    "album": "再次爱上你",
    "coverUrl": "https://p1.music.126.net/CpFGqvJQILqbN44t6cfF3g==/109951167287280308.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=1936095074.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=1936095074",
    "duration": 214,
    "summary": "金润吉 · 再次爱上你",
    "lyricsRaw": "[00:00.00] 作词 : 金其中\n[00:00.10] 作曲 : 金润吉\n[00:00.21]演唱：金润吉\n[00:00.54]作曲：金润吉\n[00:00.87]作词：金其中\n[00:01.17]出品：网易青云 LAB x网易飓风\n[00:04.83]Love you Baby再次想起你\n[00:08.43]不知不觉回到了伤心地\n[00:12.60]不再放弃不再哭泣不再伤心\n[00:21.09]Love you  Baby再次爱上你\n[00:25.29]不知不觉忘记了目的地\n[00:29.46]不要选择分离听我说我爱你\n[00:35.97]（ I Love You I Love You I Love You）\n[00:39.87]是那个雨天让我们忘记了誓言\n[00:46.23]灰蒙蒙的视线怎么也看不见\n[00:51.06]你那伤心的表现\n[00:55.02]我发现你和我的之间已没有眷恋\n[01:03.06]是否还要怀念你无所谓的从前\n[01:07.92]你那伤心的表现\n[01:12.03]从此看不到你的脸\n[01:16.53]真的不能再相见\n[01:20.52]蓦然听见我似乎梦见\n[01:24.72]你已走到我面前\n[01:28.44]Love you Baby再次想起你\n[01:32.67]不知不觉回到了伤心地\n[01:36.87]不再放弃不再哭泣不再伤心\n[01:44.82]Love you  Baby再次爱上你\n[01:49.53]不知不觉忘记了目的地\n[01:53.70]不要选择分离听我说我爱你\n[02:03.30]（ I Love You I Love You I Love You）\n[02:19.47]从此看不到你的脸\n[02:23.94]真的不能再相见\n[02:27.93]蓦然听见我似乎梦见\n[02:32.10]你已走到我面前\n[02:35.79]Love you Baby再次想起你\n[02:40.20]不知不觉回到了伤心地\n[02:44.25]不再放弃不再哭泣不再伤心\n[02:52.17]Love you Baby再次爱上你\n[02:56.94]不知不觉忘记了目的地\n[03:01.11]不要选择分离听我说我爱你\n[03:07.59]（ I Love You I Love You I Love You）\n[03:09.99]Love you Baby再次爱上你\n[03:13.71]不知不觉忘记了目的地\n[03:17.88]不要选择分离听我说我爱你\n[03:22.98]编曲：金润吉\n[03:23.34]制作人：金润吉\n[03:23.73]和声：金润吉\n[03:24.06]吉他：牛子建\n[03:24.51]混音（ mr. choi）\n[03:24.99]母带工程师：韩泽洙\n[03:25.53]艺人方音乐总监制：迪文\n[03:26.13]艺人方制作统筹：韦博怀\n[03:26.76]艺人经纪团队：闻雯、金鑫、韦博怀\n[03:27.63]艺人宣传团队：田依依、邹芩、常嘉欣、张珮瑶\n[03:30.48]艺人经纪公司：北京华影艺星文化传媒有限公司\n",
    "lyrics": [
      {
        "time": 0,
        "text": "作词 : 金其中"
      },
      {
        "time": 0.1,
        "text": "作曲 : 金润吉"
      },
      {
        "time": 0.21,
        "text": "演唱：金润吉"
      },
      {
        "time": 0.54,
        "text": "作曲：金润吉"
      },
      {
        "time": 0.87,
        "text": "作词：金其中"
      },
      {
        "time": 1.17,
        "text": "出品：网易青云 LAB x网易飓风"
      },
      {
        "time": 4.83,
        "text": "Love you Baby再次想起你"
      },
      {
        "time": 8.43,
        "text": "不知不觉回到了伤心地"
      },
      {
        "time": 12.6,
        "text": "不再放弃不再哭泣不再伤心"
      },
      {
        "time": 21.09,
        "text": "Love you  Baby再次爱上你"
      },
      {
        "time": 25.29,
        "text": "不知不觉忘记了目的地"
      },
      {
        "time": 29.46,
        "text": "不要选择分离听我说我爱你"
      },
      {
        "time": 35.97,
        "text": "（ I Love You I Love You I Love You）"
      },
      {
        "time": 39.87,
        "text": "是那个雨天让我们忘记了誓言"
      },
      {
        "time": 46.23,
        "text": "灰蒙蒙的视线怎么也看不见"
      },
      {
        "time": 51.06,
        "text": "你那伤心的表现"
      },
      {
        "time": 55.02,
        "text": "我发现你和我的之间已没有眷恋"
      },
      {
        "time": 63.06,
        "text": "是否还要怀念你无所谓的从前"
      },
      {
        "time": 67.92,
        "text": "你那伤心的表现"
      },
      {
        "time": 72.03,
        "text": "从此看不到你的脸"
      },
      {
        "time": 76.53,
        "text": "真的不能再相见"
      },
      {
        "time": 80.52,
        "text": "蓦然听见我似乎梦见"
      },
      {
        "time": 84.72,
        "text": "你已走到我面前"
      },
      {
        "time": 88.44,
        "text": "Love you Baby再次想起你"
      },
      {
        "time": 92.67,
        "text": "不知不觉回到了伤心地"
      },
      {
        "time": 96.87,
        "text": "不再放弃不再哭泣不再伤心"
      },
      {
        "time": 104.82,
        "text": "Love you  Baby再次爱上你"
      },
      {
        "time": 109.53,
        "text": "不知不觉忘记了目的地"
      },
      {
        "time": 113.7,
        "text": "不要选择分离听我说我爱你"
      },
      {
        "time": 123.3,
        "text": "（ I Love You I Love You I Love You）"
      },
      {
        "time": 139.47,
        "text": "从此看不到你的脸"
      },
      {
        "time": 143.94,
        "text": "真的不能再相见"
      },
      {
        "time": 147.93,
        "text": "蓦然听见我似乎梦见"
      },
      {
        "time": 152.1,
        "text": "你已走到我面前"
      },
      {
        "time": 155.79,
        "text": "Love you Baby再次想起你"
      },
      {
        "time": 160.2,
        "text": "不知不觉回到了伤心地"
      },
      {
        "time": 164.25,
        "text": "不再放弃不再哭泣不再伤心"
      },
      {
        "time": 172.17,
        "text": "Love you Baby再次爱上你"
      },
      {
        "time": 176.94,
        "text": "不知不觉忘记了目的地"
      },
      {
        "time": 181.11,
        "text": "不要选择分离听我说我爱你"
      },
      {
        "time": 187.59,
        "text": "（ I Love You I Love You I Love You）"
      },
      {
        "time": 189.99,
        "text": "Love you Baby再次爱上你"
      },
      {
        "time": 193.71,
        "text": "不知不觉忘记了目的地"
      },
      {
        "time": 197.88,
        "text": "不要选择分离听我说我爱你"
      },
      {
        "time": 202.98,
        "text": "编曲：金润吉"
      },
      {
        "time": 203.34,
        "text": "制作人：金润吉"
      },
      {
        "time": 203.73,
        "text": "和声：金润吉"
      },
      {
        "time": 204.06,
        "text": "吉他：牛子建"
      },
      {
        "time": 204.51,
        "text": "混音（ mr. choi）"
      },
      {
        "time": 204.99,
        "text": "母带工程师：韩泽洙"
      },
      {
        "time": 205.53,
        "text": "艺人方音乐总监制：迪文"
      },
      {
        "time": 206.13,
        "text": "艺人方制作统筹：韦博怀"
      },
      {
        "time": 206.76,
        "text": "艺人经纪团队：闻雯、金鑫、韦博怀"
      },
      {
        "time": 207.63,
        "text": "艺人宣传团队：田依依、邹芩、常嘉欣、张珮瑶"
      },
      {
        "time": 210.48,
        "text": "艺人经纪公司：北京华影艺星文化传媒有限公司"
      }
    ]
  },
  {
    "id": 2023195746,
    "title": "Favorite Song",
    "artist": "Toosii",
    "album": "Favorite Song",
    "coverUrl": "https://p1.music.126.net/Kh1mjvcmf5M6UGWPZ6MnMA==/109951168316193162.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=2023195746.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=2023195746",
    "duration": 209,
    "summary": "Toosii · Favorite Song",
    "lyricsRaw": "[00:00.000] 作词 : Tatiana Manaois/Nau'Jour Grainger/Adelso Sicaju\n[00:00.003] 作曲 : Tatiana Manaois/Nau'Jour Grainger/Adelso Sicaju\n[00:00.007]But nobody's\n[00:02.171]Gonna make you change what you probably\n[00:06.012]Don't like anyway 'bout you darlin'\n[00:10.097]So you might as well\n[00:12.294]Hmm-mmm\n[00:16.379]Be somebody\n[00:18.495]Who can make you face what you're guardin'\n[00:22.642]Open up the gates where you're heart is\n[00:26.773]And just let yourself (ADELSO on this)\n[00:33.249]Yeah\n[00:33.764]I'm on the stage right now, singin' your favorite song\n[00:38.150]Look in the crowd, and you know where to be found as they sing along\n[00:42.142]I say, \"You look good without no make-up, no lashes, even better when you wake up\" (Oh, oh, oh)\n[00:50.585]\n[00:50.720]I see the look on your face, I see you're hidin' the hate\n[00:53.787]I see you're lookin' for someone to scoop you right off of your feet\n[00:56.930]You want to ride in the Wraith\n[00:58.415]You want to go out on dates\n[01:00.240]You want somebody to come bring you flowers\n[01:02.565]Someone to talk to for hours\n[01:04.482]Wash your back while y'all sit in the shower (Yeah)\n[01:06.882]Someone to tell you you're beautiful\n[01:08.754]Someone to tell you and mean it\n[01:10.946]Someone to tell you, \"I love you\" everyday and don't got a reason\n[01:14.998]Talkin' 'bout someone to bring you peace\n[01:17.018]Someone to help you sleep (Yeah)\n[01:19.008]Someone to pick you up when you're feelin' down, feelin' lonely\n[01:22.933]\n[01:23.113]Need somebody who can make it better\n[01:26.874]Somebody who can open up those gates\n[01:32.877]Open up those gates to your heart\n[01:37.363]Only if you'll let me\n[01:39.560]\n[01:39.924]I'm on the stage right now, singin' your favorite song\n[01:44.314]Look in the crowd, and you know where to be found as they sing along\n[01:48.749]I say, \"You look good without no make-up, no lashes, even better when you wake up\" (Oh, oh, oh)\n[01:56.936]\n[01:57.077]I see the look on your face, I see you're lookin' for peace\n[02:00.025]I see you're tired of the hurt, tired of the pain, tired of the nights where you can't get no sleep\n[02:04.054]I see you're tired thinkin' 'bout if he cheat\n[02:06.642]See you tired thinkin' 'bout if you're leavin'\n[02:08.621]See you tired of bein' so tired\n[02:10.775]And you're damn sure ain't gettin' even\n[02:12.305]\n[02:12.448]Need somebody who can make it better\n[02:16.529]Somebody who can open up those gates\n[02:22.566]Open up those gates to your heart\n[02:26.714]Only if you'll let me\n[02:29.235]\n[02:29.596]I'm on the stage right now, singin' your favorite song\n[02:33.751]Look in the crowd, and you know where to be found as they sing along\n[02:38.357]I say, \"You look good without no make-up, no lashes, even better when you wake up\" (Oh, oh, oh)\n",
    "lyrics": [
      {
        "time": 0,
        "text": "作词 : Tatiana Manaois/Nau'Jour Grainger/Adelso Sicaju"
      },
      {
        "time": 0.003,
        "text": "作曲 : Tatiana Manaois/Nau'Jour Grainger/Adelso Sicaju"
      },
      {
        "time": 0.007,
        "text": "But nobody's"
      },
      {
        "time": 2.171,
        "text": "Gonna make you change what you probably"
      },
      {
        "time": 6.012,
        "text": "Don't like anyway 'bout you darlin'"
      },
      {
        "time": 10.097,
        "text": "So you might as well"
      },
      {
        "time": 12.294,
        "text": "Hmm-mmm"
      },
      {
        "time": 16.379,
        "text": "Be somebody"
      },
      {
        "time": 18.495,
        "text": "Who can make you face what you're guardin'"
      },
      {
        "time": 22.642,
        "text": "Open up the gates where you're heart is"
      },
      {
        "time": 26.773,
        "text": "And just let yourself (ADELSO on this)"
      },
      {
        "time": 33.249,
        "text": "Yeah"
      },
      {
        "time": 33.764,
        "text": "I'm on the stage right now, singin' your favorite song"
      },
      {
        "time": 38.15,
        "text": "Look in the crowd, and you know where to be found as they sing along"
      },
      {
        "time": 42.142,
        "text": "I say, \"You look good without no make-up, no lashes, even better when you wake up\" (Oh, oh, oh)"
      },
      {
        "time": 50.72,
        "text": "I see the look on your face, I see you're hidin' the hate"
      },
      {
        "time": 53.787,
        "text": "I see you're lookin' for someone to scoop you right off of your feet"
      },
      {
        "time": 56.93,
        "text": "You want to ride in the Wraith"
      },
      {
        "time": 58.415,
        "text": "You want to go out on dates"
      },
      {
        "time": 60.24,
        "text": "You want somebody to come bring you flowers"
      },
      {
        "time": 62.565,
        "text": "Someone to talk to for hours"
      },
      {
        "time": 64.482,
        "text": "Wash your back while y'all sit in the shower (Yeah)"
      },
      {
        "time": 66.882,
        "text": "Someone to tell you you're beautiful"
      },
      {
        "time": 68.754,
        "text": "Someone to tell you and mean it"
      },
      {
        "time": 70.946,
        "text": "Someone to tell you, \"I love you\" everyday and don't got a reason"
      },
      {
        "time": 74.998,
        "text": "Talkin' 'bout someone to bring you peace"
      },
      {
        "time": 77.018,
        "text": "Someone to help you sleep (Yeah)"
      },
      {
        "time": 79.008,
        "text": "Someone to pick you up when you're feelin' down, feelin' lonely"
      },
      {
        "time": 83.113,
        "text": "Need somebody who can make it better"
      },
      {
        "time": 86.874,
        "text": "Somebody who can open up those gates"
      },
      {
        "time": 92.877,
        "text": "Open up those gates to your heart"
      },
      {
        "time": 97.363,
        "text": "Only if you'll let me"
      },
      {
        "time": 99.924,
        "text": "I'm on the stage right now, singin' your favorite song"
      },
      {
        "time": 104.314,
        "text": "Look in the crowd, and you know where to be found as they sing along"
      },
      {
        "time": 108.749,
        "text": "I say, \"You look good without no make-up, no lashes, even better when you wake up\" (Oh, oh, oh)"
      },
      {
        "time": 117.077,
        "text": "I see the look on your face, I see you're lookin' for peace"
      },
      {
        "time": 120.025,
        "text": "I see you're tired of the hurt, tired of the pain, tired of the nights where you can't get no sleep"
      },
      {
        "time": 124.054,
        "text": "I see you're tired thinkin' 'bout if he cheat"
      },
      {
        "time": 126.642,
        "text": "See you tired thinkin' 'bout if you're leavin'"
      },
      {
        "time": 128.621,
        "text": "See you tired of bein' so tired"
      },
      {
        "time": 130.775,
        "text": "And you're damn sure ain't gettin' even"
      },
      {
        "time": 132.448,
        "text": "Need somebody who can make it better"
      },
      {
        "time": 136.529,
        "text": "Somebody who can open up those gates"
      },
      {
        "time": 142.566,
        "text": "Open up those gates to your heart"
      },
      {
        "time": 146.714,
        "text": "Only if you'll let me"
      },
      {
        "time": 149.596,
        "text": "I'm on the stage right now, singin' your favorite song"
      },
      {
        "time": 153.751,
        "text": "Look in the crowd, and you know where to be found as they sing along"
      },
      {
        "time": 158.357,
        "text": "I say, \"You look good without no make-up, no lashes, even better when you wake up\" (Oh, oh, oh)"
      }
    ]
  },
  {
    "id": 1997453199,
    "title": "City Of Love",
    "artist": "Toosii",
    "album": "Boys Don’t Cry: Men Do",
    "coverUrl": "https://p1.music.126.net/TmYR12BnlidXCIcVVi-Ifg==/109951168050072720.jpg",
    "audioUrl": "https://music.163.com/song/media/outer/url?id=1997453199.mp3",
    "sourceUrl": "https://music.163.com/#/song?id=1997453199",
    "duration": 161,
    "summary": "Toosii · Boys Don’t Cry: Men Do",
    "lyricsRaw": "[00:00.000] 作词 : Nau'Jour Grainger/Adelso Sicaju/Fedor Sommerfeld\n[00:00.351] 作曲 : Nau'Jour Grainger/Adelso Sicaju/Fedor Sommerfeld\n[00:00.702][Intro]\n[00:01.704]All these eyes from the side under blue lights\n[00:02.952]Making you confused, I'm selfish, I know\n[00:06.458]That now's not the time, I‘m sure they wouldn't mind\n[00:09.200]If you'd wanna leave and follow me home\n[00:09.700]Yeah\n[00:10.717]\n[00:10.951][Chorus]\n[00:11.454]Know you ain't from Tennessee, but you the only ten I see\n[00:13.958]You mix the Hennesy with the juice, don't know if you'll remember me\n[00:16.702]When the night is over, I'll be here, you need a cryin' shoulder\n[00:20.452]Cry for you when no one cries for soldiers (ADELSO on this)\n[00:22.956]They just sweep my feelings right up under the rug\n[00:25.955]Tell me, have you heard of the city of love?\n[00:28.963]Well, me neither\n[00:30.207]Where's the girl of my dreams? Have you seen her?\n[00:32.457]Ain't fall in love with her face, I just love her demeanor\n[00:35.461]Timeless, spendin' time with you became so timeless\n[00:38.201]Three-hundred sixty-five days, I'm spinnin' everyday, don't know where time went (Yeah)\n[00:41.967]Everyday with you feel like I'm shinin'\n[00:44.213]So, I bought you diamonds\n[00:45.702]I done lost my mind, like, where my mind went?\n[00:46.217]\n[00:46.714][Verse]\n[00:48.214]**** my feelings, put 'em in a basement\n[00:50.224]Young nigga chasin'\n[00:51.708]Love life with a hate, bae, let's replace it (Yeah)\n[00:53.954]I can show you the meanin' of vacant\n[00:56.398]Reach inside my chest, you'll see there's nothin' where that space is\n[00:59.648]So, I tried to put you right on top the top\n[01:02.161]I know I been chasin' guap\n[01:03.641]So I'll see ya' when I get off the block\n[01:05.905]When I'm comin' home, tell ya' I give her knock\n[01:07.902]I be everything they not, you done fell in love with a hard knock nigga\n[01:12.151]Young nigga made it out the 'jects, straight to arenas\n[01:14.893]Lookin' for the girl of my dreams, like, have you seen her?\n[01:17.900]She's a real cold *****, I'm a real cold nigga\n[01:20.650]I done bossed up her life, gave her like five-six figures\n[01:23.660]Me and bro like [?], shake his dreads when he ready\n[01:26.156]She done fell in love with a stepper, make a mess like confetti\n[01:29.894]I do everything that you need, girl, if you let me\n[01:32.401]All you got to do is just tell me whenever you ready\n[01:35.399]Are you ready?\n[01:35.895][Chorus]\n[01:36.149]Know you ain't from Tennessee, but you the only ten I see\n[01:38.146]You mix the Hennesy with the juice, don't know if you'll remember me\n[01:40.900]When the night is over, I'll be here, you need a cryin' shoulder\n[01:44.660]Cry for you when no one cries for soldiers\n[01:47.401]They just sweep my feelings right up under the rug\n[01:49.897]Tell me, have you heard of the city of love?\n[01:52.906]Well, me neither\n[01:54.144]Where's the girl of my dreams? Have you seen her?\n[01:56.408]Ain't fall in love with her face, I just love her demeanor\n[01:59.396]Timeless, spendin' time with you became so timeless\n[02:02.145]Three-hundred sixty-five days, I'm spinnin' everyday, don't know where time went (Yeah)\n[02:05.910]Everyday with you feel like I'm shinin'\n[02:08.393]So, I bought you diamonds\n[02:09.901]I done lost my mind, like, where my mind went?\n",
    "lyrics": [
      {
        "time": 0,
        "text": "作词 : Nau'Jour Grainger/Adelso Sicaju/Fedor Sommerfeld"
      },
      {
        "time": 0.351,
        "text": "作曲 : Nau'Jour Grainger/Adelso Sicaju/Fedor Sommerfeld"
      },
      {
        "time": 1.704,
        "text": "All these eyes from the side under blue lights"
      },
      {
        "time": 2.952,
        "text": "Making you confused, I'm selfish, I know"
      },
      {
        "time": 6.458,
        "text": "That now's not the time, I‘m sure they wouldn't mind"
      },
      {
        "time": 9.2,
        "text": "If you'd wanna leave and follow me home"
      },
      {
        "time": 9.7,
        "text": "Yeah"
      },
      {
        "time": 11.454,
        "text": "Know you ain't from Tennessee, but you the only ten I see"
      },
      {
        "time": 13.958,
        "text": "You mix the Hennesy with the juice, don't know if you'll remember me"
      },
      {
        "time": 16.701999999999998,
        "text": "When the night is over, I'll be here, you need a cryin' shoulder"
      },
      {
        "time": 20.452,
        "text": "Cry for you when no one cries for soldiers (ADELSO on this)"
      },
      {
        "time": 22.956,
        "text": "They just sweep my feelings right up under the rug"
      },
      {
        "time": 25.955,
        "text": "Tell me, have you heard of the city of love?"
      },
      {
        "time": 28.963,
        "text": "Well, me neither"
      },
      {
        "time": 30.207,
        "text": "Where's the girl of my dreams? Have you seen her?"
      },
      {
        "time": 32.457,
        "text": "Ain't fall in love with her face, I just love her demeanor"
      },
      {
        "time": 35.461,
        "text": "Timeless, spendin' time with you became so timeless"
      },
      {
        "time": 38.201,
        "text": "Three-hundred sixty-five days, I'm spinnin' everyday, don't know where time went (Yeah)"
      },
      {
        "time": 41.967,
        "text": "Everyday with you feel like I'm shinin'"
      },
      {
        "time": 44.213,
        "text": "So, I bought you diamonds"
      },
      {
        "time": 45.702,
        "text": "I done lost my mind, like, where my mind went?"
      },
      {
        "time": 48.214,
        "text": "**** my feelings, put 'em in a basement"
      },
      {
        "time": 50.224,
        "text": "Young nigga chasin'"
      },
      {
        "time": 51.708,
        "text": "Love life with a hate, bae, let's replace it (Yeah)"
      },
      {
        "time": 53.954,
        "text": "I can show you the meanin' of vacant"
      },
      {
        "time": 56.398,
        "text": "Reach inside my chest, you'll see there's nothin' where that space is"
      },
      {
        "time": 59.648,
        "text": "So, I tried to put you right on top the top"
      },
      {
        "time": 62.161,
        "text": "I know I been chasin' guap"
      },
      {
        "time": 63.641,
        "text": "So I'll see ya' when I get off the block"
      },
      {
        "time": 65.905,
        "text": "When I'm comin' home, tell ya' I give her knock"
      },
      {
        "time": 67.902,
        "text": "I be everything they not, you done fell in love with a hard knock nigga"
      },
      {
        "time": 72.151,
        "text": "Young nigga made it out the 'jects, straight to arenas"
      },
      {
        "time": 74.893,
        "text": "Lookin' for the girl of my dreams, like, have you seen her?"
      },
      {
        "time": 77.9,
        "text": "She's a real cold *****, I'm a real cold nigga"
      },
      {
        "time": 80.65,
        "text": "I done bossed up her life, gave her like five-six figures"
      },
      {
        "time": 83.66,
        "text": "Me and bro like , shake his dreads when he ready"
      },
      {
        "time": 86.156,
        "text": "She done fell in love with a stepper, make a mess like confetti"
      },
      {
        "time": 89.894,
        "text": "I do everything that you need, girl, if you let me"
      },
      {
        "time": 92.401,
        "text": "All you got to do is just tell me whenever you ready"
      },
      {
        "time": 95.399,
        "text": "Are you ready?"
      },
      {
        "time": 96.149,
        "text": "Know you ain't from Tennessee, but you the only ten I see"
      },
      {
        "time": 98.146,
        "text": "You mix the Hennesy with the juice, don't know if you'll remember me"
      },
      {
        "time": 100.9,
        "text": "When the night is over, I'll be here, you need a cryin' shoulder"
      },
      {
        "time": 104.66,
        "text": "Cry for you when no one cries for soldiers"
      },
      {
        "time": 107.401,
        "text": "They just sweep my feelings right up under the rug"
      },
      {
        "time": 109.897,
        "text": "Tell me, have you heard of the city of love?"
      },
      {
        "time": 112.906,
        "text": "Well, me neither"
      },
      {
        "time": 114.144,
        "text": "Where's the girl of my dreams? Have you seen her?"
      },
      {
        "time": 116.408,
        "text": "Ain't fall in love with her face, I just love her demeanor"
      },
      {
        "time": 119.396,
        "text": "Timeless, spendin' time with you became so timeless"
      },
      {
        "time": 122.145,
        "text": "Three-hundred sixty-five days, I'm spinnin' everyday, don't know where time went (Yeah)"
      },
      {
        "time": 125.91,
        "text": "Everyday with you feel like I'm shinin'"
      },
      {
        "time": 128.393,
        "text": "So, I bought you diamonds"
      },
      {
        "time": 129.901,
        "text": "I done lost my mind, like, where my mind went?"
      }
    ]
  }
];
