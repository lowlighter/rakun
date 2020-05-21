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

/** Parser data. */
  type parser_data = {
    //Torrent infos references
      readonly result:loose
    //Cleaned string
      cleaned:string
    //Regex matchs to removes
      readonly removes:RegExp[]
    //Rejected matchs to re-add
      readonly rejects:string[]
    //Regexs collections
      readonly regexs:Regexs
    //Options
      readonly options:parser_options
  }

/** Parser options. */
  type parser_options = {

  }

/** Loose type. */
  type loose = {[key:string]:any}

/** Filter overload. */
  interface Array<T> {
    filter<U extends T>(pred: (a: T) => a is U): U[]
  }