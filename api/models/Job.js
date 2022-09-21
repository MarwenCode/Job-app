import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true, 
    },
    technology: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: true, 
    },
    company: {
        type: String,
     
    },
    location: {
        type: String,
      
    },
    type: {
        type: String,
       
    }

})

export default mongoose.model("Job", JobSchema)