import React from "react";
import Logging from "./log/Logging";
import Page from "./pages/loginpages/LoggInPage";
import ProductPage from "./pages/productpages/ProductPage";
import ButtonContainer from "./Button/ButtonContainer";
import Menu from "./components/menu/Menu";
import TmdbMain from "./tmdb/tmdbMain";
import { RouterProvider } from "react-router-dom";
import router from "./router";
export default function App() {
  return (
    <div>
      {/* <Logging isLoggedIn={false} />
      <Page /> */}
      {/* <ProductPage></ProductPage> */}
      {/* <ButtonContainer></ButtonContainer> */}
      {/* <Menu></Menu> */}
      {/* <TmdbMain /> */}
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}
