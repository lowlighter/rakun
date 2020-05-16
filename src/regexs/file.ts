/** 
 * File metadata related regexs
 */
  export default Object.freeze({
    //Extension
      extension:[
        /(?<mkv>[.]mkv$)/,
        /(?<mkv>\b\[MKV\]\b)/,
        /(?<mp4>[.]mp4$)/,
        /(?<mp4>\bMP4\b)/,
        /(?<_7z>[.]7z$)/,
      ],
    //Hash
      hash:[
        /[\[\()](?<hash>[A-F0-9]{8})[\]\)]/,
      ],
  })