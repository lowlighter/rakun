//Dependancies
  const tester = require(require("path").join(__dirname, "..", "tester"))

//Tests
  ;[
    {
      filename:"One.Piece.Vol49-80.SAGA.WATER.SEVEN.Multi.Dvdrip.x264-MANGACITY",
      name:"One Piece SAGA.WATER.SEVEN",
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
      audio:"fr",
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
    }
  ].forEach(tester)


