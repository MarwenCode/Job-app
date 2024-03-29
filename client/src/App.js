import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AppContext } from "./context/context";
import Login from "./pages/login/Login";
import Profile from "./components/profile/Profile";
import Review from "./components/review/Review";
import Contact from "./components/contact/Contact";
import Jobs from "./components/jobs/Jobs";
import Forum from "./components/forum/Forum";
import EditeProfile from "./pages/editeProfile/EditeProfile";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import RegisterClient from "./pages/registerClient/RegisterClient";
// import LoginClient from "./pages/loginClient/LoginClient";
import "./app.scss";
import FiltredJobs from "./components/filtredJobs/FiltredJobs";
import CreateJobs from "./pages/createJobs/CreateJobs";

function App() {
  const { user, dispatch } = useContext(AppContext);
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
            
              <Route path="/" element={user ? <Home /> : <Register />} />

              <Route path="/dev/:id" element={<Profile />} />
              <Route path="/review/:id" element={<Review />} />
              <Route path="/contact/:id" element={<Contact />} />
              <Route path="/jobs" element={<FiltredJobs />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login /> } />
              <Route path="/editProfile" element={<EditeProfile /> } />
              <Route path="/admin/createjobs" element={<CreateJobs /> } />
             

        
     
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;

