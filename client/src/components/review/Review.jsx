import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../context/context";

const Review = () => {
    const {user} = useContext(AppContext)
    const [review, setReview] = useState([]);

    const[dev, setDev] = useState({})
    const location = useLocation();
    console.log(location);
    const path = location.pathname.split("/")[2];
    console.log(path);
   


      // fetch reviews 
      useEffect(() => {
        const fetchReviews = async () => {
          // const res = await axios.get("/review");
          const res = await axios.get(`/review/${user._id}`);
        //   const res = await axios.get("/review");
        //   const res = await axios.get("/review"+ path);
          console.log(res);
          setReview(res.data);
        };
    
        fetchReviews();
      }, [path]);

   

    console.log(review)


  return (
    <div>Review</div>
  )
}

export default Review