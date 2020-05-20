//Imports
  import * as Regexs from "./regexs/_"

/**
 * Anime Torrent Name Parser.
 */
  export default abstract class Parser {

    /** Regexs. */
      private static readonly regexs = Regexs

    /** Test a collection of regex on a value and return all matching regex with its captured groups. */
      private static test({value, collection, get = "key"}:{value:string, collection:RegExp[], get?:"key"|"value"}):{length:number, results:any[][], regexs:RegExp[]} {
        //Evaluate regex from collection and filter matching ones
          const matches = collection
            .map(regex => regex.test(value) ? {match:value.match(regex)?.groups, regex} : null)
            .filter((match):match is  {match:loose, regex:RegExp} => !!match)
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
          for (const remove of [...removes, ...this.regexs.cleaners.global, ...(parenthesis ? this.regexs.cleaners.special.empty.parenthesis : [])])
            value = value.replace(remove, " ")
        return value.trim()
      }

    /** Parse filename. */
      static parse(filename:string, options:parser_options = {}) {
        //Preparation
          const regexs = Parser.regexs
          const data = {result:{filename:filename.trim()}, cleaned:filename.trim(), removes:[], rejects:[], regexs, options} as parser_data
        //Pre-processing
          this.process.pre.asian_content(data)
        //Main processing
          this.process.main(data,
            {key:"hash", collection:regexs.file.hash, get:"value"},
            {key:"website", collection:regexs.meta.website, get:"value"},
            {key:"extension", collection:regexs.file.extension},
            {key:"resolution", collection:regexs.quality.resolution},
            {key:"codecs", collection:regexs.quality.codecs},
            {key:"source", collection:regexs.quality.source},
            {key:"distributor", collection:regexs.quality.distributor},
            {key:"meta", collection:regexs.meta.data},
            {key:"audio", collection:regexs.lang.audio.extract},
            {key:"audio", collection:regexs.lang.audio.keep, clean:false},
            {key:"subtitles", collection:regexs.lang.subtitles.extract},
            {key:"subtitles", collection:regexs.lang.subtitles.keep, clean:false},
            {key:"subber", collection:regexs.meta.subber, get:"value", mode:"skip"},
            {key:"movie", collection:regexs.serie.movie, get:"value", mode:"skip"},
            {key:"part", collection:regexs.serie.part.range.extract, get:"value"},
            {key:"part", collection:regexs.serie.part.single.extract, get:"value"},
            {key:"part", collection:regexs.serie.part.range.keep, get:"value", mode:"skip"},
            {key:"part", collection:regexs.serie.part.single.keep, get:"value", mode:"skip"},
            {key:"season", collection:regexs.serie.season.range.extract, get:"value"},
            {key:"season", collection:regexs.serie.season.single.extract, get:"value"},
            {key:"season", collection:regexs.serie.season.range.keep, get:"value", clean:false, mode:"skip"},
            {key:"season", collection:regexs.serie.season.single.keep, get:"value", clean:false, mode:"skip"},
            {key:"episode", collection:regexs.serie.episode.range.extract, get:"value"},
            {key:"episode", collection:regexs.serie.episode.single.extract, get:"value"},
            {key:"episode", collection:regexs.serie.episode.range.keep, get:"value", clean:false, mode:"skip"},
            {key:"episode", collection:regexs.serie.episode.single.keep, get:"value", clean:false, mode:"skip"},
            {key:"meta", collection:regexs.meta.data},
            {cleaners:regexs.cleaners.misc},
          )
        //Post-processing
          this.process.post.serie(data)
          this.process.post.codecs(data)
          this.process.post.name(data)
          this.process.post.clean(data)
        return data.result as TorrentInfos
      }

      private static readonly process = Object.freeze({
        //Pre-processors
          pre:{
            /** Extract and locate asian content */
              asian_content(data:parser_data) {
                //Initialization
                  const {regexs} = data
                  let {cleaned} = data
                //Iterate on asian content regexs
                  for (const regex of regexs.processors.pre.name.asian_content)
                    cleaned = cleaned.replace(regex, "$<content>")
                  console.debug(`(meta) > pre-process > cleaned value = ${cleaned}`)
                data.cleaned = cleaned
              }
          },
        /** Main processors */
          main(data:parser_data, ...args:{key?:string, collection?:RegExp[], get?:"key"|"value", mode?:"append"|"replace"|"skip", clean?:boolean, cleaners?:RegExp[]}[]) {
            //Initialization
              const {result, removes, options} = data
              let {cleaned} = data
            //Loop over arguments
              for (const {key = "", collection = [], get = "key", mode = "append", clean = true, cleaners = []} of args) {
                //Parse key
                  if (key) {
                    //Search for matches
                      console.debug(`${key} > process`)
                      const matches = Parser.test({collection, value:cleaned, get})
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
                        if (options.nulls)
                          result[key] = null
                      }
                  }
                //Clean if needed
                  if (clean) {
                    cleaned = Parser.clean({value:cleaned, removes:[...removes, ...cleaners]})
                    console.debug(`${key||"(meta)"} > process > cleaned value = ${cleaned}`)
                    removes.splice(0)
                  }
            }
          //Register name
            result.name = cleaned
            console.debug(`name > process > current value = ${cleaned}`)
          },
        //Post-processors
          post:{
            /** Post-processing for season, episode and part */
              serie(data:parser_data) {
                //Initialization
                  const {result, rejects, regexs} = data
                //Iterate on move, season, episode and part properties
                  for (const key of ["movie", "season", "episode", "part"]) {
                    //Remove leading zeros
                      let value = result[key]
                      if (value) {
                        //Detect ranges
                          if (regexs.processors.post.serie.range.test(value)) {
                            const [a, b] = value.trim().split(" ")
                            //If range is not ascending or upper limit has leading zero while lower hasn't, lower limit is probably not part of a range
                              if ((Number(a) > Number(b))||((regexs.processors.post.serie.leading_zero.test(b))&&(!regexs.processors.post.serie.leading_zero.test(a)))) {
                                console.debug(`${key} > post-process > invalid range or formatting mistmatch, accepting ${b} but rejecting ${a}`)
                                value = Number(b).toString()
                                rejects.push(a)
                              }
                              else
                                value = [a, b].map(Number).join("-")
                          }
                        //Detect single
                          else if (regexs.processors.post.serie.single.test(value))
                            value = Number(value).toString()
                        console.debug(`${key} > post-process > current ${key} = ${value}`)
                        result[key] = value
                      }
                  }
              },
            /** Post-processing for codecs */
              codecs(data:parser_data) {
                //Initialization
                  const {result, regexs} = data
                  let {codecs} = result
                //Check if codecs exists
                  if (codecs) {
                    //If codecs includes both DTS and DTS HDMA, only keep latter version
                      if (regexs.processors.post.codecs.dts_hdma_duplicates.test(codecs))
                        codecs = codecs.replace(regexs.processors.post.codecs.dts_hdma_duplicates, "dts_hdma")
                    console.debug(`codecs > post-process > current codecs = ${codecs}`)
                    result.codecs = codecs
                  }
              },
            /** Post-processing for name */
              name(data:parser_data) {
                //Initialization
                  const {result, rejects, regexs} = data
                //Reverse string (used to make regex starts from end instead of start)
                  let value = [...`${result.name} ${rejects.join(" ")}`].reverse().map(c => { return ({"[":"]", "]":"["} as loose)[c]||c }).join("").trim()
                //Remove unparsable attributes
                  while (regexs.cleaners.special.unparsable.test(value)) {
                    //Edge case : title is in brackets
                      if (regexs.cleaners.special.only_brackets.test(value)) {
                        console.debug(`name > post-process > last attribute, assuming it is name`)
                        value = value.match(regexs.cleaners.special.only_brackets)?.groups?.name as string
                        break
                      }
                    //Edge case : no subber has been detected yet but attribute is candidate for it
                      else if ((!result.subber)&&(regexs.processors.post.subber.possible_subber_name.test(value))) {
                        result.subber = [...value.match(regexs.processors.post.subber.possible_subber_name)?.groups?.subber as string].reverse().join("")
                        console.debug(`name > post-process > found unparsable value which may be subber (${result.subber})`)
                      }
                    //Remove unparsable brackets
                      else
                        console.debug(`name > post-process > found unparsable value ${value.match(regexs.cleaners.special.unparsable)?.groups?.unparsable}`)
                      value = Parser.clean({value, removes:[regexs.cleaners.special.unparsable], empty:{parenthesis:false}})
                  }
                //Re-reverse string
                  value = [...value].reverse().join("")
                //Post-processor name refiners
                  {
                    //If audio is not defined or doesn't include multi but post processor test is positive
                      if (((!result.audio)||(!result.audio.includes("multi")))&&(regexs.processors.post.audio.possible_multi_audio.test(value))) {
                        result.audio = [...new Set([...(result.audio||"").split(" "), "multi"].sort())].join(" ")
                        console.debug(`audio > post-process > current value = ${result.audio}`)
                        value = Parser.clean({value, removes:[regexs.processors.post.audio.possible_multi_audio]})
                      }
                    //If episode is not definned, we may be able to find it
                      if ((!result.episode)&&(regexs.processors.post.serie.possible_episode.test(value))) {
                        result.episode = value.match(regexs.processors.post.serie.possible_episode)?.groups?.episode
                        console.debug(`episode > post-process > current value = ${result.episode}`)
                        value = Parser.clean({value, removes:[regexs.processors.post.serie.possible_episode]})
                      }
                  }
                //Replace special characters with spaces if needed
                  for (const regex of [...regexs.processors.post.name.special_to_space, ...regexs.processors.post.name.isolated])
                    value = value.replace(regex, " ")
                console.debug(`name > post-process > current value = ${value}`)
                result.name = value
              },
            //Clean all properties (except filename)
              clean(data:parser_data) {
                //Initialization
                  const {result, removes, options} = data
                //Clean all properties
                  for (const [key, value] of Object.entries(result)) {
                    result[key] = (value === result.filename) ? value : Parser.clean({value, removes})
                    //Delete property if empty
                      if (!result[key]) {
                        console.debug(`${key} > post-process > deleted because empty`)
                        if (options.nulls)
                          result[key] = null
                        else
                          delete result[key]
                      }
                  }
              },
          }
      })

  }
