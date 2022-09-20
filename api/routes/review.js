import express from "express";
import DevUser from "../models/DevUser.js";
import User from "../models/User.js";
import Review from "../models/Review.js";
const reviewRoute = express.Router()

//create a new review
// reviewRoute.post("/:id", async (req,res) => {
//     try {
//        const devUser = await DevUser.findById(req.params.id)
//        if (devUser.devId !== req.body.userId) {
//         const newReview = new Review(req.body);
//         const review = await newReview.save();
//         res.status(200).json(review)
//        }else {
//         res.status(401).json("you can't make a review for your self");
//        }
       
        
//     } catch (error) {
//         res.status(500).json(error);
//     }
// })

//create a new review
reviewRoute.post("/:DevUserId", async (req, res) => {
    try {
      const newReview = await new Review({
        ...req.body,
        DevUserId: req.params.DevUserId,
      });
      const savedReview = await newReview.save();
  
      res.status(200).json(savedReview);
    } catch (error) {
      res.status(500).json(error);
    }
    console.log(req.body);
  });


//get all reviews userDev
reviewRoute.get("/:DevUserId", async (req, res) => {
    try {
      const reviews = await Review.find({
        reviewId: req.params.DevUserId,
      });
  
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  //delete a review
  reviewRoute.delete("/:id", async(req, res) => {
    try {
      const review = await Review.findById(req.params.id)
      if (review.userId === req.body.userId) {
        try {
          await review.deleteOne();
          res.status(200).json("review has been deleted")

        }catch {
          res.status(500).json(error);

       
      } }else {
        res.status(401).json("you can delete only your review");
      }
      
    } catch (error) {
      
    }
  })




export default reviewRoute
