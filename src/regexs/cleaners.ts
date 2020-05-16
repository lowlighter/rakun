/** 
 * Cleaners regexs
 */
  export default Object.freeze({

    //Global cleaners (always executed at cleaning)
      global:[
        //Multiples spaces
          /\s{2,}/,
        //Empty parenthesis or brackets
          /[\(\[]\s*[\)\]]/,
        //Isolated characters
          / [-_.] /,
      ],

    //Miscelleanous cleaners
      misc:[
        /\bNHKG\b/,
        /\[\w+\]/,
      ],

  })