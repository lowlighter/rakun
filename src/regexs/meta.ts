/**
 * Torrent metadata related regexs
 */
  export default {

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
        /(?<has_specials>[Oo]ne [Ss]pecials?)/,
        /(?<has_specials>[Tt]wo [Ss]pecials?)/,
        /(?<has_specials>[Tt]hree [Ss]pecials?)/,
        /(?<has_specials>[Ff]our [Ss]pecials?)/,
        /(?<has_specials>[Ff]ive [Ss]pecials?)/,
        /(?<has_specials>[Ss]ix [Ss]pecials?)/,
      ],

    //Subber, translation groups
      subber:[
        //Brackets with normal phrasing, and no specials characters is probably subber name
          /\[(?<subber>[A-Za-z][-A-Za-z&! 0-9.]{5,})\]/,
        //Subber is usually at start of filename
          /^\[(?<subber>[^\]]+[-A-Za-z&! 0-9.]{2,})\]/,
          /^\[(?<subber>[-A-Za-z&! 0-9.]+)\]/,
        //Subber at end of filename, with special characters but got "Sub" in its name
          /\s(?<subber>[A-Za-z][-A-Za-z&!0-9.]+[Ss][Uu][Bb])$/,
        //Subber at end of filename
          /(?<!\d)-(?<subber>[A-Za-z][A-Za-z&!0-9.]+)$/,
      ],

    //Website
      website:[
        /\[(?<website>[\w]+\.(?:com))\]/,
      ],

  }