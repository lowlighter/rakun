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
          range:[
            /[Ee][Pp][Ss]?\.? (?<a>\d{2,})-(?<b>\d{2,})/,
            /E(?<a>\d{2,})-E(?<b>\d{2,})/,
            /(?<a>\d+)-(?<b>\d+)/,
          ],
        //Single episode
          single:[
            /\bS\d+E(?<episode>\d+)\b/,
            /\b(?<episode>0\d)\s+END\b/,
            /\b(?<episode>0\d)\b/,
            /\s(?<episode>\d{2,})$/,
          ],
      },

  })
