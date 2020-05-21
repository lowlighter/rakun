/**
 * File metadata related regexs
 */
  export default {

    //Extension
      extension:[
        /(?<mkv>[.]mkv$)/,
        /(?<mkv>MKV)/,
        /(?<mp4>[.]mp4$)/,
        /(?<mp4>MP4)/,
        /(?<_7z>[.]7z$)/,
      ],

    //Hash
      hash:[
        /[\[\()](?<hash>[A-F0-9]{8})[\]\)]/,
      ],

  }