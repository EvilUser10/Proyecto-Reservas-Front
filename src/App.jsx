import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Hotels from './components/Hotels';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </Router>
  )
}

export default App;
