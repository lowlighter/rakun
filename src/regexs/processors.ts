/** 
 * Processors regexs
 */
  export default Object.freeze({

    //Post-processors
      post:{
        //Serie post-processors
          serie:{
            range:/^(\d+) (\d+)$/,
            single:/^(\d+)$/,
          },
        //Name
          name:{
            //Replace underscore or dots with spaces
              special_to_space:[
                /(?<=[a-z])_(?=[A-Z0-9])/g,
                /(?<=\w)\.(?=\w)/g,
              ]
          }
          
      },

  })