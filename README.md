# Anime torrent name parser

A parser to extract informations and metadata from an anime torrent filename.

### Usage 

```typescript
import ATNP from "ATNP"
console.log(ATNP.parse("[ZetaRebel] Ghost in the Shell (1995) (BD x264 1080p 8-bit FLAC)"))
```

#### Output

```javascript
{
  filename:'[ZetaRebel] Ghost in the Shell (1995) (BD x264 1080p 8-bit FLAC)',
  hash: null,
  extension: null,
  resolution: '1080p',
  quality: 'bluray',
  codec: '8bit flac x264',
  audio: null,
  meta: null,
  subs: null,
  subber: 'ZetaRebel',
  season: null,
  episodes: null,
  name: 'Ghost in the Shell (1995)',
  website: null,
}
```
