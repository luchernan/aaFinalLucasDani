// CardList.tsx
import React from "react";
import type { Track } from "../types/interfaces";
import Card from "./Card";

interface CardListProps {
  tracks: Track[];
  addToFavorites: (index: number) => void;
  showAlbum: (albumTitle: string) => void;
  showArtist: (artistName: string) => void;
}

const CardList = ({ tracks, addToFavorites, showAlbum, showArtist }: CardListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {tracks.map((track, index) => (
        <Card
          key={track.id}
          track={track}
          index={index}
          addToFavorites={addToFavorites}
          showAlbum={showAlbum}
          showArtist={showArtist}
        />
      ))}
    </div>
  );
};

export default CardList;