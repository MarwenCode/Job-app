import express from "express";
import Job from "../models/Job.js"
const jobRoute = express.Router()



//create a job
jobRoute.post("/", async(req, res) => {
    try {
        const newJob = new Job(req.body);
        const job = await newJob.save();
        res.status(200).json(job)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all job 
jobRoute.get("/", async(req, res) => {
    try {
        const jobs = await Job.find()
        res.status(200).json(jobs)
        
    } catch (error) {
        res.status(500).json(error)
    }

})



export default jobRoute