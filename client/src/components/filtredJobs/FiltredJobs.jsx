import axios from "axios";
import React, { useState, useEffect } from "react";
import FilterBar from "../filterbar/FilterBar";
import Jobs from "../jobs/Jobs";

const FiltredJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get("https://api-job-app.onrender.com/api/job");
      // const res = await axios.get("/job");
      console.log(res);
      setJobs(res.data);
    };

    getJobs();
  }, []);

  // filter function to filter the jobs array based on the location and jobTitle
  const filteredJobs = jobs.filter(
    (job) =>
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      job.title.toLowerCase().includes(jobTitle.toLowerCase())
  );

  const onSearch = (newLocation, newJobTitle) => {
    setLocation(newLocation);
    setJobTitle(newJobTitle);
  };

  return (
    <div>
      <FilterBar onSearch={onSearch} />
      <Jobs jobs={filteredJobs} />
    </div>
  );
};

export default FiltredJobs;
