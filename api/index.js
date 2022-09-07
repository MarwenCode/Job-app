import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import multer from "multer";
import path from 'path';
import authRouteDev from "./routes/authDev.js";
import authRouteUser from "./routes/authUser.js";
import userRoute from "./routes/users.js"
import { fileURLToPath } from "url";

const app = express()
dotenv.config()

const connect = async () => {
    try {
        // await mongoose.connect("mongodb+srv://marwen:marwen@job-app.cwu2kuz.mongodb.net/job-app")
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongoDB")
        
    } catch (error) {
        throw error;
        
    }
}


app.use(express.json());
app.use("/api/auth/",authRouteDev );
app.use("/api/auth/",authRouteUser );
app.use("/api/user", userRoute);



app.listen(8000, () => {
    connect();
    console.log("connected to backend")
})