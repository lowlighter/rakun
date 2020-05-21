/**
 * Cleaners regexs
 */
  export default {

    //Global cleaners (always executed at cleaning)
      global:[
        //Multiples spaces (pre)
          /\s{2,}/g,
        //Special characters remnants
          /[-_.]{2,}/g,
        //Spaces after/before brackets
          /(?<=\[)\s/g, /\s(?=\])/g,
        //Spaces after/before parenthesis
          /(?<=\()\s/g, /\s(?=\))/g,
        //Isolated characters
          /(?:^| )[_.] /g,
        //Empty brackets
          /[\[]\s*[\]]/g,
        //Special characters (either at start or end)
          /^[-_./]/, /[-_./]$/,
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
        //Empty elements
          empty:{
            parenthesis:[
              /\(\s*\)/g,
            ],
          },
        //Only brackets, and title not yet found => title is also in brackets
          only_brackets:/^\[(?<name>[^[]+)\]$/,
        //Unparsable elements, stating from end
          unparsable:/(?<unparsable>\[[^[]+?\])/,
      },

  }
