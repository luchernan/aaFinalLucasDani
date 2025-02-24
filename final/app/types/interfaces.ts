
export interface Artist {
    id: number;
    name: string;
    link: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    tracklist: string;
    type: string;
  }
  

  export interface Album {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    tracklist: string;
    type: string;
  }
 

  export interface Track {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    md5_image: string;
    artist: Artist;
    album: Album;
    type: string;
  }
  

  export interface DeezerAPIResponse {
    data: Track[];
    total: number;
  }
  




//   {
//     "data": [
//         {
//             "id": 2830396092,
//             "readable": true,
//             "title": "Murder",
//             "title_short": "Murder",
//             "title_version": "",
//             "link": "https://www.deezer.com/track/2830396092",
//             "duration": 383,
//             "rank": 61143,
//             "explicit_lyrics": true,
//             "explicit_content_lyrics": 1,
//             "explicit_content_cover": 2,
//             "preview": "https://cdnt-preview.dzcdn.net/api/1/1/5/0/7/0/5077bd3a898111cf5af7cd1b114c9a38.mp3?hdnea=exp=1740396076~acl=/api/1/1/5/0/7/0/5077bd3a898111cf5af7cd1b114c9a38.mp3*~data=user_id=0,application_id=42~hmac=aca0c127ba30d06ca0488bb376bbf9f1840bd5676bcc9f2783475bbdbdfb526e",
//             "md5_image": "60ddc248e6d19f92ae32800e1d6b9d54",
//             "artist": {
//                 "id": 158927,
//                 "name": "Evil Activities",
//                 "link": "https://www.deezer.com/artist/158927",
//                 "picture": "https://api.deezer.com/artist/158927/image",
//                 "picture_small": "https://cdn-images.dzcdn.net/images/artist/6928bd20e15b2dd68c1b5dd19713c742/56x56-000000-80-0-0.jpg",
//                 "picture_medium": "https://cdn-images.dzcdn.net/images/artist/6928bd20e15b2dd68c1b5dd19713c742/250x250-000000-80-0-0.jpg",
//                 "picture_big": "https://cdn-images.dzcdn.net/images/artist/6928bd20e15b2dd68c1b5dd19713c742/500x500-000000-80-0-0.jpg",
//                 "picture_xl": "https://cdn-images.dzcdn.net/images/artist/6928bd20e15b2dd68c1b5dd19713c742/1000x1000-000000-80-0-0.jpg",
//                 "tracklist": "https://api.deezer.com/artist/158927/top?limit=50",
//                 "type": "artist"
//             },
//             "album": {
//                 "id": 596269222,
//                 "title": "Evilution",
//                 "cover": "https://api.deezer.com/album/596269222/image",
//                 "cover_small": "https://cdn-images.dzcdn.net/images/cover/60ddc248e6d19f92ae32800e1d6b9d54/56x56-000000-80-0-0.jpg",
//                 "cover_medium": "https://cdn-images.dzcdn.net/images/cover/60ddc248e6d19f92ae32800e1d6b9d54/250x250-000000-80-0-0.jpg",
//                 "cover_big": "https://cdn-images.dzcdn.net/images/cover/60ddc248e6d19f92ae32800e1d6b9d54/500x500-000000-80-0-0.jpg",
//                 "cover_xl": "https://cdn-images.dzcdn.net/images/cover/60ddc248e6d19f92ae32800e1d6b9d54/1000x1000-000000-80-0-0.jpg",
//                 "md5_image": "60ddc248e6d19f92ae32800e1d6b9d54",
//                 "tracklist": "https://api.deezer.com/album/596269222/tracks",
//                 "type": "album"
//             },
//             "type": "track"
//         }
//     ],
//     "total": 1
// }