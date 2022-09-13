import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Rating from "../rating/Rating";
import {FaStar} from "react-icons/fa";
import Reviews from "../reviews/Reviews";
import Review from "../review/Review";
import "./profile.scss"
import { AppContext } from "../../context/context";

const Profile = () => {
  const {user} = useContext(AppContext)
  const [reviews, setReviews] = useState([]);
  console.log(user)


  const[dev, setDev] = useState({})
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];
  console.log(path);

  useEffect(() => {
    const getDev = async () => {
      const res = await axios.get("/dev/" + path);
      // const res = await axios.get(`/review/${user._id}`);
      console.log(res.data);
      setDev(res.data);
      setReviews(res.data.review)

    };

    getDev();
  }, [path]);

  console.log(dev)


       // fetch reviews 
       useEffect(() => {
        const fetchReviews = async () => {
          // const res = await axios.get("/review");
          const res = await axios.get(`/review/${user._id}`);
        //   const res = await axios.get("/review");
        //   const res = await axios.get("/review"+ path);
          console.log(res);
          setReviews(res.data);
        };
    
        fetchReviews();
      }, []);

   

    console.log(reviews)


 


       








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
          {/* {dev.map((dev) => (

              <Review dev={dev} /> 

          ))} */}

          {reviews.map((review) => (
            // <Review review={review} />
            <p className="text"> {review.review}</p>

          ))}

        




    
          
       
         
        </div>
        <div className="down">
            contact
            
        </div>
    </div>
  )
}

export default Profile
