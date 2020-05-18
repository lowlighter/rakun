/** 
 * Quality related regexs (sources, resolution, codecs, etc.)
 */
  export default Object.freeze({

    //Sources
      source:[
        /(?<bluray>\b[Bb]luray (?:RIP|[Rr]ip)\b)/,
        /(?<bluray>\bBD(?:RIP|[Rr]ip)\b)/,
        /(?<bluray>\bBR(?:RIP|[Rr]ip)\b)/,
        /(?<=[^A-Za-z])(?<bluray>B[RD])(?=[^A-Za-z])/, 
        /(?<bluray>\bBLU-?RAY\b)/,              
        /(?<bluray>\b[Bb]lu-?[Rr]ay\b)/,                  
        /(?<bluray>\bHD-?DVD\b)/, 
        /(?<bluray>BD(?=REMUX))/,  
        /(?<webdl>\bWEB[-_. ]?DL\b)/,
        /(?<webdl>\bWEBRIP\b)/, 
        /(?<webdl>\bWEBHD\b)/,
        /(?<dvd>\bDVD\b)/,
        /(?<dvd>\bDVDRIP\b)/,
        /(?<dvd>\b[Dd]vd\s?[Rr]ip\b)/,
        /(?<dvd>\bNTSC\b)/,
        /(?<dvd>\bPAL\b)/,
        /(?<dvd>\bXVIDDVD\b)/,
        /(?<dsr>\bWS[-_. ]DSR\b)/,
        /(?<dsr>\bDSR\b)/,
        /(?<hdtv>\bHDTV\b)/,
        /(?<pdtv>\bPDTV\b)/,
        /(?<sdtv>\bSDTV\b)/,
        /(?<tvrip>\bTVRIP\b)/,
        /(?<tvrip>\bTV-?[Rr]ip\b)/,
        /(?<camrip>\bCAM[-_. ]?RIP\b)/,
        /(?<raw>\bRAW\b)/,
      ],

    //Distributors
      distributor:[
        /(?<apple_tv>\bATVP\b)/,
        /(?<amazon>\bAMZN-DL\b)/, 
        /(?<amazon>\bAMZN\b)/, 	
        /(?<comedy_central>\bCC\b)/,
        /(?<crunchy_roll>\bCR\b)/,
        /(?<disney>\bDSNP\b)/,
        /(?<disney>\bDSNY\b)/,
        /(?<fox>\bFOX\b)/,
        /(?<hulu>\bHULU\b)/,
        /(?<disney>\bDSNY\b)/,
        /(?<mtv>\bMTV\b)/,
        /(?<netflix>\bNF\b)/,
        /(?<tf1>\bTF1\b)/,
      ],
      
    //Resolutions
      resolution:[
        /(HD\s?)?(?<_1080p>1080[Pp])/,
        /(?<_1080p>1920x1080)/,
        /(HD\s?)?(?<_720p>720[Pp])/,
        /(?<_720p>1280x720)/,
        /(?<_480p>480[Pp])/,
        /(?<_480p>640x480)/,
        /(?<_480p>848x480)/,
        /(?<_576p>576[Pp])/,
        /(?<_2160p>2160[Pp])/,
      ],

    //Codecs
      codecs:[
        /(?<x264>\b[Xx]264\b)/,
        /(?<h264>\b[Hh]264\b)/,
        /(?<x265>\b[Xx]265\b)/,
        /(?<h265>\b[Hh]265\b)/,
        /(?<xvidhd>\bXVIDHD\b)/,
        /(?<divx>\bdivx\b)/,
        /(?<aac>\bAAC\b)/,
        /(?<ac3>\b[Aa]c3|AC3\b)/,
        /(?<av1>\bAV1\b)/,
        /[-_. ]?(?<flac>FLAC)[-_. ]?/,
        /(?<flac>\bFlac\b)/,
        /(?<_10bit>\b10-?[Bb]its?\b)/,
        /[_.-]?(?<_10bit>10bpp)[_.-]?/,
        /(?<_8bit>\b8-?bits?\b)/,
        /(?<hevc>\bhevc\b)/,
        /(?<hevc>\bHEVC\b)/,
        /(?<dual_audio>\bDual[- ]Audio\b)/,
        /(?<dual_audio>\bDUAL[-._ ]AUD[Ii]O\b)/,
        /(?<dts_hdma>\bDTSHDMA?\b)/,
        /(?<dts_hdma>\bDTS-?HD[-_. ]?MA(?:[-_. ]6.1)?\b)/,
        /[-_. ]?(?<avc>AVC)[-_. ]?/,
        /(?<audio_5_1>\b(?:DD)?5\.1\b)/,
        /(?<dts>\bDTS\b)/,
        /(?<true_hd>\bTrueHD\b)/
      ],
  })