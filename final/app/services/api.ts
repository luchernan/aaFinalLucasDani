  import type { Track, DeezerAPIResponse, Album, Artist, AlbumResponse, TrackAlbum } from "../types/interfaces";

  const BASE_URL = "https://deezerdevs-deezer.p.rapidapi.com/search";
  const ALBUM_URL ="https://api.deezer.com/album/"
    const ARTIST_URL ="https://api.deezer.com/artist/"
     const LIMIT_URL ="/top?limit=50"
  const HEADERS = {
    "X-RapidAPI-Key": "3d18fadb96mshfdcba924e6d39f5p136872jsn47e833abda1a",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  };


  // export async function getSongsForAlbumCard(name: string): Promise<TrackAlbum[]> {

  //   return ;
  // }


  export async function getSongsByName(name: string): Promise<Track[]> {
    try {
      const response: Response = await fetch(`${BASE_URL}?q=${encodeURIComponent(name)}`, {
        method: "GET",
        headers: HEADERS,
      });

      if (!response.ok) {
        throw new Error(`Song "${name}" not found: ${response.status} ${response.statusText}`);
      }

      const data: DeezerAPIResponse = await response.json();
      console.log(`Fetched Songs for: ${name}`, data.data);
      return data.data; 
    } catch (error) {
      console.error(`Error fetching songs for "${name}":`, error);
      throw error; 
    }
  }


  export async function getSongsByAlbum(Tracklist: string): Promise<Track[]> {
    try {
      const response: Response = await fetch(`${Tracklist}`, {
        method: "GET",
        headers: HEADERS,
      });
  
      if (!response.ok) {
        throw new Error(`Tracklist not found: ${response.status} ${response.statusText}`);
      }
  
     
      const data: DeezerAPIResponse = await response.json();
      console.log(`Fetched Songs for:`, data.data);
      return data.data; 
    } catch (error) {
      console.error(`Error fetching songs for :`, error);
      throw error; 
    }
  }






  export async function getInfoByAlbumId(albumId: string): Promise<Album> {
    try {
      console.log(albumId)
      
      const response: Response = await fetch(`${ALBUM_URL}${encodeURIComponent(albumId)}`, {
        method: "GET",
      
      });
  
      if (!response.ok) {
        throw new Error(`Album "${albumId}" not found: ${response.status} ${response.statusText}`);
      }
  

      const data: Album = await response.json();

      console.log(`Fetched Album for ID: ${albumId}`, data);
      return data; // Devuelve el objeto Album
    } catch (error) {
      console.error(`Error fetching album for ID "${albumId}":`, error);
      throw error; // Relanza el error para que el llamador lo maneje
    }
  }

  export async function getInfoByArtistId(artistId: string): Promise<Artist> {
    try {
      console.log(artistId)
      
      const response: Response = await fetch(`${ARTIST_URL}${encodeURIComponent(artistId)}${LIMIT_URL}`, {
        method: "GET",
      
      });
  
      if (!response.ok) {
        throw new Error(`Artist "${artistId}" not found: ${response.status} ${response.statusText}`);
      }
  

      const data: Artist = await response.json();

      console.log(`Fetched Album for ID: ${artistId}`, data);
      return data; // Devuelve el objeto Album
    } catch (error) {
      console.error(`Error fetching album for ID "${artistId}":`, error);
      throw error; // Relanza el error para que el llamador lo maneje
    }
  }

  export async function getSongsByArtist(Tracklist: string): Promise<Track[]> {
    try {
      const response: Response = await fetch(`${Tracklist}`, {
        method: "GET",
        headers: HEADERS,
      });
  
      if (!response.ok) {
        throw new Error(`Tracklist not found: ${response.status} ${response.statusText}`);
      }
  
     
      const data: DeezerAPIResponse = await response.json();
      console.log(`Fetched Songs for:`, data.data);
      return data.data; 
    } catch (error) {
      console.error(`Error fetching songs for :`, error);
      throw error; 
    }
  }

