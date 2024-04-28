import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Hotels from "./components/Hotels";
import Hotel from "./components/Hotel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Profile from "./pages/Profile";
import { AuthProvider } from "./components/auth/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Publicas */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:city/:id" element={<Hotel />} />

          {/* Privadas */}
          {/* <Route element={<ProtectedRoute/>}> */}
            <Route path="/profile" element={<Profile />} />
          {/* </Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
