import React from "react";
import {Link} from "react-router-dom"
import "./dev.scss";

const dev = ({ dev }) => {
  return (
    <Link to={`/dev/${dev._id}`} className="link">

     <div className="dev">
      <div className="top">
        <div className="right">
          <img className="img" src="/images/image1.jpg" alt="" />
        </div>

        <div className="left">
          <span>{dev.username}</span>
          <span>{dev.email}</span>
          <span>{dev.technology}</span>
        </div>

    </div>

      <div className="down">
        <p className="desc"> {dev.description}</p>
      </div>
    </div>
    
    </Link>

    
  );
};

export default dev;

