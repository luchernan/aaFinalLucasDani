  import type { Track, DeezerAPIResponse, Album, Artist, AlbumResponse, TrackAlbum } from "../types/interfaces";

  const BASE_URL = "https://deezerdevs-deezer.p.rapidapi.com/search";
  const ALBUM_URL ="https://api.deezer.com/album/"
    const ARTIST_URL ="https://api.deezer.com/artist/"
     const LIMIT_URL ="/top?limit=50"
  const HEADERS = {
    "X-RapidAPI-Key": "3d18fadb96mshfdcba924e6d39f5p136872jsn47e833abda1a",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  };



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
      return data; 
    } catch (error) {
      console.error(`Error fetching album for ID "${albumId}":`, error);
      throw error; 
    }
  }

  export async function getInfoByArtistId(artistId: string): Promise<Artist> {
    try {
      const response: Response = await fetch(`${ARTIST_URL}${encodeURIComponent(artistId)}`, {
        method: "GET",
        headers: HEADERS, // Asegúrate de incluir los headers
      });
  
      if (!response.ok) {
        throw new Error(`Artist "${artistId}" not found: ${response.status} ${response.statusText}`);
      }
  
      const data: Artist = await response.json();
      console.log(`Fetched Artist for ID: ${artistId}`, data);
  
      // Verifica que la propiedad `tracklist` esté presente
      if (!data.tracklist) {
        throw new Error("Tracklist not found in artist data");
      }
  
      return data;
    } catch (error) {
      console.error(`Error fetching artist for ID "${artistId}":`, error);
      throw error;
    }
  }

  export async function getSongsByArtist(tracklist: string): Promise<Track[]> {
    try {
      // Verifica que `tracklist` no sea undefined o vacío
      if (!tracklist) {
        throw new Error("Tracklist URL is undefined or empty");
      }
  
      const response: Response = await fetch(tracklist, {
        method: "GET",
        headers: HEADERS,
      });
  
      if (!response.ok) {
        throw new Error(`Tracklist not found: ${response.status} ${response.statusText}`);
      }
  
      const data: DeezerAPIResponse = await response.json();
      if (!data.data || data.data.length === 0) {
        throw new Error("No tracks found for this artist");
      }
  
      console.log(`Fetched Songs for Artist:`, data.data);
      return data.data;
    } catch (error) {
      console.error(`Error fetching songs for Artist:`, error);
      throw error;
    }
  }
