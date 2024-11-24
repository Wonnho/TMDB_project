import React from "react";
import Logging from "./log/Logging.jsx";
import Page from "./pages/loginpages/LoggInPage.jsx";
import ProductPage from "./pages/productpages/ProductPage.jsx";
import ButtonContainer from "./Button/ButtonContainer.jsx";
import Menu from "./components/menu/Menu.jsx";
import TmdbMain from "./tmdb/tmdbMain.jsx";
import { RouterProvider } from "react-router-dom";
//import router from "./router/index_2";
import router from "./router/index.jsx";
//import Button from "./eventhandler/Button";
//import Counter from "./components/Counter";

export default function App() {
  // function alertMessage(event) {
  //   console.log(event.target.textContent);
  //   alert("catious when use dynamic routing ");
  // }

  return (
    <>
      {/* <div onClick={alertMessage}> */}
      {/* warning!!! */}
      {/* <Counter></Counter> */}
      {/* <Logging isLoggedIn={false} />
      <Page /> */}
      {/* <ProductPage></ProductPage> */}
      {/* <ButtonContainer></ButtonContainer> */}
      {/* <Menu></Menu> */}
      {/* <TmdbMain /> */}
      {/* <Button></Button> */}
      <RouterProvider router={router}> </RouterProvider>
      {/* </div> */}
    </>
  );
}
