import React, { useState, useMemo, useEffect } from "react";
import type { Track } from "../types/interfaces";
import { useLoaderData } from "react-router";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import { getSongsByName } from "../services/api"; 




const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState<string>("");
  const [songs, setSongs] = useState<Track[]>([]);

  // const loaderData = useLoaderData() as { songs: Track[] } | null;

  // useEffect(() => {
  //   if (loaderData?.songs) {
  //     setSongs(loaderData.songs);
  //     setIsLoading(false);
  //   }
  // }, [loaderData]);

  // Función para ejecutar la búsqueda en la API
  const handleSearchSubmit = async () => {
    if (search.trim() === "") return; // Evita búsquedas vacías

    setIsLoading(true);
    try {
      const fetchedSongs = await getSongsByName(search);
      setSongs(fetchedSongs);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
    setIsLoading(false);
  };

  // Filtrar canciones localmente si ya están cargadas
  // const filteredSongs = useMemo(() => {
    
  //   return songs.filter((song) =>

  //     song.title.toLowerCase().startsWith(search.toLowerCase())
  //   );
  // }, [search, songs]);

  return (
    <div>
      <SearchBar 
        placeholder="Search a song" 
        onSearchChange={setSearch} 
        onSearchSubmit={handleSearchSubmit} // Llama la búsqueda al presionar Enter
      />
    

      {isLoading ? (
        <p className="text-gray-500 mt-4">Loading...</p>
      ) : songs.length === 0 ? (
        <p className="text-gray-500 mt-4">No songs found.</p>
      ) : (
        <CardList
          tracks={songs}
          addToFavorites={(index) => console.log(`Added song at index ${index} to favorites`)}
          showAlbum={(albumTitle) => console.log(`Showing album: ${albumTitle}`)}
          showArtist={(artistName) => console.log(`Showing artist: ${artistName}`)}
        />
      )}
    </div>
  );
};

export default Search;
