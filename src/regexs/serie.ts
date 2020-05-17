/** 
 * Serie related regexs
 */
  export default Object.freeze({

    //Movie
      movie:[
        /(?<=[Mm]ovie\s)(?<movie>\d+)/,
      ],

    //Season
      season:[
        /\b[\(\[)]?[Ss]eason (?<season>\d+)[\)\]]?\b/,
        /\bS(?<season>\d+)E\d+\b/,
        /\bS(?<season>\d+)\b/,
      ],

    //Part
      part:[
        /\b[Pp]art[-._ ](?<part>\d)\b/,
        /\b[Vv]ol[-._ ](?<a>\d+)-(?<b>\d+)\b/,
      ],

    //Episode
      episode:{
        //Episodes ranges
          range:{
            skip:[
              /[Ee][Pp][Ss]?\.? (?<a>\d{2,})-(?<b>\d{2,})/,
              /E(?<a>\d{2,})-E(?<b>\d{2,})/,
              /(?<a>\d+)\s?[-~]\s?(?<b>\d+)/,
            ],
            replace:[

            ],
          },
        //Single episode
          single:{
            skip:[
              /\bS\d+E(?<episode>\d+)\b/,
              /\b(?<episode>0\d+)\b/,
              /\s(?<episode>0\d+)$/,
              /- \b(?<episode>\d+)\b/,
            ],
            replace:[
              /\b(?<episode>\d{2,})\s+END\b/,
            ],
          }
      },

  })
