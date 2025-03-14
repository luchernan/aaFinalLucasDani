import React, { useState, useMemo, useEffect } from "react";
import type { Track, Album } from "../types/interfaces";
import { useLoaderData, useOutletContext } from "react-router";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import { getSongsByName } from "../services/api";
import { useNavigate } from "react-router";
import { CheckCircle, AlertTriangle, X } from "lucide-react";

const Alert = ({ message, type, onClose }: { message: string; type: "success" | "warning"; onClose: () => void }) => {
  return (
    <div
      className={`fixed top-5 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg transition-all duration-300
        ${type === "success" ? "bg-green-600 text-white" : "bg-yellow-600 text-black"}`}
    >
      {type === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
      <span className="font-medium">{message}</span>
      <button className="ml-2 text-lg font-bold opacity-80 hover:opacity-100 transition" onClick={onClose}>
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState<string>("");
  const [songs, setSongs] = useState<Track[]>([]);
  const navigate = useNavigate(); // Hook para navegar
  const [favorites, setFavorites] = useState<Track[]>([]);
  const [alert, setAlert] = useState<{ message: string; type: "success" | "warning" } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFavorites(storedFavorites);
    }
  }, []);

  const handleSearchSubmit = async () => {
    if (search.trim() === "") return;

    setIsLoading(true);
    try {
      const fetchedSongs = await getSongsByName(search);
      setSongs(fetchedSongs);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
    setIsLoading(false);
  };
  
  const addToFavorites = (index: number) => {
    const music = songs[index];
    const updatedFavorites = [...favorites, music];
    setFavorites(updatedFavorites);
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
    setAlert({ message: `"${music.title}" added to favorites!`, type: "success" });
    setTimeout(() => setAlert(null), 3000);
  };
  
  const removeFromFavorites = (index: number) => {
    const music = songs[index];
    const updatedFavorites = favorites.filter((fav) => fav.id !== music.id);
    setFavorites(updatedFavorites);
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
    setAlert({ message: `"${music.title}" removed from favorites!`, type: "success" });
    setTimeout(() => setAlert(null), 3000);
  };


  const handleShowAlbum = (albumId: number) => {
    navigate(`/album/${albumId}`); 
  };

  const handleShowArtist = (artistId: number) => {
    navigate(`/artist/${artistId}`);
  };
  

  return (
    <div className="min-h-screen p-4 bg-black flex flex-col items-center">
    <SearchBar
      placeholder="Search a song"
      onSearchChange={setSearch}
      onSearchSubmit={handleSearchSubmit}
    />
 {isLoading ? (
        <p className="text-gray-500 mt-4">No songs search.</p>
      ) : songs.length === 0 ? (
        <p className="text-gray-500 mt-4">No songs found.</p>
      ) : (
        <CardList
          tracks={songs}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isFavorite={(index) => favorites.some((fav) => fav.id === songs[index].id)}
          showAlbum={handleShowAlbum} 
          showArtist={handleShowArtist} 
        />
      )}
      {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
    </div>
  );
};

export default Search;