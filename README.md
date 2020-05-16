# 🦝 Rakun - An Anime torrent name parser

![Onee-chan](https://github.com/lowlighter/rakun/workflows/Onee-chan/badge.svg)

A parser to extract informations and metadata from an anime torrent filename.
With this, it'll be easier to script anime torrent related stuff !

## 💻 Usage

#### ⏪ With the following code...

```typescript
import ATNP from "ATNP"
console.log(ATNP.parse("[Team246] Ghost in the shell Stand alone complex S01 E10-E15 [BDREMUX 1080P MULTi DTSHDMA 5.1][VOSTFR]"))
```

#### ⏩ You'll get the following output :

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

#### 📊 What's rakun performances ?

We try to gather a lot of different torrent name formats from all over the net to make **rakun** more efficient.
You can check [tests cases](https://github.com/lowlighter/rakun/tree/master/tests/cases) to see what kind of formatting is supported.

Below is an excerpt of test outputs :
```
//Passing
  √ [Leopard-Raws] Shingeki no Kyojin Season 3 Part.2 - 09 END RAW (NHKG 1280x720 x264 AAC).mp4 
  √ [Team246] Ghost in the shell Stand alone complex S01 E10-E15 [BDREMUX 1080P MULTi DTSHDMA 5.1][VOSTFR] 
  √ [U3-Web] PSYCHO-PASS 3 - FIRST INSPECTOR (2020) [Movie][AMZN WEB-DL(v) 1080p AVC AAC DDP SRT][Multi-Subs] (PSYCHO-PASS サイコパス / 心靈判官 / 心理測量者)
  √ [Kaerizaki-Fansub]_One-Piece_Stampede_Film_14_[VERSION-LIGHT][VOSTFR][BLU-RAY][FHD_1920x1080].mp4
  √ Serial Experiments Lain (1998) 1080p.H264.Ac3.Ita.Flac.Jap.Eng.Sub.Ita.Eng [v2] [21GB] [stress] 
  √ [Reaktor] From the New World - Shinsekai Yori [1080p][BD][x265][10-bit][Dual-Audio]
  √ [T.H.X&A.I.R.nesSub][Shinsekai_Yori][BDRIP][Vol.1-9全][1920x1080_10bpp][AVC_FLAC][MKV]
  √ [BDRip1080p.x264.AC3.ITA.ENG.JAP.].Fullmetal.Alchemist.Brotherhood + OAV Bluray RIP 
  √ [AnimeRG] Spirited Away (2001) (Sen to Chihiro no Kamikakushi) [720p BD 10bit] [Dual Audio] [Multi-Language Subtitles] [JRR] [Studio Ghibli].mkv
  √ Death Note 1-37 [480p] [EN SUB]

//Failing
  × Fullmetal Alchemist Brotherhood + OVAs + Specials [ShadyCrab 1080p 8bit AAC] [Dual Audio]
  × Bleach Movie 01 - Memories of Nobody [H264 1080p DTS Ita Eng Jap SUB Ita Eng] [Rady]
  × [千与千寻].Spirited.Away.2001.BluRay.1080p.DTS-HD.MA.6.1.x265.10bit-BeiTai&NetFriend 
```

#### 📑 Extracted informations

Below is the descriptor of the possible extreacted torrent informations.
Multiples values properties (codecs, audio, subtitles, etc.) are always sorted to keep consistancy.

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
      readonly subtitles:string
    //Subber group (or translation group)
      readonly subber:string
    //Website of subber
      readonly website:string
    //Torrent other metadata (remux, repack, etc.)
      readonly meta:string
    //Season
      readonly season:string
    //Part
      readonly part:string
    //Episode (or episode range)
      readonly episode:string
  }
```

## 🔧 Under the hood

#### 🧬 ATNP's logic

Parsing follow the following workflow : 
  - An input `filename` is given
  - A loop iterates through the [collection of regexs](https://github.com/lowlighter/rakun/tree/master/src/regexs) to extract informations from given `filename`
  - At each iteration, extracted informations are removed from `filename` and [cleaners](https://github.com/lowlighter/rakun/blob/master/src/regexs/cleaners.ts) are applied to remove remnants
  - At the end of the loops, post-processors may be run for certains properties
  - Unmatched string in `filename` is considered as the cleaned title 
  - Extracted informations are returned
  
The main loop order is important, as it tries to match first what can be accurately extracted and removed early (like hash, extension, website, etc.) to ease the remaining extraction, whereas closely related informations (like season, parts and episode) may not be cleaned once matched to help successive extraction.

Note that however, it is impossible to successfully parse 100% of torrent filename, but ATNP wil try to keep a success rate of **90%**.

#### 🏅 Code quality

To ensure a quality library, code is required to pass **Onee-chan**'s judgement and fulfill a parsing accuracy of at least **90%** of defined [test cases](https://github.com/lowlighter/rakun/tree/master/tests/cases).

#### 💪 Contributing

Here what you can do to contribute to this repo :
  - With a pull request
    - Define new [tests cases](https://github.com/lowlighter/rakun/tree/master/tests/cases)
    - Complete [regexs collection](https://github.com/lowlighter/rakun/tree/master/src/regexs)
    - Add new features for [ATNP](https://github.com/lowlighter/rakun/tree/master/src)
  - With issues
    - Reports failed torrent informations extraction which should be supported





