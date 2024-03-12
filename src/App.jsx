import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Hotels from "./components/Hotels";
import Navbar from "./components/Navbar";
import Hotel from "./components/Hotel";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels/:city/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
