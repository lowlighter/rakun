//Dependancies
  const {default:ATNP} = require(require("path").join(__dirname, "../..", "dist/ATNP"))

//Tests
  ;[
    {
      filename:'[BlurayDesuYo] Shingeki no Kyojin (Season 3) - Batch (BD 1920x1080 10bit FLAC)',
      subber: 'BlurayDesuYo',
      name: 'Shingeki no Kyojin',
      season: "3",
      meta: 'batch',
      quality: 'bluray',
      resolution: '1080p',
      codecs: '10bit flac',
    },
    {
      filename:'[ZetaRebel] Ghost in the Shell (1995) (BD x264 1080p 8-bit FLAC)',
      subber: 'ZetaRebel',
      name: 'Ghost in the Shell (1995)',
      quality: 'bluray',
      codecs: '8bit flac x264',
      resolution: '1080p',
    },
  ].forEach(testable => test(testable.filename, () => expect(ATNP.parse(testable.filename)).toEqual(testable)))
