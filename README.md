# 🦝 Rakun - An Anime torrent name parser

![Onee-chan](https://github.com/lowlighter/rakun/workflows/Onee-chan/badge.svg) ![Tests passed](https://badges.lecoq.io/rakun.tests)
![](https://img.shields.io/codacy/grade/114dbe0608b14b6a8e92163a6dffc9b4/master?labelColor=2F3338&link=https://app.codacy.com/manual/simon.lecoq/rakun)

A parser to extract informations and metadata from anime torrents filename.
With this, it'll be easier to script anime torrents related stuff !

## 💻 Usage

### ⏪ With the following code...

```typescript
import rakun from "rakun"
console.log(rakun.parse("[Team246] Ghost in the shell Stand alone complex S01 E10-E15 [BDREMUX 1080P MULTi DTSHDMA 5.1][VOSTFR]"))
```

### ⏩ You'll get the following output :

```typescript
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
}
```

### 📊 What's rakun performances ?

We try to gather a lot of different torrents name format from all over the net to make **rakun** more efficient and reliable.
You can check [tests cases](https://github.com/lowlighter/rakun/tree/master/tests/cases) to see what kind of formatting is currently supported.

Below is an excerpt of tests cases which may help you to check **rakun**'s capabilities :
```text
- [Leopard-Raws] Shingeki no Kyojin Season 3 Part.2 - 09 END RAW (NHKG 1280x720 x264 AAC).mp4
- [Team246] Ghost in the shell Stand alone complex S01 E10-E15 [BDREMUX 1080P MULTi DTSHDMA 5.1][VOSTFR]
- [U3-Web] PSYCHO-PASS 3 - FIRST INSPECTOR (2020) [Movie][AMZN WEB-DL(v) 1080p AVC AAC DDP SRT][Multi-Subs] (PSYCHO-PASS サイコパス / 心靈判官 / 心理測量者)
- [Kaerizaki-Fansub]_One-Piece_Stampede_Film_14_[VERSION-LIGHT][VOSTFR][BLU-RAY][FHD_1920x1080].mp4
- Serial Experiments Lain (1998) 1080p.H264.Ac3.Ita.Flac.Jap.Eng.Sub.Ita.Eng [v2] [21GB] [stress]
- [T.H.X&A.I.R.nesSub][Shinsekai_Yori][BDRIP][Vol.1-9全][1920x1080_10bpp][AVC_FLAC][MKV]
- [BDRip1080p.x264.AC3.ITA.ENG.JAP.].Fullmetal.Alchemist.Brotherhood + OAV Bluray RIP
- [AnimeRG] Spirited Away (2001) (Sen to Chihiro no Kamikakushi) [720p BD 10bit] [Dual Audio] [Multi-Language Subtitles] [JRR] [Studio Ghibli].mkv
- Death Note 1-37 [480p] [EN SUB]
- Dragon.Ball.Z.Movie.14.Battle.of.Gods.2013.EXTENDED.DUAL.AUDiO.SUB.PL.1080p.BluRay.REMUX.AVC.TrueHD.5.1-SeBoLeX
- [Erai-raws] Berserk 2017 - 12 [v2][END][720p][Multiple Subtitle][10A073DC].mkv
- [BDMV] Made in Abyss / メイドインアビス [BD-BOX I+II][JP]
- Naruto.SD.Rock.Lee.no.Seishun.Full-Power.Ninden.S01.FRENCH.DVDRiP.x264-Kazelle
- Evangelion 1.11 You Are (Not) Alone 2007 Multi 1080p Blu-ray Remux AVC DTS-HD MA 6.1 VFF 5.1 H264 [Team246]
```

### 📑 Extracted informations

Below is the descriptor of the possible extreacted torrent informations.
Multiple values properties (codecs, audio, subtitles, etc.) are sorted to keep consistancy.

```typescript
/** Torrent informations. */
  interface TorrentInfos {
    //Original filename
      readonly filename:string
    //Cleaned name
      readonly name:string
    //Hash
      readonly hash?:string
    //File extension
      readonly extension?:string
    //Resolution
      readonly resolution?:string
    //Source (Bluray, DVD, etc.)
      readonly source?:string
    //Codecs
      readonly codecs?:string
    //Audio language
      readonly audio?:string
    //Subtitles language
      readonly subtitles?:string
    //Subber group (or translation group)
      readonly subber?:string
    //Website of subber
      readonly website?:string
    //Content producer/distributor
      readonly distributor?:string
    //Torrent other metadata (remux, repack, etc.)
      readonly meta?:string
    //Movie
      readonly movie?:string
    //Season
      readonly season?:string
    //Part
      readonly part?:string
    //Episode (or episode range)
      readonly episode?:string
  }
```

## 🔧 Under the hood

### 🧬 ATNP's logic

Parsing follows the following workflow :
* An input `filename` is given, with possible parser `options`
* Pre-processors are executed
* Main processor iterates through the [collection of regexs](https://github.com/lowlighter/rakun/tree/master/src/regexs) to extract informations from `filename`
  * At each iteration, extracted informations can be either removed from `filename` through [cleaners](https://github.com/lowlighter/rakun/blob/master/src/regexs/cleaners.ts) are applied to remove remnants, or keept for next iteration for closely related informations (like season, parts and episode)
* Post-processors are executed
* The remaining part of `filename` is considered as the cleaned title
* Extracted informations are returned

#### 📰 Additional informations

Regexs are ordered to match first what can be accurately extracted and removed early (like hash, extension, website, etc.) to ease the remaining extraction.

Except for cleaners and specials regexs, they should have named capture groups. (if capture group are needed). It allows easier understanding of regexs, but it is also the way that the parser register data. 

The main processor is a list of descriptors with the following properties :
```typescript
{
  key?:string,                      // Property to set (e.g. audio, episode, meta, etc..)
  collection?:RegExp[],             // Regex collection to use
  get?:"key"|"value",               // If "key", will return capture group's name ; if "value", will return capture group's value
  mode?:"append"|"replace"|"skip",  // If "append", add value (or create) to property ; if "replace", replace property ; if "skip", skip if property already defined
  clean?:boolean,                   // If true, cleaners will be applied at the end of the iteration
  cleaners?:RegExp[]                // Additional cleaners to apply
}
```

While the aim is to reach 100% accuracy, note that this objective is nearly impossible since there are too much outliers in naming conventions across various websites.

### 🏅 Code quality

To ensure a quality library, code is required to pass **Onee-chan**'s judgement and fulfill a parsing accuracy of at least **85%** of defined [test cases](https://github.com/lowlighter/rakun/tree/master/tests/cases).

Pull requests may not be merged if they do not reach this standard, unless they are adding revelant tests which may reveal missed matches in current builds. Although edges cases should be integrated to challenge **rakun**, simpler cases should also be added to not biases **Onee-chan**'s evaluation.

### 💪 Contributing

Want to contribute ? Sugoï ! Here what you can help with :

#### Open a pull request to
  - Add new features for [rakun](https://github.com/lowlighter/rakun/tree/master/src)
  - Complete [regexs collection](https://github.com/lowlighter/rakun/tree/master/src/regexs)
  - Define new [tests cases](https://github.com/lowlighter/rakun/tree/master/tests/cases)

#### Open an issue to
  - Reports bugs or unsupported format that should be
  - Ask help

### 🧾 License

**rakun** is licensed under the [MIT License](https://github.com/lowlighter/rakun/blob/master/LICENSE).




