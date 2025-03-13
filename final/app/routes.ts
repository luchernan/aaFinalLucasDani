import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/home.tsx", [
    index("routes/search.tsx"),
    route("favorites", "routes/favourites.tsx"),
    route("album/:albumId", "routes/album.tsx"),
    route("artist/:artistId", "routes/artist.tsx"),
  ]),
] satisfies RouteConfig;