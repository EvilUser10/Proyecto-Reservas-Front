import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Hotels from "./components/Hotels";
import Hotel from "./components/Hotel";
import Header from "./components/Header";
import Register from "./components/Register";
import Footer from "./components/Footer";
import { useState, useContext } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Estado que indica si el usuario está autenticado


  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels/:city/:id" element={<Hotel />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
