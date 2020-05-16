//Dependancies
  const {default:ATNP} = require(require("path").join(__dirname, "../..", "dist/ATNP"))

//Tests
  ;[
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
      name:"Ghost in the Shell SAC_2045",
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
      name:"Psycho-Pass 3 First Inspector",
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
      name:"PSYCHO-PASS 3 FIRST INSPECTOR (2020) (PSYCHO-PASS サイコパス / 心靈判官 / 心理測量者)",
      distributor:"amazon",
      resolution:"1080p",
      subtitles:"multi",
      codecs:"aac avc",
      source:"webdl",
    },
    {
      filename:"[RLSP] One Piece - Dressrosa 629-746",
      subber:"RLSP",
      name:"One Piece Dressrosa",
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
      subber:"JpU No oficial",
      name:"Serial Experiments Lain",
    },
    {
      filename:"Serial Experiments Lain (1998) 1080p.H264.Ac3.Ita.Flac.Jap.Eng.Sub.Ita.Eng [v2] [21GB] [stress]",
      subber:"stress",
      name:"Serial Experiments Lain (1998)",
      resolution:"1080p",
      codecs:"ac3 flac h264",
      audio:"en ita jp",
      subtitles:"en ita"
    },
    {
      filename:"[Reaktor] From the New World - Shinsekai Yori [1080p][BD][x265][10-bit][Dual-Audio]",
      subber:"Reaktor",
      name:"From the New World Shinsekai Yori",
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
      part:"1-9",
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
      name:"Fullmetal Alchemist Brotherhood Star Of Milos",
      hash:"01A4B7E9",
      source:"bluray",
      resolution:"720p",
      subber:"Legendado",
    },
    {
      filename:"[BDRip1080p.x264.AC3.ITA.ENG.JAP.].Fullmetal.Alchemist.Brotherhood + OAV Bluray RIP",
      name:"Fullmetal Alchemist Brotherhood + OAV",
      audio: "en ita jp",
      source:"bluray",
      resolution:"1080p",
      codecs:"ac3 x264",
    },
  /*  {
      filename:"[UQW] Fullmetal Alchemist: Brotherhood [BD 1080p AVC-YUV420P10 FLAC]",
    },
    {
      filename:"Fullmetal Alchemist Brotherhood + OVAs + Specials [ShadyCrab 1080p 8bit AAC] [Dual Audio]",
    },
    {
      filename:"[Xspitfire911] Fullmetal Alchemist Brotherhood + OAV BDRIP 1080p X265 10bit Vostfr",
    }*/
  ].forEach(testable => {
    //Tester
      const tester = () => expect(ATNP.parse(testable.filename)).toEqual(testable)
      console.debug = () => null
    //Apply test (only)
      if (testable.only) {
        delete testable.only
        test.only(testable.filename, tester)
      }
    //Apply test
      else
        test(testable.filename, tester)
  })
