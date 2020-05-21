/**
 * Language related regexs
 */
  export default {

    //Audio
      audio:{
        extract:[
          /(?<jp>\b[Jj]apanese [Aa]udio\b)/,
          /(?<en>\b[Ee]nglish [Dd]ub\b)/,
          /(?<en>\b[[Dd]ubbed [Ee]nglish\b)/,
          /(?<multi>\b[Mm]ulti[-_. ][Aa]udio\b)/,
          /(?<multi>\bMULT[Ii]\b)/,
          /(?<jp>\bJap\b|\bJAP\b)(?!-[Ss][Uu][Bb])/,
          /(?<en>\bEng\b|\bENG\b)(?!-[Ss][Uu][Bb])/,
          /(?<ita>\bIta\b|\bITA\b)(?!-[Ss][Uu][Bb])/,
          /(?<fr>\bVF[FR]?\b)/,
          /(?<fr>\bFrench\b)(?!-[Ss][Uu][Bb])/,
          /(?<fr>\bFre\b)/,
          /(?<fr>\bFRENCH\b)(?!-[Ss][Uu][Bb])/,
          /(?<jp>\bJP\b(?!-[Ss][Uu][Bb]))/,
          /(?<sp>\bSpa\b)(?!-[Ss][Uu][Bb])/,
        ],
        keep:[
          /(?<vo>\bVOSTFR\b|\b[Vv]ostfr\b)/,
        ],
      },

    //Subtitles
      subtitles:{
        extract:[
          /(?<multi>\b[Mm]ulti[- ][Ll]anguage [Ss]ub(?:title)?s?\b)/,
          /(?<multi>\b[Mm]ultiple [Ss]ub(?:title)?s?\b)/,
          /(?<multi>\b[Mm]ulti[-_. ][Ss]ubs?\b)/,
          /(?<en>\bEnglish subs?\b)/,
          /(?<en>\bENG? SUBS?\b)/,
          /(?<fr>\bVOSTFR|[Vv]ostfr\b)/,
          /[Ss]ubs?\s?[-_.\w]*?\b(?<fr>[Ff]r)\b/,
          /SUB\s?[-_.\w+]*?\b(?<fr>FR)\b/,
          /[Ss]ubs?\s?[-_.\w]*?\b(?<ita>[Ii]ta)\b/,
          /SUB\s?[-_.\w+]*?\b(?<ita>ITA)\b/,
          /[Ss]ubs?\s?[-_.\w]*?\b(?<en>[Ee]ng?)\b/,
          /SUB\s?[-_.\w+]*?\b(?<en>ENG?)\b/,
          /[Ss]ubs?\s?[-_.\w]*?\b(?<ita>[Pp]l)\b/,
          /SUB\s?[-_.\w+]*?\b(?<pl>PL)\b/,
          /[Ss]ubs?\s?[-_.\w]*?\b(?<es>[Ee]sp?)\b/,
          /SUB\s?[-_.\w+]*?\b(?<es>ESP?)\b/,
          /(?<ita>\bIta\b)/,
          /(?<en>\bEng\b)/,
        ],
        keep:[],
      },

  }
