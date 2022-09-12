import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AppContext } from "./context/context";
import Login from "./pages/login/Login";
import Profile from "./components/profile/Profile";
import Review from "./components/review/Review";
import "./app.scss"

function App() {
  const {user,dispatch } = useContext(AppContext)
  return (
    <Router>
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dev/:id" element={<Profile />} />
        <Route path="/review/:id" element={<Review />} />
      </Routes>
    </div>
  
  </Router>

  );
}

export default App;
