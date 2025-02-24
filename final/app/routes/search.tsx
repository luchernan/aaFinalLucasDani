import React, { useState, useMemo, useEffect } from "react";
import type { Track } from "../types/interfaces";
import { useLoaderData } from "react-router";
import SearchBox from "../components/SearchBar";
import CardList from "../components/CardList"; 

const Search = () => {
  
  const [isLoading, setIsLoading] = useState(true);


  const loaderData = useLoaderData() as { songs: Track[] };

  const [search, setSearch] = useState<string>("");


  //filter
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

  
  const addToFavorites = (index: number) => {
    console.log(`Added song at index ${index} to favorites`);
  };

  const showAlbum = (albumTitle: string) => {
    console.log(`Showing album: ${albumTitle}`);
  };

  const showArtist = (artistName: string) => {
    console.log(`Showing artist: ${artistName}`);
  };

  return (
    <div>
      <SearchBox placeholder="Search a song" onSearchChange={setSearch} />

      {filteredSongs.length === 0 ? (
        <p className="text-gray-500 mt-4">No songs found.</p>
      ) : (
        <CardList
          tracks={filteredSongs}
          addToFavorites={addToFavorites}
          showAlbum={showAlbum}
          showArtist={showArtist}
        />
      )}
    </div>
  );
};

export default Search;

