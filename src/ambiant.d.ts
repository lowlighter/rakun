/** Torrent informations. */
  interface TorrentInfos {
    //Original filename
      readonly filename:string
    //Cleaned name
      readonly name:string
    //Hash
      readonly hash:string|null
    //File extension
      readonly extension:string|null
    //Resolution
      readonly resolution:string|null
    //Quality
      readonly quality:string|null
    //Codec
      readonly codec:string|null
    //Language audio
      readonly audio:string|null
    //Torrent metadata
      readonly meta:string|null
    //Language subs
      readonly subs:string|null
    //Subber groups
      readonly subber:string|null
    //Website 
      readonly website:string|null
    //Season
      readonly season:string|null
    //Episode
      readonly episodes:string|null
  }

/** Loose type. */
  type loose = {[key:string]:any}

/** Filter overload. */
  interface Array<T> {
    filter<U extends T>(pred: (a: T) => a is U): U[]
  }