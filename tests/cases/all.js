//Dependancies
  const tester = require(require("path").join(__dirname, "..", "tester"))

//Tests
  ;[
    {
      filename:"[WZF] Toriko - Episodio 93~94[HD][X264-AAC][1280x720][Sub Esp]",
      name:"Toriko",
      subber:"WZF",
      episode:"93-94",
      codecs:"aac x264",
      resolution:"720p",
      subtitles:"es",
    },
    {
      filename:"[Ohys-Raws] Code Geass Fukkatsu no Lelouch (BD 1920x1080 x264 FLACx2).mkv",
      subber:"Ohys-Raws",
      name:"Code Geass Fukkatsu no Lelouch",
      source:"bluray",
      resolution:"1080p",
      codecs:"flac x264",
      extension:"mkv",
    },
    {
      filename:"[Anime Land] Code Geass - Hangyaku no Lelouch I - Koudou (BDRip 720p Hi444PP AC3) RAW [C8D15AEE].mkv",
      subber:"Anime Land",
      name:"Code Geass - Hangyaku no Lelouch I - Koudou",
      source:"bluray raw",
      resolution:"720p",
      codecs:"ac3 hi444pp",
      hash:"C8D15AEE",
      extension:"mkv",
    },
    {
      filename:"[Ohys-Raws] Overlord III - 13 END (AT-X 1280x720 x264 AAC).mp4",
      subber:"Ohys-Raws",
      name:"Overlord III",
      episode:"13",
      resolution:"720p",
      distributor:"at_x",
      codecs:"aac x264",
      extension:"mp4",
    },
    {
      filename:"[Anime Land] Overlord II - 09 (WEBRip 720p YUV444P10 EAC-3) RAW [91E212FA].mkv",
      subber:"Anime Land",
      name:"Overlord II",
      episode:"9",
      source:"raw webdl",
      resolution:"720p",
      hash:"91E212FA",
      extension:"mkv",
      codecs:"eac3 yuv444p10",
    },
    {
      filename:"[Anime Land] Overlord (Movie 01~02) + (Two Specials) [BDRip 1080p AVC-YUV444P10 FLAC]",
      subber:"Anime Land",
      name:"Overlord",
      movie:"1-2",
      meta:"has_specials",
      source:"bluray",
      resolution:"1080p",
      codecs:"avc flac yuv444p10",
    },
    {
      filename:"[Anime Land] Kakegurui×× (WEBRip 720p Hi444PP EAC3) RAW",
      subber:"Anime Land",
      name:"Kakegurui××",
      source:"raw webdl",
      codecs:"eac3 hi444pp",
      resolution:"720p",
    },
    {
      filename:"[Anime Land] Kakegurui 11 (BS11 720p Hi10P AAC) RAW [FF183D95].mp4",
      subber:"Anime Land",
      name:"Kakegurui",
      episode:"11",
      resolution:"720p",
      source:"raw",
      hash:"FF183D95",
      extension:"mp4",
      codecs:"10bit aac",
      distributor:"bs11",
    },
    {
      filename:"[모에-Raws] Kakegurui #05 (BS11 1280x720 x264 AAC).mp4",
      subber:"모에-Raws",
      name:"Kakegurui",
      distributor:"bs11",
      resolution:"720p",
      codecs:"aac x264",
      extension:"mp4",
      episode:"5",
    },
    {
      filename:"[SOFCJ-Raws] Bleach - Gotei 13 Omake (DVDRip 768x576 x264 VFR 10bit AC3).mkv",
      subber:"SOFCJ-Raws",
      name:"Bleach - Gotei 13 Omake",
      source:"dvd",
      codecs:"10bit ac3 x264",
      audio:"fr",
      extension:"mkv",
      resolution:"16_9",
    },
    {
      filename:"[Teke]_Made in Abyss_BDRip_AAC_1080MP4",
      name:"Made in Abyss",
      subber:"Teke",
      source:"bluray",
      codecs:"aac",
      resolution:"1080p",
      extension:"mp4",
    },
    {
      filename:"[BDMV] Made in Abyss / メイドインアビス [BD-BOX I+II][JP]",
      name:"Made in Abyss / メイドインアビス",
      source:"bluray",
      audio:"jp",
      subber:"BDMV"
    },
    {
      filename:"[Erai-raws] Made in Abyss - 01~13 [1080p AVC-YUV444P10][E-AC3][Multiple Subtitle]",
      subber:"Erai-raws",
      name:"Made in Abyss",
      episode:"1-13",
      resolution:"1080p",
      codecs:"avc eac3 yuv444p10",
      subtitles:"multi",
    },
    {
      filename:"[Anime Land] Made in Abyss 12 (BS11 720p Hi10P AAC) RAW [F5B00E92].mp4",
      subber:"Anime Land",
      name:"Made in Abyss",
      episode:"12",
      distributor:"bs11",
      resolution:"720p",
      codecs:"10bit aac",
      source:"raw",
      hash:"F5B00E92",
      extension:"mp4",
    },
    {
      filename:"Highschool Of The Dead Complete Series + OVA (High Quality)(Dual Audio) MKV [1080p] Blu-Ray Rip (V2)",
      name:"Highschool Of The Dead",
      extension:"mkv",
      resolution:"1080p",
      source:"bluray",
      meta:"complete has_ovas high_quality v2",
      codecs:"dual_audio",
    },
    {
      filename:"[anime4life.] High School Of The Dead 1-12+OVA Complete (BD1080p AC3 10bit) [x265_HEVC] Dual Audio",
      subber:"anime4life",
      name:"High School Of The Dead",
      episode:"1-12",
      meta:"complete has_ovas",
      source:"bluray",
      resolution:"1080p",
      codecs:"10bit ac3 dual_audio hevc x265",
    },
    {
      filename:"[FansubAnimesForever] Highschool of the Dead OVA [BDRip-1080p-8bit].mkv",
      subber:"FansubAnimesForever",
      name:"Highschool of the Dead OVA",
      source:"bluray",
      resolution:"1080p",
      codecs:"8bit",
      extension:"mkv",
    },
    {
      filename:"[Cleo] Kimi no Na wa | Your Name [Dual Audio 10bit BD720p][HEVC-x265]",
      subber:"Cleo",
      name:"Kimi no Na wa | Your Name",
      codecs:"10bit dual_audio hevc x265",
      resolution:"720p",
      source:"bluray",
    },
    {
      filename:"[pcela-anime] Kimi no Na wa [BRrip 1920x1080 x264 AAC] [SUB PL+EN]",
      subber:"pcela-anime",
      name:"Kimi no Na wa",
      source:"bluray",
      resolution:"1080p",
      codecs:"aac x264",
      subtitles:"en pl",
    },
    {
      filename:"[USP RAWS] your name. (Kimi no na wa.) [TV Asahi] [1080p] [FCE75C0E].mkv",
      subber:"USP RAWS",
      distributor:"tv_asahi",
      name:"your name. (Kimi no na wa.)",
      resolution:"1080p",
      hash:"FCE75C0E",
      extension:"mkv"
    },
    {
      filename:"[Erai-raws] Knights of the Zodiac - Saint Seiya - 01 ~ 06 [1080p][Multiple Subtitle]",
      subber:"Erai-raws",
      name:"Knights of the Zodiac - Saint Seiya",
      episode:"1-6",
      resolution:"1080p",
      subtitles:"multi",
    },
    {
      filename:"Saint Seiya 039 (original Japanese broadcast) [Beta HiFi 720x480 LPCM Tokyo TV] [D92CCED0]",
      name:"Saint Seiya",
      episode:"39",
      hash:"D92CCED0",
      resolution:"16_9",
      distributor:"tokyo_tv",
      codecs:"lpcm"
    },
    {
      filename:"[BakedFish] Saint Seiya: Saintia Shou - 08 & 09 - ONA - Batch [720p][MP4][AAC]",
      subber:"BakedFish",
      name:"Saint Seiya: Saintia Shou",
      episode:"8-9",
      meta:"batch",
      resolution:"720p",
      codecs:"aac",
      extension:"mp4",
      source:"webdl",
    },
    {
      filename:"Saint.Seiya.(Remastered).E022.544p.x265.HEVC.(Eng,Spa,Fre)-BZ.mkv",
      name:"Saint Seiya",
      episode:"22",
      codecs:"hevc x265",
      audio:"en fr sp",
      subber:"BZ",
      extension:"mkv",
      resolution:"544p",
      meta:"remastered",
    },
    {
      filename:"[BlurayDesuYo] Shingeki no Kyojin (Season 3) - Batch (BD 1920x1080 10bit FLAC)",
      subber:"BlurayDesuYo",
      name:"Shingeki no Kyojin",
      season:"3",
      meta:"batch",
      source:"bluray",
      resolution:"1080p",
      codecs:"10bit flac",
    },
    {
      filename:"[Leopard-Raws] Shingeki no Kyojin Season 3 Part.2 - 09 END RAW (NHKG 1280x720 x264 AAC).mp4",
      subber:"Leopard-Raws",
      name:"Shingeki no Kyojin",
      season:"3",
      episode:"9",
      part:"2",
      source:"raw",
      resolution:"720p",
      codecs:"aac x264",
      extension:"mp4",
    },
    {
      filename:"[ZetaRebel] Ghost in the Shell (1995) (BD x264 1080p 8-bit FLAC)",
      subber:"ZetaRebel",
      name:"Ghost in the Shell (1995)",
      source:"bluray",
      codecs:"8bit flac x264",
      resolution:"1080p",
    },
    {
      filename:"[DragsterPS] Ghost in the Shell - SAC_2045 S01 [1080p] [Japanese Audio] [Multi-Subs]",
      subber:"DragsterPS",
      name:"Ghost in the Shell - SAC_2045",
      season:"1",
      resolution:"1080p",
      audio:"jp",
      subtitles:"multi",
    },
    {
      filename:"[Team246] Ghost in the shell Stand alone complex S01 E10-E15 [BDREMUX 1080P MULTi DTSHDMA 5.1][VOSTFR]",
      subber:"Team246",
      name:"Ghost in the shell Stand alone complex",
      season:"1",
      episode:"10-15",
      resolution:"1080p",
      audio:"multi vo",
      subtitles:"fr",
      source:"bluray",
      codecs:"audio_5_1 dts_hdma",
      meta:"remux",
    },
    {
      filename:"[PuyaSubs!] Psycho-Pass 3 - First Inspector - 03 [1080p][1B7B0133].mkv",
      subber:"PuyaSubs!",
      name:"Psycho-Pass 3 - First Inspector",
      episode: "3",
      resolution:"1080p",
      hash:"1B7B0133",
      extension:"mkv",
    },
    {
      filename:"[Lilith-Raws] 心靈判官 / Psycho-Pass Sinners of the System Case.3 [Baha][WEB-DL][1080p][AVC AAC][CHT][MKV]",
      subber:"Lilith-Raws",
      name:"心靈判官 / Psycho-Pass Sinners of the System Case 3",
      source:"webdl",
      resolution:"1080p",
      codecs:"aac avc",
      extension:"mkv",
    },
    {
      filename:"[U3-Web] PSYCHO-PASS 3 - FIRST INSPECTOR (2020) [Movie][AMZN WEB-DL(v) 1080p AVC AAC DDP SRT][Multi-Subs] (PSYCHO-PASS サイコパス / 心靈判官 / 心理測量者)",
      subber:"U3-Web",
      name:"PSYCHO-PASS 3 - FIRST INSPECTOR (2020) (PSYCHO-PASS サイコパス / 心靈判官 / 心理測量者)",
      distributor:"amazon",
      resolution:"1080p",
      subtitles:"multi",
      codecs:"aac avc",
      source:"webdl",
    },
    {
      filename:"[RLSP] One Piece - Dressrosa 629-746",
      subber:"RLSP",
      name:"One Piece - Dressrosa",
      episode:"629-746",
    },
    {
      filename:"[KaiDubs] One Piece - 575-587 [720p] [English Dub] [CC] [AMZN-DL]",
      subber:"KaiDubs",
      name:"One Piece",
      episode:"575-587",
      resolution:"720p",
      audio:"en",
      distributor:"amazon comedy_central"
    },
    {
      filename:"One Piece Season 10 Voyage 1 (Eps. 575-587) (Dual Audio 1080p JP BD Remuxes)",
      name:"One Piece Voyage 1",
      season:"10",
      episode:"575-587",
      resolution:"1080p",
      audio:"jp",
      codecs:"dual_audio",
      source:"bluray",
      meta:"remux",
    },
    {
      filename:"One piece 590 X Toriko X Dragon Ball Z Crossover [animestorrent.com][Legendado][PT-BR]",
      name:"One piece 590 X Toriko X Dragon Ball Z Crossover",
      website:"animestorrent.com",
      source:"bluray",
      subber:"Legendado",
    },
    {
      filename:"[Kaerizaki-Fansub]_One-Piece_Stampede_Film_14_[VERSION-LIGHT][VOSTFR][BLU-RAY][FHD_1920x1080].mp4",
      name:"One-Piece Stampede Film 14",
      subber:"Kaerizaki-Fansub",
      audio:"vo",
      subtitles:"fr",
      source:"bluray",
      resolution:"1080p",
      extension:"mp4",
    },
    {
      filename:"[Cervoz] Serial Experiments Lain [1080p][MULTI][VF - VOSTFR][10Bits]",
      subber:"Cervoz",
      name:"Serial Experiments Lain",
      resolution:"1080p",
      audio:"fr multi vo",
      subtitles:"fr",
      codecs:"10bit",
    },
    {
      filename:"[JpU - No oficial] Serial Experiments Lain",
      subber:"JpU - No oficial",
      name:"Serial Experiments Lain",
    },
    {
      filename:"Serial Experiments Lain (1998) 1080p.H264.Ac3.Ita.Flac.Jap.Eng.Sub.Ita.Eng [v2] [21GB] [stress]",
      subber:"stress",
      name:"Serial Experiments Lain (1998)",
      resolution:"1080p",
      codecs:"ac3 flac h264",
      audio:"en ita jp",
      subtitles:"en ita",
      meta:"v2",
    },
    {
      filename:"[Reaktor] From the New World - Shinsekai Yori [1080p][BD][x265][10-bit][Dual-Audio]",
      subber:"Reaktor",
      name:"From the New World - Shinsekai Yori",
      resolution:"1080p",
      source:"bluray",
      codecs:"10bit dual_audio x265",
    },
    {
      filename:"[AnimeRG] Shinsekai Yori (From the New World) [01-25] [Complete] [1080p] [HEVC] [TheBiscuitMan]",
      subber:"AnimeRG",
      name:"Shinsekai Yori (From the New World)",
      episode:"1-25",
      resolution:"1080p",
      codecs:"hevc",
      meta:"complete",
    },
    {
      filename:"[hoseki]_Shinsekai_Yori_-_14-16_(BD_1080p_FLAC)",
      subber:"hoseki",
      name:"Shinsekai Yori",
      episode:"14-16",
      source:"bluray",
      resolution:"1080p",
      codecs:"flac",
    },
    {
      filename:"[T.H.X&A.I.R.nesSub][Shinsekai_Yori][BDRIP][Vol.1-9全][1920x1080_10bpp][AVC_FLAC][MKV]",
      subber:"T.H.X&A.I.R.nesSub",
      source:"bluray",
      resolution:"1080p",
      codecs:"10bit avc flac",
      extension:"mkv",
      name:"Shinsekai Yori",
      episode:"1-9",
    },
    {
      filename:"[RnF] Shinsekai Yori - 24 - BD - Vostfr.mp4",
      subber:"RnF",
      name:"Shinsekai Yori",
      episode:"24",
      source:"bluray",
      audio:"vo",
      subtitles:"fr",
      extension:"mp4",
    },
    {
      filename:"[AT] [Moshi Moshi] Fullmetal Alchemist Brotherhood - Star Of Milos [BD 720p] [01A4B7E9][Legendado][PT_BR][AnimesTorrent]",
      name:"Fullmetal Alchemist Brotherhood - Star Of Milos",
      hash:"01A4B7E9",
      source:"bluray",
      resolution:"720p",
      subber:"Moshi Moshi",
    },
    {
      filename:"[BDRip1080p.x264.AC3.ITA.ENG.JAP.].Fullmetal.Alchemist.Brotherhood + OAV Bluray RIP",
      name:"Fullmetal Alchemist Brotherhood + OAV",
      audio: "en ita jp",
      source:"bluray",
      resolution:"1080p",
      codecs:"ac3 x264",
    },
    {
      filename:"[UQW] Fullmetal Alchemist: Brotherhood [BD 1080p AVC-YUV420P10 FLAC]",
      subber:"UQW",
      name:"Fullmetal Alchemist: Brotherhood",
      source:"bluray",
      resolution:"1080p",
      codecs:"avc flac",
    },
    {
      filename:"Fullmetal Alchemist Brotherhood + OVAs + Specials [ShadyCrab 1080p 8bit AAC] [Dual Audio]",
      name:"Fullmetal Alchemist Brotherhood",
      resolution:"1080p",
      meta:"has_ovas has_specials",
      codecs:"8bit aac dual_audio",
      subber:"ShadyCrab",
    },
    {
      filename:"[Xspitfire911] Fullmetal Alchemist Brotherhood + OAV BDRIP 1080p X265 10bit Vostfr",
      subber:"Xspitfire911",
      name:"Fullmetal Alchemist Brotherhood + OAV",
      source:"bluray",
      resolution:"1080p",
      codecs:"10bit x265",
      audio:"vo",
      subtitles:"fr",
    },
    {
      filename:"Bleach Movie 01 - Memories of Nobody [H264 1080p DTS Ita Eng Jap SUB Ita Eng] [Rady]",
      name:"Bleach Movie - Memories of Nobody",
      codecs:"dts h264",
      resolution:"1080p",
      audio:"en ita jp",
      subtitles:"en ita",
      subber:"Rady",
      movie:"1",
    },
    {
      filename:"[2ndfire] Spirited Away / Sen to Chihiro no Kamikakushi [BD,1080p,AV1,10bit][36C04BDB]",
      subber:"2ndfire",
      hash:"36C04BDB",
      name:"Spirited Away / Sen to Chihiro no Kamikakushi",
      source:"bluray",
      resolution:"1080p",
      codecs:"10bit av1",
    },
    {
      filename:"[AnimeRG] Spirited Away (2001) (Sen to Chihiro no Kamikakushi) [720p BD 10bit] [Dual Audio] [Multi-Language Subtitles] [JRR] [Studio Ghibli].mkv",
      subber:"AnimeRG",
      name:"Spirited Away (2001) (Sen to Chihiro no Kamikakushi)",
      resolution:"720p",
      source:"bluray",
      codecs:"10bit dual_audio",
      subtitles:"multi",
      extension:"mkv",
    },
    {
      filename:"Spirited Away 1080p Dubbed English",
      name:"Spirited Away",
      resolution:"1080p",
      audio:"en",
    },
    {
      filename:"[千与千寻].Spirited.Away.2001.BluRay.1080p.DTS-HD.MA.6.1.x265.10bit-BeiTai&NetFriend",
      name:"千与千寻 Spirited Away 2001",
      source:"bluray",
      resolution:"1080p",
      codecs:"10bit dts_hdma x265",
      subber:"BeiTai&NetFriend",
    },
    {
      filename:"[Dragonier] Sen to Chihiro no Kamikakushi - Spirited Away [1080p][6.1ch - FLAC][86FFE17E].mkv",
      name:"Sen to Chihiro no Kamikakushi - Spirited Away",
      subber:"Dragonier",
      resolution:"1080p",
      hash:"86FFE17E",
      extension:"mkv",
      codecs:"flac",
    },
    {
      filename:"[matheousse] Death Note MULTi VF/VOSTFR (BD 1080p AAC)",
      subber:"matheousse",
      name:"Death Note",
      audio:"fr multi vo",
      subtitles:"fr",
      source:"bluray",
      resolution:"1080p",
      codecs:"aac",
    },
    {
      filename:"[AnimeRG] Death Note Complete [01-37] [Dual Audio] [480p BD] [10bit] [Multi-Subs] [JRR]",
      subber:"AnimeRG",
      name:"Death Note",
      episode:"1-37",
      codecs:"10bit dual_audio",
      subtitles:"multi",
      source:"bluray",
      resolution:"480p",
      meta:"complete"
    },
    {
      filename:"[SOFCJ-Raws] Death Note (BDRip 1920x1080 x264 10bit VFR FLAC)",
      subber:"SOFCJ-Raws",
      name:"Death Note",
      source:"bluray",
      resolution:"1080p",
      codecs:"10bit flac x264",
      audio:"fr",
    },
    {
      filename:"Death Note 1-37 [480p] [EN SUB]",
      name:"Death Note",
      resolution:"480p",
      episode:"1-37",
      subtitles:"en",
    },
    {
      filename:"[HyperX] Fairy Tail - Season 6 [480p][Tagalog]",
      subber:"HyperX",
      name:"Fairy Tail",
      season:"6",
      resolution:"480p",
    },
    {
      filename:"[AC] Fairy Tail 278-328",
      subber:"AC",
      name:"Fairy Tail",
      episode:"278-328",
    },
    {
      filename:"[Judas] Fairy Tail (2009-2014) (Seasons 1-8 + OVAs) [BD 1080p][HEVC x265 10bit][Dual-Audio][Eng-Subs]",
      name:"Fairy Tail (2009-2014)",
      meta:"has_ovas",
      subber:"Judas",
      season:"1-8",
      source:"bluray",
      resolution:"1080p",
      codecs:"10bit dual_audio hevc x265",
      subtitles:"en",
    },
    {
      filename:"Fairy Tail - 100 Years Quest 036-038 [MangaStream]",
      name:"Fairy Tail - 100 Years Quest",
      episode:"36-38",
      subber:"MangaStream",
    },
    {
      filename:"Dragon Ball Super S05E47 Body, Soul and Power Unleashed! Goku and Vegeta!!.mkv",
      name:"Dragon Ball Super Body, Soul and Power Unleashed! Goku and Vegeta!!",
      extension:"mkv",
      season:"5",
      episode:"47",
    },
    {
      filename:"Dragon.Ball.Z.Movie.14.Battle.of.Gods.2013.EXTENDED.DUAL.AUDiO.SUB.PL.1080p.BluRay.REMUX.AVC.TrueHD.5.1-SeBoLeX",
      name:"Dragon Ball Z Movie 14 Battle of Gods 2013",
      source:"bluray",
      meta:"extended remux",
      codecs:"audio_5_1 avc dual_audio true_hd",
      resolution:"1080p",
      subber:"SeBoLeX",
      subtitles:"pl",
    },
    {
      filename:"[USS] Dragon Ball Z - Resurrection F ⁄ Fukkatsu no F (2015) (Dual Audio) [BD 1080p H264 AC3]",
      subber:"USS",
      name:"Dragon Ball Z - Resurrection F ⁄ Fukkatsu no F (2015)",
      source:"bluray",
      resolution:"1080p",
      codecs:"ac3 dual_audio h264"
    },
    {
      filename:"[Erai-raws] Dragon Ball Super - Broly [BD 1080p][AVC-YUV444P10][TrueHD].mkv",
      subber:"Erai-raws",
      name:"Dragon Ball Super - Broly",
      source:"bluray",
      resolution:"1080p",
      codecs:"avc true_hd yuv444p10",
      extension:"mkv",
    },
    {
      filename:"[NoobSubs] Yakusoku no Neverland 01-12 (720p 8bit AAC MP4)",
      subber:"NoobSubs",
      name:"Yakusoku no Neverland",
      episode:"1-12",
      resolution:"720p",
      codecs:"8bit aac",
      extension:"mp4",
    },
    {
      filename:"[Erai-raws] Yakusoku no Neverland - 01 ~ 12 [1080p][Multiple Subtitle]",
      subber:"Erai-raws",
      name:"Yakusoku no Neverland",
      episode:"1-12",
      resolution:"1080p",
      subtitles:"multi",
    },
    {
      filename:"[Erai-raws] Yakusoku no Neverland - 12 END [720p][Multiple Subtitle].mkv",
      subber:"Erai-raws",
      name:"Yakusoku no Neverland",
      episode:"12",
      resolution:"720p",
      subtitles:"multi",
      extension:"mkv",
    },
    {
      filename:"[NoobSubs] Berserk 2017 13-24 (1080p 8bit AAC MP4)",
      subber:"NoobSubs",
      name:"Berserk 2017",
      episode:"13-24",
      resolution:"1080p",
      codecs:"8bit aac",
      extension:"mp4",
    },
    {
      filename:"[Hi10] Berserk (2016) [BD 1080p]",
      subber:"Hi10",
      name:"Berserk (2016)",
      source:"bluray",
      resolution:"1080p",
    },
    {
      filename:"[Erai-raws] Berserk 2017 - 12 [v2][END][720p][Multiple Subtitle][10A073DC].mkv",
      subber:"Erai-raws",
      name:"Berserk 2017",
      episode:"12",
      resolution:"720p",
      subtitles:"multi",
      hash:"10A073DC",
      extension:"mkv",
      meta:"v2",
    },
    {
      filename:"[HorribleSubs] Berserk - 23 [480p].mkv",
      subber:"HorribleSubs",
      name:"Berserk",
      episode:"23",
      resolution:"480p",
      extension:"mkv",
    },
    {
      filename:"[Hi10] Kateikyoushi Hitman Reborn [DVD 576p]",
      subber:"Hi10",
      name:"Kateikyoushi Hitman Reborn",
      source:"dvd",
      resolution:"576p",
    },
    {
      filename:"[chuu] Katekyo Hitman Reborn! - 03 [DVD][712x480 H264 AC3][F7BCA158].mkv",
      name:"Katekyo Hitman Reborn!",
      subber:"chuu",
      episode:"3",
      source:"dvd",
      codecs:"ac3 h264",
      extension:"mkv",
      hash:"F7BCA158",
    },
    {
      filename:"[SG] Hitman Reborn 187 [480p] [8A5256BE].mkv",
      subber:"SG",
      name:"Hitman Reborn",
      resolution:"480p",
      hash:"8A5256BE",
      extension:"mkv",
      episode:"187",
    },
    {
      filename:"[Erai-raws] Tokyo Ghoul - re 2nd Season - 01 ~ 12 [1080p]",
      subber:"Erai-raws",
      name:"Tokyo Ghoul - re",
      season:"2",
      episode:"1-12",
      resolution:"1080p",
    },
    {
      filename:"[Erai-raws] Tokyo Ghoul - re 2nd Season - 12 END [720p].mkv",
      subber:"Erai-raws",
      name:"Tokyo Ghoul - re",
      season:"2",
      episode:"12",
      resolution:"720p",
      extension:"mkv",
    },
    {
      filename:"[HorribleSubs] Tokyo Ghoul re - 16 [720p].mkv",
      subber:"HorribleSubs",
      name:"Tokyo Ghoul re",
      episode:"16",
      resolution:"720p",
      extension:"mkv",
    },
    {
      filename:"One.Piece.Vol49-80.SAGA.WATER.SEVEN.Multi.Dvdrip.x264-MANGACITY",
      name:"One Piece SAGA WATER SEVEN",
      episode:"49-80",
      audio:"multi",
      source:"dvd",
      codecs:"x264",
      subber:"MANGACITY",
    },
    {
      filename:"One Piece - Saison 17 - French HD 720p x264 - JMK",
      name:"One Piece",
      season:"17",
      audio:"fr",
      resolution:"720p",
      codecs:"x264",
      subber:"JMK",
    },
    {
      filename:"One Piece S17 Vostfr (TV-Rip 1280x720 x264 AAC) Kaerizaki-Fansub",
      name:"One Piece",
      season:"17",
      audio:"vo",
      subtitles:"fr",
      source:"tvrip",
      resolution:"720p",
      codecs:"aac x264",
      subber:"Kaerizaki-Fansub",
    },
    {
      filename:"[DragsterPS] The End of Evangelion + Evangelion - Death (True)² [1080p WEB-DL] [Multi-Audio] [Multi-Subs]",
      name:"The End of Evangelion + Evangelion - Death (True)²",
      subber:"DragsterPS",
      resolution:"1080p",
      source:"webdl",
      audio:"multi",
      subtitles:"multi",
    },
    {
      filename:"Neon Genesis Evangelion HEVC [BDRip.VOSTFR.1080p.x265.DD5.1.AAC]-YOMI",
      name:"Neon Genesis Evangelion",
      subber:"YOMI",
      source:"bluray",
      audio:"vo",
      subtitles:"fr",
      resolution:"1080p",
      codecs:"aac audio_5_1 hevc x265",
    },
    {
      filename:"Evangelion 1.11 You Are (Not) Alone 2007 Multi 1080p Blu-ray Remux AVC DTS-HD MA 6.1 VFF 5.1 H264 [Team246]",
      name:"Evangelion 1.11 You Are (Not) Alone 2007",
      resolution:"1080p",
      source:"bluray",
      meta:"remux",
      codecs:"audio_5_1 avc dts_hdma h264",
      audio:"fr multi",
      subber:"Team246",
    },
    {
      filename:"Evangelion - 1.11 You Are (Not) Alone (2007) MULTi 1080p 10bits BluRay x265 AAC 5.1 -Punisher694",
      name:"Evangelion - 1.11 You Are (Not) Alone (2007)",
      audio:"multi",
      resolution:"1080p",
      codecs:"10bit aac audio_5_1 x265",
      source:"bluray",
      subber:"Punisher694",
    },
    {
      filename:"Death.Parade.1080p.COMPLETE.BluRay.Coffret.Multi-DragonMax",
      name:"Death Parade",
      resolution:"1080p",
      meta:"complete pack",
      source:"bluray",
      subber:"DragonMax",
      audio:"multi",
    },
    {
      filename:"Death Parade S01 (2015) + Death Billiards MULTi 1080p 10bits BluRay x265 AAC v2 -Punisher694",
      name:"Death Parade (2015) + Death Billiards",
      audio:"multi",
      season:"1",
      resolution:"1080p",
      source:"bluray",
      codecs:"10bit aac x265",
      subber:"Punisher694",
      meta:"v2",
    },
    {
      filename:"11 Films Naruto + Naruto Shippuden + Boruto - MULTI (VF + VOSTFR)",
      name:"11 Films Naruto + Naruto Shippuden + Boruto",
      audio:"fr multi vo",
      subtitles:"fr",
    },
    {
      filename:"Naruto.SD.Rock.Lee.no.Seishun.Full-Power.Ninden.S01.FRENCH.DVDRiP.x264-Kazelle",
      name:"Naruto SD Rock Lee no Seishun Full-Power Ninden",
      season:"1",
      audio:"fr",
      source:"dvd",
      codecs:"x264",
      subber:"Kazelle"
    },
    {
      filename:"[Fansub Resistance] Naruto Shippuden Saison 18 [H264- 720p HD] VOSTFR HQ",
      subber:"Fansub Resistance",
      name:"Naruto Shippuden",
      season:"18",
      codecs:"h264",
      resolution:"720p",
      audio:"vo",
      subtitles:"fr",
      meta:"high_quality",
    }
  ].forEach(tester)


