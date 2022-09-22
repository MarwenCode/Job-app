import axios from 'axios';
import React, {useState} from 'react'
import { useEffect } from 'react';
import Job from '../job/Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getJobs = async() => {
            const res = await axios.get("/job");
            console.log(res)
            setJobs(res.data)
        }

        getJobs()
    })
    



  return (
    <div className='jobs'>

        {jobs.map((job, index) => (

         <Job job={job} key={index}/>


        ))}

      

    </div>
  )
}

export default Jobs