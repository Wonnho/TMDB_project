import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MakeKnown from "../pages/MakeKnown";
import Layout from "../Layout";
import MakeKnownDetail from "../pages/MakeKnownDetail";
import MakeKnownCreate from "../pages/MakeKnownCreate";
import NotFound from "../pages/tmdbpages/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      { path: "/not-found", element: <NotFound></NotFound> },

      {
        path: "/makeknown",
        element: <MakeKnown />,
      },
      {
        path: "/makeknown/create",
        element: <MakeKnownCreate />,
      },
      {
        path: "/makeknown/:makeId",
        element: <MakeKnownDetail />,
      },
    ],
  },
]);

export default router;
