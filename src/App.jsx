import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Hotels from "./components/Hotels";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoteles" element={<Hotels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
