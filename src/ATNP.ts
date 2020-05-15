/** 
 * Anime Torrent Name Parser.
 */
  export default class Parser {

    /** Regexs. */
      static readonly regex = {

        //Cleaners
          cleaners:[
            //Multiples spaces
              /\s{2,}/i,
            //Empty parenthesis or brackets
              /[\(\[]\s*[\)\]]/,
            //Isolated characters
              / [-_.] /,
          ],

        //File metadata
          file:{
            extension:[
              /(?<mkv>[.]mkv$|\[MKV\])/i,
              /(?<mp4>[.]mp4$|MP4)/i,
              /(?<_7z>[.]7z$)/i,
            ],
            hash:[
              /[\[\()](?<hash>[A-F0-9]{8})[\]\)]/,
            ],
          },
        
        //Quality
          quality:[
            /\b(?<webdl>WEB[-_. ]?DL|WEBRIP|WEBHD|iTunesHD)\b/i,
            /\b(?<dvd>DVD|DVDRip|NTSC|PAL|xvidvd)\b/i,
            /\b(?<bluray>BLU-?RAY|HDDVD|BD|BD\d{3,4}p)\b/i,
            /\b(?<dsr>WS[-_. ]DSR|DSR)\b/i,
            /\b(?<hdtv>HDTV)\b/i,
            /\b(?<bdrip>BDRip)\b/i,
            /\b(?<brrip>BRRip)\b/i,
            /\b(?<pdtv>PDTV)\b/i,
            /\b(?<sdtv>SDTV)\b/i,
            /\b(?<tvrip>TVRip)\b/i,
            /\b(?<remux>BDREMUX)\b/i,
            /\b(?<camrip>CAM[-_. ]?Rip)\b/i,
          ],

        //Resolutions
          resolution:[
            /(?<_1080p>\b1080p\b|1920x1080)/i,
            /(?<_720p>\b720p\b|1280x720)/i,
            /(?<_480p>\b480p\b|640x480|848x480)/i,
            /(?<_576p>\b576p\b)/i,
            /(?<_2160p>\b2160p\b)/i,
          ],

        //Codecs
          codec:[
            /\b(?<x264>x264)\b/i,
            /\b(?<h264>h264)\b/i,
            /\b(?<x265>x265)\b/i,
            /\b(?<h265>h265)\b/i,
            /\b(?<xvidhd>XvidHD)\b/i,
            /\b(?<divx>divx)\b/i,
            /\b(?<aac>aac)\b/i,
            /\b[-_. ]?(?<flac>flac)[-_. ]?\b/i,
            /\b(?<_10bit>10-?bits?)\b/i,
            /\b(?<_8bit>8-?bits?)\b/i,
            /\b(?<hevc>hevc)\b/i,
            /\b(?<dual_audio>Dual[- ]Audio)\b/i,
            /\b(?<dts_hdma>DTSHDMA)\b/,
            /\[\s*\b(?<avc>AVC)\b\s*\]?/,
          ],

        //Language
          lang:{
            audio:[
              /\b(?<vo>VOSTFR)\b/i,
              /\b(?<jp>Japanese Audio)\b/,
            ],
            subs:[
              /\b(?<fr>VOSTFR)\b/i,
              /\b(?<en>English subs?)\b/i,
              /\b(?<multi>multi[-_. ]subs?|multi)\b/i,
            ]
          },

        //Meta
          meta:[
            /\b(?<batch>Batch)\b/i,
            /\b(?<v2>v2)\b/
          ],

        //Subber
          subber:[
            /^\[(?<subber>[^[]+)\]/i,
          ],

        //Season
          season:[
            /\bseason (?<season>\d+)\b/i,
            /\bS(?<season>\d+)\b/i,
          ],

        //Episode
          episode:[

          ],

        //Website
          website:[

          ],

      } as const

    /** Test a collection of regex on a value and return all matching regex with its captured groups. */
      static test({collection, value}:{collection:Array<RegExp>, value:string}):Array<match_result> {
        return collection.map(regex => regex.test(value) ? {match:value.match(regex)?.groups, regex} : null).filter((value):value is match_result => !!value)
      }

    /** Clean string with given regex, apply cleaners and trim. */
      static clean({cleaned, removes}:{cleaned:string, removes:Array<RegExp>}):string {
        for (let remove of [...removes, ...this.regex.cleaners])
          cleaned = cleaned.replace(remove, " ")
        return cleaned.trim()
      }

    /** Parse filename. */
      static parse(filename:string) {
        //Preparation
          const result = {filename:filename.trim()} as TorrentInfos
          const {regex} = this
          let cleaned = filename.trim()
        //Apply parsing
          for (let [property, {collection, get = "key"}] of [...Object.entries({
            hash:{collection:regex.file.hash, get:"value"},
            extension:{collection:regex.file.extension},
            resolution:{collection:regex.resolution},
            quality:{collection:regex.quality},
            codec:{collection:regex.codec},
            audio:{collection:regex.lang.audio},
            meta:{collection:regex.meta},
            subs:{collection:regex.lang.subs},
            subber:{collection:regex.subber, get:"value"},
            website:{collection:regex.website, get:"value"},
            season:{collection:regex.season, get:"value"},
            episodes:{collection:regex.episode, get:"value"},
          })] as unknown as Array<[string, {collection:Array<RegExp>, get?:"key"|"value"}]>) {
            const matches = this.test({collection, value:cleaned})
            if (matches.length) {
              (result as loose)[property] = matches.flatMap(({match}) => [...Object.entries(match)].filter(([key, value]) => value).map(([key, value]) => get === "key" ? key.replace(/^_/, "") : value)).sort().join(" ")
              cleaned = this.clean({cleaned, removes:matches.map(({regex}) => regex)})
            }
            else
              (result as loose)[property] = null
          }
        //Register name
          ;(result as loose).name = cleaned
        return result
      }

  }
