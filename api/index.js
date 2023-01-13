import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import multer from "multer";
import path from 'path';
import authRouteDev from "./routes/authDev.js";
import authRouteUser from "./routes/authUser.js";
import userRoute from "./routes/users.js";
import devRoute from "./routes/devs.js";
import questionRoute from "./routes/questions.js";
import answerRoute from "./routes/answers.js";
import reviewRoute from "./routes/review.js";
import jobRoute from "./routes/job.js";
import { fileURLToPath } from "url";
import cors from "cors"

const app = express()
dotenv.config()

const connect = async () => {
    try {
      
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongoDB")
        
    } catch (error) {
        throw error;
        
    }
}


//upload pic 

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log("images", __dirname);

app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});






app.use(cors())


app.use(express.json());
app.use("/api/auth",authRouteDev );
app.use("/api/auth",authRouteUser );
app.use("/api/user", userRoute);
app.use("/api/dev", devRoute);
app.use("/api/question", questionRoute)
app.use("/api/answers", answerRoute);
app.use("/api/review", reviewRoute);
app.use("/api/job", jobRoute);



app.listen(8000, () => {
    connect();
    console.log("connected to backend")
})