import React from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { AppContext } from "../../context/context";
import { useContext } from "react";

const Navbar = () => {
  const { user, dispatch } = useContext(AppContext);

  const Navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });

    Navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="title">
        <Link to="/" className="link">
          {/* Job App */}
          <img src="/images/job-logo.png" style={{width:"150px"}}/>
        </Link>
        {/* <span className="version">for devs</span> */}
      </div>

      {user ? (
        <>
          <Link to="/forum" className="link">
            <span className="item">Forum</span>
          </Link>
          <Link to="/Jobs" className="link">
            <span className="item">Jobs</span>
          </Link>
          <Link to="/editProfile" className="link">
            <span className="item">Profile</span>
          </Link>

          <span className="logout" onClick={handleLogout}>
            Logout
            <FaSignOutAlt className="signoutIcon" />
          </span>
        </>
      ) : (
        <>
          <ul className="sign">
            <li className="sign">
              <Link to="login" className="link">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li className="sign">
              <Link to="/register" className="link">
                <FaUser /> register
              </Link>
            </li>
          </ul>
        </>
      )}

      {/* {user &&    <button className='logout'>test
        <FaSignOutAlt className='signoutIcon'/>

        </button>} */}
    </div>
  );
};

export default Navbar;
