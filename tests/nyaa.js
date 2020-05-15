//Dependancies
  const {default:ATNP} = require(require("path").join(__dirname, "..", "dist/ATNP"))

//Tests
  ;[
    {
      filename:'[BlurayDesuYo] Shingeki no Kyojin (Season 3) - Batch (BD 1920x1080 10bit FLAC)',
      hash: null,
      extension: null,
      resolution: '1080p',
      quality: 'bluray',
      codec: '10bit flac',
      audio: null,
      meta: 'batch',
      subs: null,
      subber: 'BlurayDesuYo',
      season: "3",
      episodes: null,
      name: 'Shingeki no Kyojin',
      website: null,
    },
    {
      filename:'[ZetaRebel] Ghost in the Shell (1995) (BD x264 1080p 8-bit FLAC)',
      hash: null,
      extension: null,
      resolution: '1080p',
      quality: 'bluray',
      codec: '8bit flac x264',
      audio: null,
      meta: null,
      subs: null,
      subber: 'ZetaRebel',
      season: null,
      episodes: null,
      name: 'Ghost in the Shell (1995)',
      website: null,
    },
  ].forEach(testable => test(testable.filename, () => expect(ATNP.parse(testable.filename)).toEqual(testable)))
