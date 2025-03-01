import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
// import { ChatdataContextProvider } from "../src/store/Chat-data-context";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
