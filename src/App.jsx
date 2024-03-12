import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Hotels from './components/Hotels';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
