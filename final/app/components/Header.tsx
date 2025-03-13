import React from "react";
import { useNavigate } from "react-router";
import spotifyLogo from "../img/Spotify_Full_Logo_RGB_Green.png";

function Header() {
    const navigate = useNavigate();

    const goToFavorites = () => {
        navigate("/favorites");
    };

    return (
        <div className="container flex justify-center items-center my-4 bg-black p-2">
            <a href="/">
                <img src={spotifyLogo} alt="Spotify Logo" width="280" />
            </a>
            <button
                onClick={goToFavorites}
                className="flex items-center m-6 text-white hover:text-red-400 transition duration-200 p-3 rounded-full hover:bg-zinc-800 bg-green-400"
            >
                <i className="fa-solid fa-heart text-2xl"></i>
            </button>
        </div>
    );
}

export default Header;