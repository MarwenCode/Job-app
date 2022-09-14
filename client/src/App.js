import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AppContext } from "./context/context";
import Login from "./pages/login/Login";
import Profile from "./components/profile/Profile";
import Review from "./components/review/Review";
import RegisterClient from "./pages/registerClient/RegisterClient";
import LoginClient from "./pages/loginClient/LoginClient";
import "./app.scss";

function App() {
  const { user, dispatch } = useContext(AppContext);
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Home />} />

              <Route path="/dev/:id" element={<Profile />} />
              <Route path="/review/:id" element={<Review />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register/user" element={<RegisterClient />} />
              <Route path="/login/user" element={<LoginClient />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
