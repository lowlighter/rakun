//Dependancies
  const tester = require(require("path").join(__dirname, "..", "tester"))

//Tests
  ;[
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
      codecs:"ac3 avc",
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
      name:"Highschool Of The Dead + OVA",
      extension:"mkv",
      resolution:"1080p",
      source:"bluray",
      meta:"complete high_quality v2",
      codecs:"dual_audio",
    },
    {
      filename:"[anime4life.] High School Of The Dead 1-12+OVA Complete (BD1080p AC3 10bit) [x265_HEVC] Dual Audio",
      subber:"anime4life",
      name:"High School Of The Dead",
      episode:"1-12",
      meta:"complete",
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
    }
  ].forEach(tester)


