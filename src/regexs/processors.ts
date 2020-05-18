/** 
 * Processors regexs
 */
  export default Object.freeze({

    //Pre-processors
      pre:{
        //Name
          name:{
            //Asian content cleaner
              asian_content:[
                /\[(?<content>[一-龯]+)\]/g,
              ],
          },
      },

    //Post-processors
      post:{
        //Serie post-processors
          serie:{
            range:/^\s*(\d+)\s+(\d+)\s*$/,
            single:/^\s*(\d+)\s*$/,
            leading_zero:/^\s*0\d+\s*$/,
          },
        //Name
          name:{
            //Replace underscore or dots with spaces
              special_to_space:[
                /(?<=[a-z])_(?=[A-Z0-9])/g,
                /(?<=[ \w一-龯])\.(?=[\w一-龯])/g,
              ],
            //Isolated characters (including dash)
              isolated:/[_.-]\s[_.-]/g,
          },
        //Codecs
          codecs:{
            //Detect multiple DTS version
              dts_hdma_duplicates:/\bdts\b.*\bdts_hdma\b/,
          },
        //Subber
          subber:{
            //Check if attribute may be a possible subber name if none has been detected before
              possible_subber_name:/\[(?<subber>[-A-Za-z&! 0-9.]+)\]/,
          }
      },

  })