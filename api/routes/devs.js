import express from "express";
import DevUser from "../models/DevUser.js";
import Review from "../models/Review.js";
const devRoute = express.Router()


//update dev
devRoute.put("/:id", async(req, res) => {
    if (req.body.userId === req.params.id) {
        try {
          const updatedUser = await DevUser.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
          );
          res.status(200).json(updatedUser);
        } catch (error) {
          res.status(500).json(error);
        }
      } else {
        res.status(401).json("You can update only your account !");
      }

})


//get a user
devRoute.get("/:id", async (req, res) => {
    try {
      const user = await DevUser.findById(req.params.id).populate("review").exec();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  });
// devRoute.get("/:id", async (req, res) => {
//     try {
//       const user = await DevUser.findById(req.params.id);
//       const reviews = await Review.find({ userId: user._id })
//       .populate("review").exec();
//       res.status(200).json(reviews);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   });


  //get all users

  devRoute.get("/", async (req, res) => {
    try {
      const users = await DevUser.find()
      .populate("review").exec();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  export default devRoute;