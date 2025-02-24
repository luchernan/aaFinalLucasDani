import type {
  Artist,
  Album,
  Track,
  DeezerAPIResponse
 
 } from "../types/interfaces";
 
 const BASE_URL = "https://deezerdevs-deezer.p.rapidapi.com/search";
 const HEADERS = {
   "X-RapidAPI-Key": "3d18fadb96mshfdcba924e6d39f5p136872jsn47e833abda1a",
   "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
 };
 
 export async function getSongs(name: string): Promise<Track[] > {
  
 
   
     const response: Response = await fetch(`${BASE_URL}?q=${encodeURIComponent(name)}`, { 
       method: "GET", 
       headers: HEADERS 
     });
 
     if (!response.ok) {
       throw new Error(`Song "${name}" not found: ${response.status} ${response.statusText}`);
     }
 
     const data: DeezerAPIResponse = await response.json();
     console.log(`Fetched Songs for: ${name}`, data.data);
     
     return data.data; 
  
    }
 
 











// import type {
//  Artist,
//  Album,
//  Track,
//  DeezerAPIResponse

// } from "../types/interfaces";

// const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${music}`;
// const headers = {
//   "X-RapidAPI-Key": "3d18fadb96mshfdcba924e6d39f5p136872jsn47e833abda1a",
//   "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
// };



// export async function getSongs(

//   name: string | undefined
// ) :Promise< DeezerAPIResponse| null> {


//   try {
//     const response : Response = await fetch(url, { method: "GET", headers });


//     if (!response.ok) {
//       throw new Error(
//         `Song "${name}" not found: ${response.status} ${response.statusText}`
//       );
//     }

//     const data: DeezerAPIResponse = await response.json(); 
//     console.log(`Fetched Song: ${name}`, data);
//     return data;
//   } catch (error) {
//     console.error(`Error fetching Song "${name}":`, error);
//     return null; // Return null if the Song is not found or there's an error
//   }
// }



  



    