import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/home.tsx", [
        index("routes/welcome.tsx"),
        route("favourites", "routes/favourites.tsx"),
        route("album", "routes/album.tsx"),
        route("artist", "routes/artist.tsx"),
    ]),

] satisfies RouteConfig;