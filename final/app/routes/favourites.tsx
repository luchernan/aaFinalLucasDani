import React, { useEffect, useState } from "react";
import type { Track } from "../types/interfaces";
import { Link } from "react-router";

const Favourites = () => {
    const [favorites, setFavorites] = useState<Track[]>([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(storedFavorites);
    }, []);

    const removeFromFavorites = (index: number) => {
        const updatedFavorites = favorites.filter((_, i) => i !== index);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <div className="p-6 min-h-screen text-white">
            <h1 className="text-4xl font-bold mb-6 text-center text-green-400">🎵 Favorites </h1>

            {favorites.length === 0 ? (
                <div className="text-center mt-10">
                    <p className="text-lg text-gray-300">
                        You haven't added any songs to your favorites yet. Start exploring and save your favorite tunes! 🎶
                    </p>

                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favorites.map((music, index) => (
                        <div key={music.id} className="bg-zinc-800 p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            <img
                                src={music.album.cover_big}
                                alt={`Cover of ${music.album.title}`}
                                className="w-full rounded-md shadow-md"
                            />
                            <h3 className="text-white text-lg font-semibold mt-3 truncate">{music.title}</h3>
                            <div className="text-gray-400 text-sm truncate">{music.artist.name}</div>
                            <audio src={music.preview} controls className="w-full mt-3 rounded-lg" />
                            <button
                                onClick={() => removeFromFavorites(index)}
                                className="mt-3 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200 w-full">
                                ❌ Remove from favorites
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <Link
                to="/"
                className="mt-6 inline-block bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200">
                🔍 Discover Music
            </Link>
        </div>
    );
};

export default Favourites;
