import React from "react";
import {Link} from "react-router-dom";

import "./dev.scss";

const Dev = ({ dev }) => {
  const profilepic = "http://localhost:8000/images/";
 
  return (
    <Link to={`/dev/${dev._id}`} className="link">

     <div className="dev">
      <div className="top">
        <div className="right">
          <img 
          className="img" 
          // src="/images/image1.jpg" alt="" 

          src={
            dev.profilePicture
              ? profilepic + dev.profilePicture
              : 
              "/images/noAvatar.png"
          }
          alt=""


          
          />
        </div>

        <div className="left">
          <span className="username">{dev.username}</span>
          <span className="email">{dev.email}</span>
          <span className="tech">{dev.technology}</span>
        </div>

    </div>

      <div className="down">
        <p className="desc"> {dev.description}</p>
      </div>
    </div>
    
    </Link>

    
  );
};

export default Dev;

