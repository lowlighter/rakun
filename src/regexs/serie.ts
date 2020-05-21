/**
 * Serie related regexs
 */
  export default {

    //Episode
      episode:{
        //Episodes ranges
          range:{
            extract:[
              /\b[-._ ]?[Vv]ol[-._ ]?(?<a>\d+)-(?<b>\d+)\b/,
              /[Ee][Pp][Ss]?\.? (?<a>\d{2,})-(?<b>\d{2,})/,
              /E(?<a>\d{2,})-E(?<b>\d{2,})/,
              /[Ee]pisodio\s(?<a>\d+)\s?[-~&]\s?(?<b>\d+)/,
            ],
            keep:[
              /(?<!\d)(?<a>\d{1,3})\s?[-~&]\s?(?<b>\d{1,3})/,
            ],
          },
        //Single episode
          single:{
            extract:[
              /(?<episode>\d{2,})\s+END(?: |$)/,
              /#(?<episode>\d+)(?: |$)/,
            ],
            keep:[
              /\bS\d+E(?<episode>\d+)\b/,
              /\bE(?<episode>0\d+)\b/,
              /\bE(?<episode>\d{2,3})\b/,
              /\b(?<episode>0\d+)\b/,
              /\s(?<episode>0\d+)$/,
              /- \b(?<episode>\d+)(?= |$)\b/,
            ],
          },
      },

    //Movie
      movie:{
        range:{
          extract:[
            /[Mm]ovies?\s(?<a>\d+)\s?[-~&]\s?(?<b>\d+)/,
          ],
          keep:[],
        },
        single:{
          extract:[
            /(?<=[Mm]ovie\s)(?<movie>\d+)/,
          ],
          keep:[]
        }
      },

    //Part
      part:{
        range: {
          extract:[],
          keep:[],
        },
        single:{
          extract:[
            /\b[Pp]art[-._ ](?<part>\d)\b/,
          ],
          keep:[],
        },
      },

    //Season
      season:{
        range: {
          extract:[
            /\b[\(\[)]?[Ss]easons (?<a>\d+)\s?[-~&]\s?(?<b>\d+)[\)\]]?\b/,
          ],
          keep:[],
        },
        single:{
          extract:[
            /\b(?<season>2)nd [Ss]eason\b/,
            /\b(?<season>3)rd [Ss]eason\b/,
            /\b[\(\[)]?[Ss]eason (?<season>\d+)[\)\]]?\b/,
            /\b[\(\[)]?[Ss]aison (?<season>\d+)[\)\]]?\b/,
            /[-._ ]S(?<season>\d+)(?=E\d)/,
            /\bS(?<season>\d+)\b/,
          ],
          keep:[],
        },
      },

  }
