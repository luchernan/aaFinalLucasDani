import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getInfoByAlbumId, getSongsByAlbum } from "../services/api";
import type { Track, TrackAlbum } from "../types/interfaces";
import CardAlbum from "./CardAlbum";
interface AlbumCardListProps {
  tracks: TrackAlbum[];
  addToFavorites: (index: number) => void;
  removeFromFavorites: (index: number) => void;
  isFavorite: (index: number) => boolean;
  showArtist: (artistName: string) => void;
}

const AlbumCardList = ({ tracks, addToFavorites, showArtist, isFavorite,removeFromFavorites }: AlbumCardListProps) => {
  // const { albumId } = useParams<{ albumId: string }>();
  // const { tracks } = useLoaderData() as { tracks: TrackAlbum[] };
  // const [isLoading, setIsLoading] = useState(true);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
    {tracks.map((track, index) => (
      <CardAlbum
        key={track.id}
        track={track}
        index={index}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        isFavorite={isFavorite(index)}
        showArtist={showArtist}
      />
    ))}
  </div>
  );
};

export default AlbumCardList;


