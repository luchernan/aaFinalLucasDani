import React, { useState, useMemo, useEffect } from "react";
import type { Route } from "../+types/root";
import { getSongs } from "../services/api";
import SearchBox from "../components/SearchBar";
import CardList from "../components/Card";

import type { Track } from "../types/interfaces";
import { useLoaderData } from "react-router";



function search() {
      // Loading state
  const [isLoading, setIsLoading] = useState(true);

  // Get Songs data from the loader
  const loaderData = useLoaderData() as { songs: Track[] };

 
    
const [search, setSearch] = useState<string>("");



const filteredSongs = useMemo(() => {
    return loaderData.songs.filter((song) =>
      song.title.toLowerCase().startsWith(search.toLowerCase())
    );
  }, [search, loaderData.songs]);

  useEffect(() => {
    if (loaderData.songs.length > 0) {
      setIsLoading(false); 
    }
  }, [loaderData.songs]);




  return (
    <div>

        <SearchBox
        placeholder="Write a Pokémon name"
        onSearchChange={setSearch}
        /> 
         {filteredSongs.length === 0 ? (
          <p className="text-gray-500 mt-4">No Pokémon found.</p>
        ) : (
          <CardList songs={filteredSongs} />
        )}

    </div>
  )
}

export default search


// export async function loader() {
//     try {
//       const songs: Track[] = await getSongs();
//       return { songs: songs };
//     } catch (error) {
//       console.error("Error fetching all Songs:", error);
//       return { songs: [] };
//     }
//   }




  
//   const setResult = new Set();
//   const filterResults = results.filter((result) => {
//     const duplicated = setResult.has(result.title);
//     setResult.add(result.title);
//     return !duplicated;
//   });

//   filterResults.forEach((music, index) => {
//     musics[index] = music;
//     const resultDiv = document.createElement("div");
//     resultDiv.id = music.id;
//     resultDiv.className = "result";
//     resultDiv.innerHTML = `
//                   <img src="${music.album.cover_big}" alt="Imagen del artista">
//                   <h3 id="title${index}" class="title">${music.title}</h3>
//                   <div class="autor">${music.artist.name}</div>
//                   <div class="fav">
//                       <button onclick="addToFavorites(${index})">Add to Favorites</button>
//                   </div>
//                   <div id="content${music.id}" class="content"></div>
//               `;
//     document.querySelector("#results").appendChild(resultDiv);