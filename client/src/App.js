import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AppContext } from "./context/context";
import Login from "./pages/login/Login";
import "./app.scss"

function App() {
  const {user,dispatch } = useContext(AppContext)
  return (
    <Router>
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Login/> : <Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  
  </Router>

  );
}

export default App;
