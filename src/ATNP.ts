//Imports
  import * as regexs from "./regexs/_"

/** 
 * Anime Torrent Name Parser.
 */
  export default abstract class Parser {

    /** Regexs. */
      private static readonly regex = regexs

    /** Test a collection of regex on a value and return all matching regex with its captured groups. */
      private static test({value, collection, get = "key"}:{value:string, collection:RegExp[], get?:"key"|"value"}):{length:number, results:any[][], regexs:RegExp[]} {
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
      private static clean({value, removes = []}:{value:string, removes?:RegExp[]}):string {
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
            {key:"episode", collection:regex.serie.episode.range, get:"value", clean:false, mode:"skip"},
            {key:"episode", collection:regex.serie.episode.single, get:"value", clean:false, mode:"skip"},
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

        //Post-processing
          //Post-processing for season, episode and part 
            for (let key of ["season", "episode", "part"]) {
              //Remove leading zeros
                //Detect ranges
                  let value = result[key]
                  if (regex.processors.post.serie.range.test(value))
                    result[key] = value.split(" ").map(Number).join("-")
                //Detect single 
                  else if (regex.processors.post.serie.single.test(value))
                    result[key] = Number(value).toString()
            }

        //Register name
          result.name = cleaned

        //Clean all properties (except filename)
          for (let [key, value] of Object.entries(result))
            result[key] = (value === result.filename) ? value : this.clean({value, removes})
        
        return result as TorrentInfos
      }

  }
