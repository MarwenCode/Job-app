import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Rating from "../rating/Rating";
import { FaStar } from "react-icons/fa";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Reviews from "../reviews/Reviews";
import Review from "../review/Review";
import "./profile.scss";
import { AppContext } from "../../context/context";

const Profile = () => {
  const { user } = useContext(AppContext);
  const profilepic = "http://localhost:8000/images/";

  //to fetch the reviews from the backend
  const [reviews, setReviews] = useState([]);

  //to create a new review
  const [review, setReview] = useState([]);
  const [reviewMode, setReviewtMode] = useState(false);
  console.log(user);

  const [dev, setDev] = useState({});
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];
  console.log(path);

  useEffect(() => {
    const getDev = async () => {
      const res = await axios.get("https://api-job-app.onrender.com/api/dev/" + path);
      // const res = await axios.get("/dev/" + path);
      // const res = await axios.get(`/review/${user._id}`);
      console.log(res.data);
      setDev(res.data);
      setReviews(res.data.review);
    };

    getDev();
  }, [path]);

  console.log(dev);

  // fetch reviews
  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     // const res = await axios.get("/review");
  //     const res = await axios.get(`/review/${user._id}`);
  //     //   const res = await axios.get("/review");
  //     //   const res = await axios.get("/review"+ path);
  //     console.log(res);
  //     setReviews(res.data);
  //   };

  //   fetchReviews();
  // }, []);

  console.log(reviews);

  //add a review
  const addReview = (e) => {
    e.preventDefault();
    const newReview = {
      username: user.username,
      review: review,
      userId: user._id,
    };

    try {
      const res = axios.post("https://api-job-app.onrender.com/api/review/" + path, newReview);
      // const res = axios.post("/review/" + path, newReview);
      setReview(res.data);
      console.log(res);
      window.location.replace(`/dev/${dev._id}`);

      console.log(res.data);
      setReviewtMode(false);
    } catch (err) {
      console.log(err);
    }

    addReview();
  };

  //delete a review
  const deleteReview = async (reviewId) => {
    console.log(reviewId);

    try {
      await axios.delete(`https://api-job-app.onrender.com/api/review/${reviewId}`, { data: { userId: user._id } });
      // await axios.delete(`/review/${reviewId}`, { data: { userId: user._id } });

      window.location.replace(`/dev/${dev._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile">
      <div className="top">
        <div className="right">
          <img
            className="img"
            src={
              dev.profilePicture
                ? profilepic + dev.profilePicture
                : "/images/noAvatar.png"
            }
          />
          <Rating className="rating" />
        </div>
        <div className="left">
          <span className="username">{dev.username}</span>
          <span className="email">{dev.email}</span>
          <span className="tech">{dev.technology}</span>
          <Link to={`/contact/${dev._id}`} className="link">
            <button className="contact">send me a message</button>
          </Link>
        </div>
      </div>
      <div className="description">
        <span className="desc">{dev.description}</span>
      </div>
      <div className="reviews">
        {/* {dev.map((dev) => (

              <Review dev={dev} /> 

          ))} */}

        {reviews.map((review) => (
          // <Review review={review} />
          <>
            <div className="review">
              <div className="top">
                <img
                  className="img"
                  // src={
                  //   user.profilePicture
                  //     ? user.profilePicture
                  //     :
                  //     "/images/noAvatar.png"
                  // }
                  // alt=""
                />

                <span className="user"> {review.username} </span>
                <span className="date">
                  {new Date(review.createdAt).toDateString()}
                </span>
                <AiFillDelete
                  className="deleteReviewIcon"
                  onClick={() => deleteReview(review._id)}
                />
              </div>

              <div className="down">
                <p className="text">{review.review}</p>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="fieldReview">
        <div className="item">
          <span className="title"> write your review</span>

          {reviewMode && (
            <>
               <button className="cancel" onClick={() => setReviewtMode(false)}>
              X
            </button>
            </>
          )}

          {!reviewMode && (
            <AiFillEdit
              className="addreviewIcon"
              onClick={() => setReviewtMode((prev) => !prev)}
            />
          )}
        </div>

        {reviewMode && (
          <>
            <textarea
              className="input"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <div >
            <button className="reviewBtn" onClick={(e) => addReview(e)}>
                Subbmit
              </button>

            </div>
         
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
