import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Rating from "../rating/Rating";
import {FaStar} from "react-icons/fa";
import "./profile.scss"
import { AppContext } from "../../context/context";

const Profile = () => {
  const {user} = useContext(AppContext)
  const [review, setReview] = useState({});

  const[dev, setDev] = useState({})
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];
  console.log(path);

  useEffect(() => {
    const getDev = async () => {
      const res = await axios.get("/dev/" + path);
      console.log(res.data);
      setDev(res.data);

    };

    getDev();
  }, [path]);

  console.log(dev)


       








  return (
    <div className='profile'>
        <div className="top">
           
            <div className="right">
            <img className="img" src="/images/image1.jpg" alt="" />
            <Rating className="rating"/>
        
            </div>
            <div className="left">
            <span className="username">{dev.username}</span>
          <span className="email">{dev.email}</span>
       
          
          
       
            </div>

        </div>
        <div className="skills">
        <span className="item">{dev.technology}</span>
        </div>
        <div className="review">
          <Link to={`/review/${dev._id}`}>

          <button>
            review
          </button>
          
          </Link>
          
       
         
        </div>
        <div className="down">
            contact
            
        </div>
    </div>
  )
}

export default Profile