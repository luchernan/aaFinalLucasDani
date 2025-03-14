
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
  


  export interface TrackArtist {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    contributor: {
      id: number;
      name: string;
      link: string;
      share: string;
      picture: string;
      picture_small: string;
      picture_medium: string;
      picture_big: string;
      picture_xl: string;
      radio: boolean;
      tracklist: string;
      type: string;
      role: string;
    }
    md5_image: string;
    artist: {
      id: number;
      name: string;
      tracklist: string;
      type: string;
    };
    album: {  id: number;
      title: string;
      cover: string;
      cover_small: string;
      cover_medium: string;
      cover_big: string;
      cover_xl: string;
      md5_image: string;
      tracklist: string;
      type: string;};
    type: string;
  }


    export interface TrackAlbum {
      id: number;
      readable: boolean;
      title: string;
      title_short: string;
      title_version: string;
      isrc: string;
      link: string;
      duration: number;
      track_position: number;
      disk_number: number;
      rank: number;
      explicit_lyrics: boolean;
      explicit_content_lyrics: number;
      explicit_content_cover: number;
      preview: string;
      md5_image: string;
      artist: {
          id: number;
          name: string;
          tracklist: string;
          type: string;
      };
      type: string;
  }


  export interface AlbumResponse{
    data: TrackAlbum[];
    total: number;
  }
  export interface ArtistResponse{
    data: TrackArtist[];
    total: number;
  }

  export interface DeezerAPIResponse {
    data: Track[];
    total: number;
  }
  
