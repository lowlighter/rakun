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
            results:matches.map(({match}) => [...Object.entries(match)].filter(([key, value]) => value).map(([key, value]) => get === "key" ? key.replace(/^_/, "") : value)),
            regexs:matches.map(({regex}) => regex),
          }
      }

    /** Clean string with given regex, apply cleaners and trim. */
      private static clean({value, removes = [], empty = {}}:{value:string, removes?:RegExp[], empty?:{parenthesis?:boolean}}):string {
        //Preparation
          const {parenthesis = true} = empty
        //Apply removals
          for (let remove of [...removes, ...this.regex.cleaners.global, ...(parenthesis ? this.regex.cleaners.special.empty.parenthesis : [])])
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
            {key:"distributor", collection:regex.quality.distributor},
            {key:"meta", collection:regex.meta.data},
            {key:"audio", collection:regex.lang.audio, clean:false},
            {key:"subtitles", collection:regex.lang.subtitles},
            {key:"subber", collection:regex.meta.subber, get:"value", mode:"skip"},
            {key:"movie", collection:regex.serie.movie, get:"value", mode:"skip"},
            {key:"part", collection:regex.serie.part, get:"value", mode:"skip"},
            {key:"season", collection:regex.serie.season, get:"value", clean:false, mode:"skip"},
            {key:"episode", collection:regex.serie.episode.range, get:"value", clean:false, mode:"skip"},
            {key:"episode", collection:regex.serie.episode.single, get:"value", clean:false, mode:"skip"},
            {cleaners:regex.cleaners.misc},
          ] as unknown as {key?:string, collection?:RegExp[], get?:"key"|"value", mode?:"append"|"replace"|"skip", clean?:boolean, cleaners?:RegExp[]}[]) {
            //Parse key
              if (key) {
                //Search for matches
                  console.debug(`${key} > process`)
                  const matches = this.test({collection, value:cleaned, get})
                  if (matches.length) {
                    //Retrieve group names (or values) and remove leading underscore
                      console.debug(`${key} > process > ${matches.length} regex matches`)
                      const {[key]:previous = ""} = result
                    //Evaluate mode
                      console.debug(`${key} > process > mode ${mode}`)
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
                            console.debug(`${key} > process > mode skip > value already defined, skipping`)
                            continue
                          }
                          result[key] = matches.results[0].join(" ")
                          break
                        }
                      }
                      console.debug(`${key} > process > previous value = ${previous||"(none)"}`)
                      console.debug(`${key} > process > current value = ${result[key]}`)
                    //Put matching regex in queue for removal
                      removes.push(...matches.regexs)
                  }
                //Fill with null if no match and option is enabled
                  else {
                    console.debug(`${key} > process > no matches`)
                    if (nulls)
                      result[key] = null
                  }
              }
            //Clean if needed
              if (clean) {
                cleaned = this.clean({value:cleaned, removes:[...removes, ...cleaners]})
                console.debug(`${key||"(meta)"} > process > cleaned value = ${cleaned}`)
                removes.splice(0)
              }
          }

        //Register name
          result.name = cleaned
          console.debug(`name > process > current value = ${cleaned}`)

        //Post-processing
          //Post-processing for season, episode and part 
            for (let key of ["movie", "season", "episode", "part"]) {
              //Remove leading zeros
                let value = result[key]
                if (value) {
                  //Detect ranges
                    if (regex.processors.post.serie.range.test(value))
                      value = value.split(" ").map(Number).join("-")
                  //Detect single 
                    else if (regex.processors.post.serie.single.test(value))
                      value = Number(value).toString()
                  console.debug(`${key} > post-process > current value = ${value}`)
                  result[key] = value
                }
            }
          //Post-processing for name
            {
              //Reverse string (to start removing stuff from end)
                let value = [...result.name].reverse().map(c => { return ({"[":"]", "]":"["} as loose)[c]||c }).join("")
              //Remove unparsable attributes
                while (regex.cleaners.special.unparsable.test(value)) {
                  //Edge case : title is in brackets 
                    if (regex.cleaners.special.only_brackets.test(value)) {
                      value = value.match(regex.cleaners.special.only_brackets)?.groups?.name as string
                      break
                    }
                  //Remove unparsable brackets
                    console.debug(`name > post-process > found unparsable value ${value.match(regex.cleaners.special.unparsable)?.groups?.unparsable}`)
                    value = this.clean({value, removes:[regex.cleaners.special.unparsable], empty:{parenthesis:false}})   
                }
              //Re-reverse string
                value = [...value].reverse().join("")
              //Replace special characters with spaces if needed
                value = value.replace(regex.processors.post.name.special_to_space, " ")
              console.debug(`name > post-process > current value = ${value}`)
              result.name = value
            }

        //Clean all properties (except filename)
          for (let [key, value] of Object.entries(result)) {
            result[key] = (value === result.filename) ? value : this.clean({value, removes})
            //Delete property if empty
              if (!result[key]) {
                console.debug(`${key} > post-process > deleted because empty`)
                if (nulls)
                  result[key] = null
                else
                  delete result[key]
              }
          }
        
        return result as TorrentInfos
      }

  }
