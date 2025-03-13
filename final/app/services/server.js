import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

// Habilitar CORS para todas las rutas
app.use(cors());

// Ruta para obtener información de un álbum
app.get("/api/album/:albumId", async (req, res) => {
    const { albumId } = req.params;
    try {
        const response = await fetch(`https://api.deezer.com/album/${albumId}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch album" });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});