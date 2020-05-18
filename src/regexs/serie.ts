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
        /\b(?<season>2)nd [Ss]eason\b/,
        /\b(?<season>3)rd [Ss]eason\b/,
        /\b[\(\[)]?[Ss]eason (?<season>\d+)[\)\]]?\b/,
        /\b[\(\[)]?[Ss]aison (?<season>\d+)[\)\]]?\b/,
        /\bS(?<season>\d+)E\d+\b/,
        /\bS(?<season>\d+)\b/,
      ],

    //Part
      part:[
        /\b[Pp]art[-._ ](?<part>\d)\b/,
      ],

    //Episode
      episode:{
        //Episodes ranges
          range:{
            skip:[
              /\b[-._ ]?[Vv]ol[-._ ]?(?<a>\d+)-(?<b>\d+)\b/,
              /[Ee][Pp][Ss]?\.? (?<a>\d{2,})-(?<b>\d{2,})/,
              /E(?<a>\d{2,})-E(?<b>\d{2,})/,
              /(?<!\d)(?<a>\d{1,3})\s?[-~&]\s?(?<b>\d{1,3})/,
            ],
            replace:[

            ],
          },
        //Single episode
          single:{
            skip:[
              /\bS\d+E(?<episode>\d+)\b/,
              /\bE(?<episode>0\d+)\b/,
              /\b(?<episode>0\d+)\b/,
              /\s(?<episode>0\d+)$/,
              /- \b(?<episode>\d+)(?= |$)\b/,
            ],
            replace:[
              /\b(?<episode>\d{2,})\s+END\b/,
            ],
          }
      },

  })
