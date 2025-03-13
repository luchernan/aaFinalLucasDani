import React from 'react'
import spotifyLogo from '../img/Spotify_Full_Logo_RGB_White.png';

function Footer() {
    return (
        <footer className="py-3 bg-black">
            <div className="m-5">
                <div className="flex justify-between items-center">
                    <div className="text-gray-500 mt-1">
                        Daniel Sánchez and Lucas Hernández 2ºDAW
                    </div>
                    <div>
                        <img src={spotifyLogo} alt="Spotify Logo" className="w-30" />
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;

