// Interfaz para el artista
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
  
  // Interfaz para el álbum
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
  
  // Interfaz para la pista (canción)
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
  
  // Interfaz para la respuesta completa de la API
  export interface DeezerAPIResponse {
    data: Track[];
    total: number;
  }
  