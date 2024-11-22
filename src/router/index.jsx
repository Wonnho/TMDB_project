import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import MovieList from "../pages/tmdbpages/MovieList";
import MovieDetail from "../pages/tmdbpages/MovieDetail";
import NotFound from "../pages/tmdbpages/NotFound";
import Popular from "../pages/tmdbpages/categorypages/Popular";
import NowPlaying from "../pages/tmdbpages/categorypages/NowPlaying";
import TopRated from "../pages/tmdbpages/categorypages/TopRated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/posts",
        element: <MovieList />,
      },
      // {
      //   path: "/posts/:category",
      //   element: <MovieCatetegory />,
      // },
      {
        path: "/posts/now_playing",
        element: <NowPlaying />,
      },
      {
        path: "/posts/top_rated",
        element: <TopRated />,
      },
      {
        path: "/posts/popular",
        element: <Popular />,
      },
      {
        path: "/posts/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

export default router;
