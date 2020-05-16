/** 
 * Quality related regexs (sources, resolution, codecs, etc.)
 */
  export default Object.freeze({

    //Sources
      source:[
        /(?<webdl>\bWEB[-_. ]?DL\b)/,
        /(?<webdl>\bWEBRIP\b)/, 
        /(?<webdl>\bWEBHD\b)/,
        /(?<dvd>\bDVD\b)/,
        /(?<dvd>\bDVDRIP\b)/,
        /(?<dvd>\bNTSC\b)/,
        /(?<dvd>\bPAL\b)/,
        /(?<dvd>\bXVIDDVD\b)/,
        /(?<bluray>\bBLU-?RAY\b)/,                  
        /(?<bluray>\bHD-?DVD\b)/,               
        /(?<bluray>\bBD\d{3,4}p\b)/,
        /(?<bluray>BD(?=REMUX))/,            
        /(?<bluray>\bBD\b)/,      
        /(?<dsr>\bWS[-_. ]DSR\b)/,
        /(?<dsr>\bDSR\b)/,
        /(?<hdtv>\bHDTV\b)/,
        /(?<bluray>\bBDRIP\b)/,
        /(?<bluray>\bBRRIP\b)/,
        /(?<pdtv>\bPDTV\b)/,
        /(?<sdtv>\bSDTV\b)/,
        /(?<tvrip>\bTVRIP\b)/,
        /(?<camrip>\bCAM[-_. ]?RIP\b)/,
        /(?<raw>\bRAW\b)/,
        /(?<bluray>[-_. ]BR)/,
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
        /(?<_1080p>\b1080[Pp]\b)/,
        /(?<_1080p>1920x1080)/,
        /(?<_720p>\b720[Pp]\b)/,
        /(?<_720p>1280x720)/,
        /(?<_480p>\b480[Pp]\b)/,
        /(?<_480p>640x480)/,
        /(?<_480p>848x480)/,
        /(?<_576p>\b576[Pp]\b)/,
        /(?<_2160p>\b2160[Pp]\b)/,
      ],

    //Codecs
      codecs:[
        /(?<x264>\bx264\b)/,
        /(?<h264>\bh264\b)/,
        /(?<x265>\bx265\b)/,
        /(?<h265>\bh265\b)/,
        /(?<xvidhd>\bXVIDHD\b)/,
        /(?<divx>\bdivx\b)/,
        /(?<aac>\bAAC\b)/,
        /[-_. ]?(?<flac>FLAC)[-_. ]?/,
        /(?<_10bit>\b10-?[Bb]its?\b)/,
        /(?<_10bit>)[_.-]?10bpp[_.-]?/,
        /(?<_8bit>\b8-?bits?\b)/,
        /(?<hevc>\bhevc\b)/,
        /(?<hevc>\bHEVC\b)/,
        /(?<dual_audio>\bDual[- ]Audio\b)/,
        /(?<dts_hdma>\bDTSHDMA\b)/,
        /[-_. ]?(?<avc>AVC)[-_. ]?/,
        /(?<audio_5_1>\b5\.1\b)/,
      ],
  })