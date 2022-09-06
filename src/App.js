import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/Heading/Heading";
import Categories from "./components/Categories/Categories";
import Home from "./components/Layout/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Architecture from "./components/Architecture/Architecture";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Heading />
      <Categories />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/architecture" element={<Architecture/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
