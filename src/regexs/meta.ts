/**
 * Torrent metadata related regexs
 */
  export default Object.freeze({

    //Metadata
      data:[
        /(?<remux>\bREMUX(?:ES)?\b)/,
        /(?<remux>\b[Rr]emux(?:es)?\b)/,
        /(?<remastered>\bRemastered\b)/,
        /(?<complete>\[[Cc]omplete\])/,
        /(?<complete>COMPLETE)/,
        /(?<complete>Complete (?:[Ss]eries)?)/,
        /(?<complete>Complete$)/,
        /(?<high_quality>\b[Hh]igh [Qq]uality\b)/,
        /(?<batch>\bBatch\b)/,
        /(?<extended>\bEXTENDED\b)/,
        /(?<pack>\bCoffret\b)/,
        /(?<v2>\b[Vv]2\b)/,
        /(?<high_quality>\bHQ\b)/,
        /[+]\s?(?<has_ovas>OVAs?)/,
        /[+]\s?(?<has_specials>Specials?)/,
      ],

    //Subber, translation groups
      subber:[
        //Brackets with normal phrasing, and no specials characters is probably subber name
          /\[(?<subber>[A-Za-z][-A-Za-z&! 0-9.]{5,})\]/,
        //Subber is usually at start of filename
          /^\[(?<subber>[-A-Za-z&! 0-9.]+)\]/,
        //Subber at end of filename
          /(?<!\d)\s?-\s?(?<subber>[A-Za-z][A-Za-z&!0-9.]+)$/,
      ],

    //Website
      website:[
        /\[(?<website>[\w]+\.(?:com))\]/,
      ],

  })