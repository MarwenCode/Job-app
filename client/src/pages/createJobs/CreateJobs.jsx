import axios from "axios";
import React, { useState, useEffect } from "react";
import "./createjobs.scss";

const CreateJobs = () => {
  const [title, setJobTitle] = useState("");
  const [technology, setTech] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // create the job post using the form data here
    console.log(title, location, company, technology,type,  description);

    const addJob = {
      title,
      location,
      company,
      technology,
      description,
      type,
    };

    try {

        const res = await axios.post("https://api-job-app.onrender.com/api/job", addJob)
        // const res = await axios.post("/job", addJob)
        console.log(res.data);
        window.location.replace("/jobs");
        
    } catch (error) {
        console.log(error)
        
    }

    addJob()

  };

  return (
    <form className="create-job-post" >
      <label>
        Job Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <br />
      <label>
        Company Name:
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </label>
      <label>
        Technology:
        <input
          type="text"
          value={technology}
          onChange={(e) => setTech(e.target.value)}
        />
      </label>
      <br />
      <label>
        type:
        <input
          list="data"
          id="type"
          type="text"
          className="form-control"
          placeholder="add job type"
          required
          onChange={(e) => setType(e.target.value)}
        />
        <datalist id="data">
          <option value="remote"></option>
          <option value="hybride"></option>
        </datalist>
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <button  onClick={(e) => handleSubmit(e)}>Create Job Post</button>
    </form>
  );
};

export default CreateJobs;
