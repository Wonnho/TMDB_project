import React from "react";
import Logging from "./log/Logging";
import Page from "./pages/loginpages/LoggInPage";
import ProductPage from "./pages/productpages/ProductPage";
import ButtonContainer from "./Button/ButtonContainer";
import Menu from "./components/menu/Menu";
import TmdbMain from "./tmdb/tmdbMain";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import Button from "./eventhandler/Button";
import Counter from "./components/Counter";

export default function App() {
  function alertMessage(event) {
    console.log(event.target.textContent);
    alert("catious when use dynamic routing ");
  }

  return (
    <>
      {/* <div onClick={alertMessage}> */}
        {/* warning!!! */}
        <Counter></Counter>
        {/* <Logging isLoggedIn={false} />
      <Page /> */}
        {/* <ProductPage></ProductPage> */}
        {/* <ButtonContainer></ButtonContainer> */}
        {/* <Menu></Menu> */}
        {/* <TmdbMain /> */}
        {/* <RouterProvider router={router}> </RouterProvider> */}
        {/* <Button></Button> */}
      {/* </div> */}
    </>
  );
}
