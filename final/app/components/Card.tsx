import React from "react";
import type { Track } from "../types/interfaces";

interface CardProps {
    track: Track;
    index: number;
    addToFavorites: (index: number) => void;
    showAlbum: (albumTitle: string) => void;
    showArtist: (artistName: string) => void;
}

const Card: React.FC<CardProps> = ({ track, index, addToFavorites, showAlbum, showArtist }) => {
    return (
        <div className="card">
            <img
                src={track.album.cover_big}
                alt={`Cover of ${track.album.title}`}
                className="album-cover"
            />
            <h3 className="title">{track.title}</h3>
            <div className="artist">{track.artist.name}</div>
            <div className="actions">
                <button onClick={() => addToFavorites(index)}>Add to Favorites</button>
                <button onClick={() => showAlbum(track.album.title)}>Show Album</button>
                <button onClick={() => showArtist(track.artist.name)}>Show Artist</button>
            </div>
        </div>
    );
};

export default Card;
