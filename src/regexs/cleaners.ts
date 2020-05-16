/** 
 * Cleaners regexs
 */
  export default Object.freeze({

    //Global cleaners (always executed at cleaning)
      global:[
        //Multiples spaces (pre)
          /\s{2,}/g,
        //Special characters (either at start or end)
          /^[-_.]/, /[-_.]$/,
        //Special characters remnants
          /[-_.]{2,}/g,
        //Isolated characters
          /(?:^| )[-_.](?: |$)/g,
        //Empty brackets
          /[\[]\s*[\]]/g,
        //Multiples spaces (post)
          /\s{2,}/g,
      ],

    //Miscelleanous cleaners
      misc:[
        /\bNHKG\b/,
        /\b(?<size>\d+GB)\b/,
      ],
    //Special cleaners
      special:{
        //Unparsable elements, stating from end
          unparsable:/(?<unparsable>\[[^[]+?\])/,
        //Only brackets, and title not yet found => title is also in brackets
          only_brackets:/^\[(?<name>[^[]+)\]$/,
        //Empty elements
          empty:{
            parenthesis:[
              /\(\s*\)/g,
            ]
          }
      }
  })