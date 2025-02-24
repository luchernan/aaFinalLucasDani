import React from 'react';

type Music = {
    album: {
        cover_big: string;
        title: string;
    };
    title: string;
    artist: {
        name: string;
    };
    id: string | number;
};

type CardProps = {
    music: Music;
    index: number;
    addToFavorites: (index: number) => void;
    showAlbum: (albumTitle: string) => void;
    showArtist: (artistName: string) => void;
};

const Card: React.FC<CardProps> = ({ music, index, addToFavorites, showAlbum, showArtist }) => {
    return (
        <div>
            <img src={music.album.cover_big} alt="Imagen del artista" />
            <h3 id={`title${index}`} className="title">{music.title}</h3>
            <div className="autor">{music.artist.name}</div>
            <div className="fav">
                <button onClick={() => addToFavorites(index)}>Add to Favorites</button>
                <button onClick={() => showAlbum(music.album.title)}>Show Album</button>
                <button onClick={() => showArtist(music.artist.name)}>Show Artist</button>
            </div>
            <div id={`content${music.id}`} className="content"></div>
        </div>
    );
};

export default Card;
