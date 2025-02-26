  import type { Track, DeezerAPIResponse } from "../types/interfaces";

  const BASE_URL = "https://deezerdevs-deezer.p.rapidapi.com/search";
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







// import type {
//   Artist,
//   Album,
//   Track,
//   DeezerAPIResponse
 
//  } from "../types/interfaces";
 
//  const BASE_URL = "https://deezerdevs-deezer.p.rapidapi.com/search";
//  const HEADERS = {
//    "X-RapidAPI-Key": "3d18fadb96mshfdcba924e6d39f5p136872jsn47e833abda1a",
//    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
//  };
 
//  export async function getSongs(name: string): Promise<Track[] > {
  
 
   
//      const response: Response = await fetch(`${BASE_URL}?q=${encodeURIComponent(name)}`, { 
//        method: "GET", 
//        headers: HEADERS 
//      });
 
//      if (!response.ok) {
//        throw new Error(`Song "${name}" not found: ${response.status} ${response.statusText}`);
//      }
 
//      const data: DeezerAPIResponse = await response.json();
//      console.log(`Fetched Songs for: ${name}`, data.data);
     
//      return data.data; 
  
//     }
 
 









