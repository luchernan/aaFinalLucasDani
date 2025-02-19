fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=anuel", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3d18fadb96mshfdcba924e6d39f5p136872jsn47e833abda1a",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(JSON.stringify(data, null, 2)))
    .catch((err) => console.error(err));
  





const music: string = "anuel";
const url: string = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${music}`;

const headers: Record<string, string> = {
  "X-RapidAPI-Key": "3d18fadb96mshfdcba924e6d39f5p136872jsn47e833abda1a",
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
};

const fetchMusic = async () => {
  try {
    const response: Response = await fetch(url, { method: "GET", headers });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: any = await response.json(); // Puedes definir una interfaz para tipar mejor los datos
    return data;
  } catch (error) {
    console.error("Error fetching music:", error);
    return null;
  }
};

// Llamada a la función
fetchMusic().then((data) => console.log(data));
