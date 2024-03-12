import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";

import Hotels from "./components/Hotels";
import Header from "./components/Header";
import Hotel from "./components/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoteles" element={<Hotels />} />
        <Route path="/hotels/:city/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
