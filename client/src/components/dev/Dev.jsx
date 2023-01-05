import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {GrDownload} from 'react-icons/gr'
import { Link } from "react-router-dom";

import "./dev.scss";

const Dev = ({ dev }) => {
  const profilepic = "http://localhost:8000/images/";

  return (
    <Link to={`/dev/${dev._id}`} className="link">
      <div className="dev">
        <div className="top">
          <img
            className="img"
            // src="/images/image1.jpg" alt=""

            src={
              dev.profilePicture
                ? profilepic + dev.profilePicture
                : "/images/noAvatar.png"
            }
            alt=""
          />
          <span className="item">{dev.username}</span>
          <span className="item">mail: {dev.email}</span>
          <span className="item">language: <span>{dev.technology}</span> </span>
        </div>

        <div className="center">
          <p className="desc"> {dev.description}</p>
        </div>

        <div className="down">
          <ul>
            <li> <BsLinkedin style={{fontSize:"18px"}} /></li>
            <li> <MdEmail  style={{fontSize:"20px"}}/></li>
            <li className="cv"> <abbr title="clic here to download CV"><GrDownload  style={{fontSize:"20px"}}/></abbr> </li>
            
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Dev;
