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
        element: <Home />,
      },
      {
        path: "/movie",
        element: <MovieList />,
      },
      {
        // path: "/movies/:category", // 이걸 쓰면 movies/:id 랑 같은 코드여서
        // path: "/movies/category/:category", // movies/:id랑 구별을 주는 해당 코드를 사용하여야 한다

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
