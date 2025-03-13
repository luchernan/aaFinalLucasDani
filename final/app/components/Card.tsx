import React from "react";
import type { Track } from "../types/interfaces";
import Button from "./Button";

interface CardProps {
  track: Track;
  index: number;
  addToFavorites: (index: number) => void;
  removeFromFavorites: (index: number) => void;
  isFavorite: boolean;
  showAlbum: (albumId: number) => void;
  showArtist: (artistId: number) => void;
}

const Card = ({
  track,
  index,
  addToFavorites,
  removeFromFavorites,
  showAlbum,
  showArtist,
  isFavorite,
}: CardProps) => {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(index);
    } else {
      addToFavorites(index);
    }
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:bg-zinc-800 transition duration-300 flex flex-col items-center border border-zinc-700">
      <img
        src={track.album.cover_big}
        alt={`Cover of ${track.album.title}`}
        className="w-80 h-80 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
      />
      <h3 className="text-white text-lg font-semibold mt-4 truncate w-48 text-center">
        {track.title}
      </h3>
      <div className="text-gray-400 text-sm truncate w-48 text-center">
        {track.artist.name}
      </div>

      <div className="flex gap-3 mt-4">
        <Button
          text={isFavorite ? "❌ Remove from Favorites" : "⭐ Add to Favorites"}
          variant={isFavorite ? "remove" : "add"}
          onClick={handleFavoriteClick}
        />
        <Button
          text="Album"
          variant="album"
          onClick={() => showAlbum(track.album.id)}
        />
        <Button
          onClick={() => showArtist(track.artist.id)}
          text="Artist"
          variant="artist"
        />
      </div>

      {track.preview && (
        <audio controls className="w-full mt-4 rounded-md shadow-inner">
          <source src={track.preview} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default Card;
