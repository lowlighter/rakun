/** 
 * Anime Torrent Name Parser.
 */
  export default class Parser {

    /** Regexs. */
      static readonly regex = {

        //Cleaners
          cleaners:{
            //Global cleaners (always executed at cleaning)
              global:[
                //Multiples spaces
                  /\s{2,}/,
                //Empty parenthesis or brackets
                  /[\(\[]\s*[\)\]]/,
                //Isolated characters
                  / [-_.] /,
              ],
            //Miscelleanous cleaners
              misc:[
                /\bNHKG\b/,
              ]
          },

        //File metadata
          file:{
            //Extension
              extension:[
                /(?<mkv>[.]mkv$)/,
                /(?<mkv>\b\[MKV\]\b)/,
                /(?<mp4>[.]mp4$)/,
                /(?<mp4>\bMP4\b)/,
                /(?<_7z>[.]7z$)/,
              ],
            //Hash
              hash:[
                /[\[\()](?<hash>[A-F0-9]{8})[\]\)]/,
              ],
          },
        
        //Quality
          quality:{
            //Sources
              source:[
                /(?<webdl>\bWEB[-_. ]?DL\b)/,
                /(?<webdl>\bWEBRIP\b)/, 
                /(?<webdl>\bWEBHD\b)/,
                /(?<dvd>\bDVD\b)/,
                /(?<dvd>\bDVDRIP\b)/,
                /(?<dvd>\bNTSC\b)/,
                /(?<dvd>\bPAL\b)/,
                /(?<dvd>\bXVIDDVD\b)/,
                /(?<bluray>\bBLU-?RAY\b)/,                  
                /(?<bluray>\bHD-?DVD\b)/,               
                /(?<bluray>\bBD\d{3,4}p\b)/,
                /(?<bluray>BD(?=REMUX))/,            
                /(?<bluray>\bBD\b)/,      
                /(?<dsr>\bWS[-_. ]DSR\b)/,
                /(?<dsr>\bDSR\b)/,
                /(?<hdtv>\bHDTV\b)/,
                /(?<bdrip>\bBDRIP\b)/,
                /(?<brrip>\bBRRIP\b)/,
                /(?<pdtv>\bPDTV\b)/,
                /(?<sdtv>\bSDTV\b)/,
                /(?<tvrip>\bTVRIP\b)/,
                /(?<camrip>\bCAM[-_. ]?RIP\b)/,
                /(?<raw>\bRAW\b)/,
              ],
            //Resolutions
              resolution:[
                /(?<_1080p>\b1080[Pp]\b)/,
                /(?<_1080p>1920x1080)/,
                /(?<_720p>\b720[Pp]\b)/,
                /(?<_720p>1280x720)/,
                /(?<_480p>\b480[Pp]\b)/,
                /(?<_480p>640x480)/,
                /(?<_480p>848x480)/,
                /(?<_576p>\b576[Pp]\b)/,
                /(?<_2160p>\b2160[Pp]\b)/,
              ],
            //Codecs
              codecs:[
                /(?<x264>\bx264\b)/,
                /(?<h264>\bh264\b)/,
                /(?<x265>\bx265\b)/,
                /(?<h265>\bh265\b)/,
                /(?<xvidhd>\bXVIDHD\b)/,
                /(?<divx>\bdivx\b)/,
                /(?<aac>\bAAC\b)/,
                /[-_. ]?(?<flac>FLAC)[-_. ]?/,
                /(?<_10bit>\b10-?bits?\b)/,
                /(?<_8bit>\b8-?bits?\b)/,
                /(?<hevc>\bhevc\b)/,
                /(?<dual_audio>\bDual[- ]Audio\b)/,
                /(?<dts_hdma>\bDTSHDMA\b)/,
                /(?<avc>\bAVC\b)/,
                /(?<audio_5_1>\b5\.1\b)/,
              ],
          },

        //Meta
          meta:{
            //Subber, translation groups
              subber:[
                /^\[(?<subber>[^[]+)\]/,
              ],
            //Metadata
              data:[
                /(?<batch>\bBatch\b)/,
                /(?<remux>\bREMUX\b)/,
              ],
            //Website
              website:[

              ],
          },

        //Language
          lang:{
            //Audio
              audio:[
                /(?<vo>\bVOSTFR\b)/,
                /(?<jp>\b[Jj]apanese [Aa]udio\b)/,
                /(?<multi>\bMULTI\b|\bMULTi\b)/,
              ],
            //Subtitles
              subtitles:[
                /(?<fr>\bVOSTFR\b)/,
                /(?<en>\bEnglish subs?\b)/,
                /(?<multi>\b[Mm]ulti[-_. ][Ss]ubs?\b)/,
              ]
          },

        //Serie
          serie:{
            //Season
              season:[
                /\b[\(\[)]?[Ss]eason (?<season>\d+)[\)\]]?\b/,
                /\bS(?<season>\d+)\b/,
              ],
            //Part
              part:[
                /\b[Pp]art[-._ ](?<part>\d)\b/,
              ],
            //Episode
              episode:[
                /\b(?<episode>0\d)\s+END\b/,
                /\b(?<episode>0\d)\b/,
              ],
          }
      
      } as const

    /** Test a collection of regex on a value and return all matching regex with its captured groups. */
      static test({value, collection, get = "key"}:{value:string, collection:RegExp[], get?:"key"|"value"}):{length:number, results:any[][], regexs:RegExp[]} {
        //Evaluate regex from collection and filter matching ones
          const matches = collection
            .map(regex => regex.test(value) ? {match:value.match(regex)?.groups, regex} : null)
            .filter((value):value is  {match:loose, regex:RegExp} => !!value)
        //Groups results and regexs
          return {
            length:matches.length,
            results:matches.map(({match}) => [...Object.entries(match)].filter(([key, value]) => value).map(([key, value]) => get === "key" ? key.replace(/^_/, "") : value)).sort(),
            regexs:matches.map(({regex}) => regex),
          }
      }

    /** Clean string with given regex, apply cleaners and trim. */
      static clean({value, removes = []}:{value:string, removes?:RegExp[]}):string {
        for (let remove of [...removes, ...this.regex.cleaners.global])
          value = value.replace(remove, " ")
        return value.trim()
      }

    /** Parse filename. */
      static parse(filename:string, {nulls = false}:{nulls?:boolean} = {}) {

        //Preparation
          const result = {filename:filename.trim()} as loose
          const removes = []
          const {regex} = this
          let cleaned = filename.trim()

        //Apply parsing
          for (let {key = "", collection = [], get = "key", mode = "append", clean = true, cleaners = []} of [
            {key:"hash", collection:regex.file.hash, get:"value"},
            {key:"website", collection:regex.meta.website, get:"value"},
            {key:"extension", collection:regex.file.extension},
            {key:"resolution", collection:regex.quality.resolution},
            {key:"codecs", collection:regex.quality.codecs},
            {key:"source", collection:regex.quality.source},
            {key:"meta", collection:regex.meta.data},
            {key:"audio", collection:regex.lang.audio, clean:false},
            {key:"subtitles", collection:regex.lang.subtitles},
            {key:"subber", collection:regex.meta.subber, get:"value"},
            {key:"season", collection:regex.serie.season, get:"value", clean:false, mode:"skip"},
            {key:"part", collection:regex.serie.part, get:"value", clean:false, mode:"skip"},
            {key:"episode", collection:regex.serie.episode, get:"value", clean:false, mode:"skip"},
            {cleaners:regex.cleaners.misc},
          ] as unknown as {key?:string, collection?:RegExp[], get?:"key"|"value", mode?:"append"|"replace"|"skip", clean?:boolean, cleaners?:RegExp[]}[]) {
            //Parse key
              if (key) {
                //Search for matches
                  console.debug(`${key} : process`)
                  const matches = this.test({collection, value:cleaned, get})
                  if (matches.length) {
                    //Retrieve group names (or values) and remove leading underscore
                      console.debug(`${key} : ${matches.length} regex matches`)
                      const {[key]:previous = ""} = result
                    //Evaluate mode
                      console.debug(`${key} : mode ${mode}`)
                      switch (mode) {
                        case "append":{
                          result[key] = [...new Set([...previous.split(" "), ...matches.results.flat()].sort())].join(" ")
                          break
                        }
                        case "replace":{
                          result[key] = [...new Set(matches.results.flat())].join(" ")
                          break
                        }
                        case "skip":{
                          if (result[key]) {
                            console.debug(`${key} : already defined, skipping`)
                            continue
                          }
                          result[key] = matches.results[0].join(" ")
                          break
                        }
                      }
                      console.debug(`${key} : previous value = ${previous||"(none)"}`)
                      console.debug(`${key} : current value = ${result[key]}`)
                    //Put matching regex in queue for removal
                      removes.push(...matches.regexs)
                  }
                //Fill with null if no match and option is enabled
                  else {
                    console.debug(`${key} : no matches`)
                    if (nulls)
                      result[key] = null
                  }
              }
            //Clean if needed
              if (clean) {
                cleaned = this.clean({value:cleaned, removes:[...removes, ...cleaners]})
                console.debug(`${key} : cleaned value = ${cleaned}`)
                removes.splice(0)
              }
          }


          console.log(result)

        //Post-processing
          //Clean leading zeros from season, episode and part 
            for (let key of ["season", "episode", "part"])
              if (result[key])
                result[key] = Number(result[key]).toString()

        //Register name
          result.name = cleaned

        //Clean all properties (except filename)
          for (let [key, value] of Object.entries(result))
            result[key] = (value === result.filename) ? value : this.clean({value, removes})
        
        return result as TorrentInfos
      }

  }
