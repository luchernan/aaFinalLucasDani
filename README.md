# Final React Router Project

This is a project developed with **React Router** that uses the **Deezer API** to display information about songs, albums, and artists. It allows users to search for songs, add them to favorites, and explore artist and album details.

## Features

- **Song search** through the Deezer API.
- **Favorites:** Users can add and remove songs from their favorites list.
- **Album and artist view.**
- **Modern interface** using **Tailwind CSS.**.
- **Navigation with React Router** for a seamless experience.

## Technologies Used

- **React**
- **React Router**
- **Tailwind CSS**
- **Deezer API**
- **LocalStorage** for managing favorites

## Project Structure

```
📦 Proyecto
├── 📂 src
│ ├── 📂 components
│ │ ├── AlbumCardList.tsx 
│ │ ├── ArtistCardList.tsx 
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ ├── CardAlbum.tsx 
│ │ ├── CardArtist.tsx 
│ │ ├── CardList.tsx
│ │ ├── Footer.tsx
│ │ ├── Header.tsx
│ │ ├── SearchBar.tsx
│ ├── 📂 pages
│ │ ├── album.tsx
│ │ ├── artist.tsx
│ │ ├── favorites.tsx
│ │ ├── home.tsx
│ │ ├── search.tsx
│ ├── 📂 services
│ │ ├── api.ts
│ ├── 📂 types # Definición de tipos TypeScript
│ │ ├── interfaces.ts
│ ├── 📜 app.css
│ ├── 📜 root.tsx
│ ├── 📜 routes.ts
```

## Component Explanation

### **Button.tsx**
Reusable component to display buttons with different styles depending on the variant (`album`, `artist`, `add`, `remove`).

```tsx
const variants: Record<Variant, string> = {
  album: "flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300",
  artist: "flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300",
  add: "flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300",
  remove: "mt-3 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300 w-full",
};

function Button({ text, variant, onClick }: ButtonProps) {
  return (
    <button className={`${variants[variant]} text-white font-bold py-2 px-4 rounded cursor-pointer`} onClick={onClick}>
      {text}
    </button>
  );
}
```

### **Card.tsx**
Component that displays song information, including an image, title, and options to add or remove from favorites.

```tsx

const Card = ({ track, index, addToFavorites, removeFromFavorites, isFavorite }: CardProps) => {
    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFromFavorites(index);
        } else {
            addToFavorites(index);
        }
    };

    return (
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:bg-zinc-800 transition duration-300 flex flex-col items-center border border-zinc-700">
            <img src={track.album.cover_big} alt={`Cover of ${track.album.title}`}
                className="w-80 h-80 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300" />
            <h3 className="text-white text-lg font-semibold mt-4 truncate w-48 text-center">{track.title}</h3>
            <div className="text-gray-400 text-sm truncate w-48 text-center">{track.artist.name}</div>

            <div className="flex gap-3 mt-4">
                <Button text={isFavorite ? "❌ Remove from Favorites" : "⭐ Add to Favorites"}
                    variant={isFavorite ? "remove" : "add"} onClick={handleFavoriteClick} />
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
```
### **CardArtist.tsx**
Component that displays song from an artist information, including a title, and options to add or remove from favorites.

```tsx
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

const CardArtist: React.FC<CardProps> = ({ track, index, addToFavorites, isFavorite, showAlbum ,removeFromFavorites, showArtist }) => {
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

export default CardArtist;
```

### **CardAlbum.tsx**
Component that displays song from an album information, including a title, and options to add or remove from favorites.

```tsx

import React from "react";
import type { Track, TrackAlbum ,Album } from "../types/interfaces";
import Button from "./Button";

interface CardProps {
  track: TrackAlbum;
  index: number;
  addToFavorites: (index: number) => void;
  removeFromFavorites: (index: number) => void;
  isFavorite: boolean;
  showArtist: (artistId: number) => void;
}

const CardAlbum: React.FC<CardProps> = ({ track, index, addToFavorites, isFavorite, removeFromFavorites, showArtist }) => {
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
          onClick={() => showArtist(track.artist.id)}
        >
          {track.artist.name}
        </div>
        <div className="flex gap-3 mt-3">
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

export default CardAlbum;
```

### **CardList.tsx**
Renders a list of songs using the `Card` component.

```tsx
const CardList = ({ tracks, addToFavorites, removeFromFavorites, isFavorite, showAlbum, showArtist }: CardListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {tracks.map((track, index) => (
        <Card
          key={track.id}
          track={track}
          index={index}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isFavorite={isFavorite(index)}
          showAlbum={showAlbum}
          showArtist={showArtist}
        />
      ))}
    </div>
  );
};
```

### **ArtistCardList.tsx**
Renders a list of songs from an artisst using the `CardArtist` component.

```tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getInfoByAlbumId, getSongsByAlbum } from "../services/api";
import type { Track, TrackAlbum, TrackArtist } from "../types/interfaces";
import CardArtist from "./CardArtist";
interface AlbumCardListProps {
  tracks: TrackArtist[];
  addToFavorites: (index: number) => void;
  removeFromFavorites: (index: number) => void;
  isFavorite: (index: number) => boolean;
  showArtist: (artistId: number) => void;
  showAlbum: (albumId: number) => void;
}

const ArtistCardList = ({ tracks, addToFavorites, showArtist, showAlbum, isFavorite,removeFromFavorites }: AlbumCardListProps) => {


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
    {tracks.map((track, index) => (
      <CardArtist
        key={track.id}
        track={track}
        index={index}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        isFavorite={isFavorite(index)}
        showArtist={showArtist}
        showAlbum={showAlbum}
      />
    ))}
  </div>
  );
};

export default ArtistCardList;



```
### **AlbumCardList.tsx**
Renders a list of songs from an album using the `CardAlbum` component.

```tsx
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
  showArtist: (artistId: number) => void;
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




```



### **SearchBar.tsx**
Search bar to filter songs.

```tsx
const SearchBar = ({ placeholder, onSearchChange, onSearchSubmit }: SearchBoxProps) => {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    onSearchChange(e.target.value);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSearchSubmit();
    }
  }

  return (
    <div className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-full shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-green-500 transition duration-200">
      <input
        type="search"
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="w-full px-4 py-2 text-gray-700 outline-none bg-transparent"
      />
      <button
        onClick={onSearchSubmit}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-r-full hover:bg-green-600 transition duration-200"
      >
        Buscar
      </button>
    </div>
  );
};
```

### **Header.tsx**
Application header with the logo and favorites button.

```tsx
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
```

### **Footer.tsx**
Footer with author information.

```tsx
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
```

## Page Explanation

### **Search Page (`search.tsx`)**

The search page allows users to enter a term and find songs through the Deezer API.

#### **Main States:**
```tsx
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState<string>("");
  const [songs, setSongs] = useState<Track[]>([]);
  const [favorites, setFavorites] = useState<Track[]>([]);
  const [alert, setAlert] = useState<{ message: string; type: "success" | "warning" } | null>(null);
```

#### **Search Logic:**
```tsx
  const handleSearchSubmit = async () => {
    if (search.trim() === "") return;

    setIsLoading(true);
    try {
      const fetchedSongs = await getSongsByName(search);
      setSongs(fetchedSongs);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
    setIsLoading(false);
  };
```

#### **Displaying Found Songs:**
```tsx
return (
    <div className="min-h-screen p-4 bg-black flex flex-col items-center">
      <SearchBar
        placeholder="Search a song"
        onSearchChange={setSearch}
        onSearchSubmit={handleSearchSubmit}
      />

      {isLoading ? (
        <p className="text-gray-500 mt-4">No songs search.</p>
      ) : songs.length === 0 ? (
        <p className="text-gray-500 mt-4">No songs found.</p>
      ) : (
        <CardList
          tracks={songs}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isFavorite={(index) => favorites.some((fav) => fav.id === songs[index].id)}
          showAlbum={(albumTitle) => console.log(`Showing album: ${albumTitle}`)}
          showArtist={(artistName) => console.log(`Showing artist: ${artistName}`)}
        />
      )}
      {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
    </div>
  );
```
### **Album Page  (`album.tsx`)**

Allows showing the album the song belongs to.
#### **Main States:**
```tsx
  const { album, tracks } = useLoaderData() as { album: Album; tracks: TrackAlbum[] };
    const [songs, setSongs] = useState<TrackAlbum[]>([]);
    const [favorites, setFavorites] = useState<TrackAlbum[]>([]);
     const navigate = useNavigate();
  
```

#### **Logic:**
```tsx

export async function loader({ params }: { params: { albumId: string } }) {
  const albumId = params.albumId;

  if (!albumId) {
    throw new Error("Album ID is required");
  }

  try {

    const album = await getInfoByAlbumId(albumId);


    const tracks = await getSongsByAlbum(album.tracklist);

    return { album, tracks };
  } catch (error) {
    console.error("Error fetching album data:", error);
    throw new Error("Failed to load album data");
  }
}
```


#### **Displaying Found Songs:**
```tsx
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
```



### **Artist Page  (`artist.tsx`)**

Allows showing the artist info and songs.
#### **Main States:**
```tsx
    const { artist, tracks } = useLoaderData() as { artist: Artist; tracks: TrackArtist[] };
    const [songs, setSongs] = useState<TrackArtist[]>([]);
    const [favorites, setFavorites] = useState<TrackArtist[]>([]);
    const navigate = useNavigate();
  
```


#### **Logic:**
```tsx

export async function loader({ params }: { params: { artistId: string } }) {
    const artistId = params.artistId;
  
    if (!artistId) {
      throw new Error("Artist ID is required");
    }
  
    try {
 
      const artist = await getInfoByArtistId(artistId);
      if (!artist || !artist.tracklist) {
        throw new Error("Artist tracklist not found");
      }
  
   
      const tracks = await getSongsByArtist(artist.tracklist);
  
      return { artist, tracks };
    } catch (error) {
      console.error("Error fetching artist data:", error);
      throw new Error("Failed to load artist data");
    }
  }
```



#### **Displaying Found Songs:**
```tsx

    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">{artist.name}</h1>
        <img src={artist.picture_big} alt={`Cover of ${artist.name}`} className="w-64 h-64 rounded-md mb-4" />
  
        {tracks.length === 0 ? (
          <p className="text-gray-500 mt-4">No tracks found for this artist.</p>
        ) : (
          <ArtistCardList
            tracks={songs} 
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            isFavorite={(index) => {
              if (!songs[index]) return false; 
              return favorites.some((fav) => fav.id === songs[index].id);
            }}
            showAlbum={handleShowAlbum}
            showArtist={handleShowArtist}
           
          />
        )}
      </div>
    );
  };
```




### **Favorites Page  (`favorites.tsx`)**

Allows storing and displaying songs marked as favorites using `localStorage`.

#### **Loading Favorites from `localStorage`:**
```tsx
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(storedFavorites);
    }, []);
```

#### **Removing a Song from Favorites:**
```tsx
    const removeFromFavorites = (index: number) => {
        const updatedFavorites = favorites.filter((_, i) => i !== index);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };
```

#### **Displaying Favorite Songs:**
```tsx
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
```

## Deezer API Key
This project uses the Deezer API via RapidAPI. Make sure to configure your own API key in the `api.ts` file:

```typescript
  const BASE_URL = "https://deezerdevs-deezer.p.rapidapi.com/search";
  const HEADERS = {
    "X-RapidAPI-Key": "3d18fadb96mshfdcba924e6d39f5p136872jsn47e833abda1a",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  };

```

## Authors
- **Daniel Sánchez Ruiz**
- **Lucas Hernández Martín de San Pablo**


