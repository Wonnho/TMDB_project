import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import MovieList from "../pages/tmdbpages/MovieList";
import MovieDetail from "../pages/tmdbpages/MovieDetail";
import NotFound from "../pages/tmdbpages/NotFound";
// import Popular from "../pages/tmdbpages/categorypages/Popular";
// import NowPlaying from "../pages/tmdbpages/categorypages/NowPlaying";

import MovieCategory from "../pages/tmdbpages/categorypages/MovieCategory";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <MovieList />,
      },
      {
        path: "/movies/:category",
        element: <MovieCategory />,
      },

      
      // {
      //   path: "/movies/category/:id",
      //   element: <MovieDetail />,
      // },
      
      // {
      //   path: "/movies/:category/:id",
      //   element: <MovieDetail />,
      // },

      {
        path: "/movies/:id",
        element: <MovieDetail />,
      },
      // {
      //   path: "/movies/category/",
      //   element: <MovieCategory />,
      // },

      // {
      //   path: "/movies/now_playing",
      //   element: <NowPlaying />,
      // },
      // {
      //   path: "/posts/top_rated",
      //   element: <TopRated />,
      // },
      // {
      //   path: "/posts/popular",
      //   element: <Popular />,
      // },
    ],
  },
]);

export default router;
