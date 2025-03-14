import React from "react";
import type { Track, TrackAlbum ,Album, TrackArtist } from "../types/interfaces";
import Button from "./Button";

interface CardProps {
  track: TrackArtist;
  index: number;
  addToFavorites: (index: number) => void;
  removeFromFavorites: (index: number) => void;
  isFavorite: boolean;
  showArtist: (artistId: number) => void;

  showAlbum: (artistId: number) => void;
}

const CardAlbum: React.FC<CardProps> = ({ track, index, addToFavorites, isFavorite, showAlbum ,removeFromFavorites, showArtist }) => {
    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFromFavorites(index);
        } else {
            addToFavorites(index);
        }
    };
    return (
      <div className="bg-zinc-900 p-4 rounded-lg shadow-md hover:bg-zinc-800 transition duration-200 flex flex-col items-center">
        <h3 className="text-white text-lg font-semibold mt-3 truncate w-40 text-center">{track.title}</h3>
        <div
          className="text-gray-400 text-sm truncate w-40 text-center cursor-pointer hover:text-white"
        
        >
          {track.artist.name}
        </div>
        <div className="flex gap-3 mt-3">
        <Button
          onClick={() => showAlbum(track.album.id)}
          text="Album"
          variant="album"
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

export default CardAlbum;