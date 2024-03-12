import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";

import Header from "./components/Header";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { About, Contact, Hoteles, Register, Signin } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hoteles" element={<Hoteles />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        
        </Routes>
    </BrowserRouter>
  );
}
export default App;
