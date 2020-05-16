/** 
 * Serie related regexs
 */
  export default Object.freeze({

    //Season
      season:[
        /\b[\(\[)]?[Ss]eason (?<season>\d+)[\)\]]?\b/,
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
            /(?<a>\d{2,})-(?<b>\d{2,})/,
          ],
        //Single episode
          single:[
            /\b(?<episode>0\d)\s+END\b/,
            /\b(?<episode>0\d)\b/,
            /\s(?<episode>\d{2,})$/,
          ],
      },

  })