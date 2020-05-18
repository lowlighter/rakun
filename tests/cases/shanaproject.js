//Dependancies
  const tester = require(require("path").join(__dirname, "..", "tester"))

//Tests
  ;[
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
      codecs:"avc true_hd",
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
    }
  ].forEach(tester)