//Dependancies
const {default:ATNP} = require(require("path").join(__dirname, "../..", "dist/ATNP"))

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
      name:"Dragon.Ball.Z.Movie.14.Battle.of.Gods.2013.",
      source:"bluray",
      meta:"extended remux",
      codecs:"audio_5_1 avc dual_audio true_hd",
      resolution:"1080p",
      subber:"SeBoLeX",
    },
    {
      filename:"[USS] Dragon Ball Z - Resurrection F ⁄ Fukkatsu no F (2015) (Dual Audio) [BD 1080p H264 AC3]",
      subber:"USS",
      name:"Dragon Ball Z Resurrection F ⁄ Fukkatsu no F (2015)",
      source:"bluray",
      resolution:"1080p",
      codecs:"ac3 dual_audio h264"
    },
    {
      filename:"[Erai-raws] Dragon Ball Super - Broly [BD 1080p][AVC-YUV444P10][TrueHD].mkv",
      subber:"Erai-raws",
      name:"Dragon Ball Super Broly",
      source:"bluray",
      resolution:"1080p",
      codecs:"avc true_hd",
      extension:"mkv",
    }
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
        test.only(testable.filename, tester)
  })