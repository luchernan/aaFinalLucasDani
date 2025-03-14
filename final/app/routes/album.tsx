import React, { useState, useMemo, useEffect } from "react";
import { useLoaderData } from "react-router";
import type { Album, Artist ,Track, AlbumResponse, TrackArtist, TrackAlbum } from "../types/interfaces";
import { getInfoByAlbumId, getSongsByAlbum } from "../services/api";
import CardList from "../components/CardList";
import AlbumCardList from "~/components/AlbumCardList";
import { CheckCircle, AlertTriangle, X } from "lucide-react";
import { useNavigate } from "react-router";


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




// Loader para obtener los datos del álbum y sus canciones
export async function loader({ params }: { params: { albumId: string } }) {
  const albumId = params.albumId;

  if (!albumId) {
    throw new Error("Album ID is required");
  }

  try {
    // Obtener la información del álbum
    const album = await getInfoByAlbumId(albumId);

    // Obtener las canciones del álbum
    const tracks = await getSongsByAlbum(album.tracklist);

    return { album, tracks };
  } catch (error) {
    console.error("Error fetching album data:", error);
    throw new Error("Failed to load album data");
  }
}

const Album = () => {
    const { album, tracks } = useLoaderData() as { album: Album; tracks: TrackAlbum[] };
    const [songs, setSongs] = useState<TrackAlbum[]>([]);
    const [favorites, setFavorites] = useState<TrackAlbum[]>([]);
    const [alert, setAlert] = useState<{ message: string; type: "success" | "warning" } | null>(null);
     const navigate = useNavigate();
  
   
    useEffect(() => {
      setSongs(tracks);
    }, [tracks]);
  
    // Cargar favoritos desde localStorage
    useEffect(() => {
      if (typeof window !== "undefined") {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(storedFavorites);
      }
    }, []);
  
    // Función para agregar a favoritos
    const addToFavorites = (index: number) => {
      if (!songs[index]) return; // Verifica que el índice sea válido
      const music = songs[index];
      const updatedFavorites = [...favorites, music];
      setFavorites(updatedFavorites);
      if (typeof window !== "undefined") {
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }
      setAlert({ message: `"${music.title}" added to favorites!`, type: "success" });
      setTimeout(() => setAlert(null), 3000);
    };
  
    // Función para eliminar de favoritos
    const removeFromFavorites = (index: number) => {
      if (!songs[index]) return; // Verifica que el índice sea válido
      const music = songs[index];
      const updatedFavorites = favorites.filter((fav) => fav.id !== music.id);
      setFavorites(updatedFavorites);
      if (typeof window !== "undefined") {
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }
      setAlert({ message: `"${music.title}" removed from favorites!`, type: "success" });
      setTimeout(() => setAlert(null), 3000);
    };
    
      const handleShowArtist = (artistId: number) => {
        navigate(`/artist/${artistId}`);
      };
      
  
    console.log(tracks);
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">{album.title}</h1>
        <img src={album.cover_big} alt={`Cover of ${album.title}`} className="w-64 h-64 rounded-md mb-4" />
  
        {tracks.length === 0 ? (
          <p className="text-gray-500 mt-4">No tracks found for this album.</p>
        ) : (
          <AlbumCardList
            tracks={songs} // Pasa `songs` en lugar de `tracks`
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            isFavorite={(index) => {
              if (!songs[index]) return false; // Verifica que el índice sea válido
              return favorites.some((fav) => fav.id === songs[index].id);
            }}
            showArtist={handleShowArtist}
            
          />
        )}
      </div>
    );
  };
  
  export default Album;