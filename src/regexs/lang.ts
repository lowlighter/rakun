/** 
 * Language related regexs
 */
  export default Object.freeze({

    //Audio
      audio:[
        /(?<vo>\bVOSTFR\b)/,
        /(?<jp>\b[Jj]apanese [Aa]udio\b)/,
        /(?<multi>\bMULTI\b|\bMULTi\b)/,
        /(?<en>\b[Ee]nglish [Dd]ub\b)/,
        /(?<fr>\bVF\b)/
      ],

    //Subtitles
      subtitles:[
        /(?<fr>\bVOSTFR\b)/,
        /(?<en>\bEnglish subs?\b)/,
        /(?<multi>\b[Mm]ulti[-_. ][Ss]ubs?\b)/,
      ],

  })