/** 
 * Torrent metadata related regexs
 */
  export default Object.freeze({

    //Subber, translation groups
      subber:[
        //Brackets with normal phrasing, and no specials characters is probably subber name
          /\[(?<subber>[A-Za-z][a-z]{5,})\]/,
        //Subber is usually at start of filename
          /^\[(?<subber>[^[]+)\]/,
      ],

    //Metadata
      data:[
        /(?<remux>\bREMUX(?:ES)?\b)/,
        /(?<remux>\b[Rr]emux(?:es)?\b)/,
        /(?<complete>\[[Cc]omplete\])/,
        /(?<batch>\bBatch\b)/,
      ],

    //Website
      website:[
        /\[(?<website>[\w]+\.(?:com))\]/,
      ],

  })