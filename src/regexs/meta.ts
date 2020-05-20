/**
 * Torrent metadata related regexs
 */
  export default Object.freeze({

    //Subber, translation groups
      subber:[
        //Brackets with normal phrasing, and no specials characters is probably subber name
          /\[(?<subber>[A-Za-z][-A-Za-z&! 0-9.]{5,})\]/,
        //Subber is usually at start of filename
          /^\[(?<subber>[-A-Za-z&! 0-9.]+)\]/,
        //Subber at end of filename
          /-(?<subber>[A-Za-z][A-Za-z&!0-9.]{3,})$/,
      ],

    //Metadata
      data:[
        /(?<remux>\bREMUX(?:ES)?\b)/,
        /(?<remux>\b[Rr]emux(?:es)?\b)/,
        /(?<complete>\[[Cc]omplete\])/,
        /(?<complete>COMPLETE)/,
        /(?<complete>Complete (?:[Ss]eries)?)/,
        /(?<high_quality>\b[Hh]igh [Qq]uality\b)/,
        /(?<batch>\bBatch\b)/,
        /(?<extended>\bEXTENDED\b)/,
        /(?<pack>\bCoffret\b)/,
        /(?<v2>\b[Vv]2\b)/,
        /(?<high_quality>\bHQ\b)/,
      ],

    //Website
      website:[
        /\[(?<website>[\w]+\.(?:com))\]/,
      ],

  })