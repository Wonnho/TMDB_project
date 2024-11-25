import React, { useState } from "react";
import Logging from "./log/Logging";
import Page from "./pages/loginpages/LoggInPage";
import Menu from "./components/menu/Menu";
import TmdbMain from "./tmdb/tmdbMain";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
