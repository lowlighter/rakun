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
       // /\b[Vv]ol[-._ ](?<part>\d)\b/,
      ],

    //Episode
      episode:{
        //Episodes ranges
          range:[
            /E(?<episode_a>\d{2,})-E(?<episode_b>\d{2,})/,
            /(?<episode_a>\d{2,})-(?<episode_b>\d{2,})/,
          ],
        //Single episode
          single:[
            /\b(?<episode>0\d)\s+END\b/,
            /\b(?<episode>0\d)\b/,
          ],
      },

  })
