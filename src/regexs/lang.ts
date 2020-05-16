/** 
 * Language related regexs
 */
  export default Object.freeze({

    //Audio
      audio:[
        /(?<jp>\b[Jj]apanese [Aa]udio\b)/,
        /(?<en>\b[Ee]nglish [Dd]ub\b)/,
        /(?<vo>\bVOSTFR|[Vv]ostfr\b)/,
        /(?<multi>\bMULT[Ii]\b)/,
        /(?<jp>\bJap|JAP\b)/,
        /(?<en>\bEng|ENG\b)/,
        /(?<ita>\bIta|ITA\b)/,
        /(?<fr>\bVF\b)/,
        /(?<jp>\bJP\b)/,
      ],

    //Subtitles
      subtitles:[
        /(?<multi>\b[Mm]ulti[-_. ][Ss]ubs?\b)/,
        /(?<en>\bEnglish subs?\b)/,
        /(?<fr>\bVOSTFR|[Vv]ostfr\b)/,
        /Sub\s?[-_.\w]*?(?<ita>Ita)/,
        /Sub\s?[-_.\w]*?(?<en>Eng)/,
        /(?<ita>\bIta\b)/,
        /(?<en>\bEng\b)/,
      ],

  })
