import express from "express";
import DevUser from "../models/DevUser.js";
import bcrypt from "bcrypt";
const authRouteDev = express.Router();

//Regiter
authRouteDev.post("/register/dev", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create a new user

    const newDevUser = new DevUser({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      description:req.body.description,
      technologie:req.body.technologie,
      cost:req.body.cost
    });
    const devUser = await newDevUser.save();
    res.status(200).json(devUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//Login
authRouteDev.post("/login/dev", async (req, res) => {
  try {
    const devUser = await DevUser.findOne({ email: req.body.email });

    res.status(200).json(devUser);
    console.log(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
});









export default authRouteDev;