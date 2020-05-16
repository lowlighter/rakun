/** 
 * Torrent metadata related regexs
 */
  export default Object.freeze({
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
  })