import express from "express";
import User from "../models/User.js";
const userRoute = express.Router();


//update user
userRoute.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
      try {
        const updatedUser = await User.findByIdAndUpdate(
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
  });


//get a user
userRoute.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  });

//get all users

userRoute.get("/", async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  });



export default userRoute;