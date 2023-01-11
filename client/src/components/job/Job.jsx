import axios from "axios";
import React, { useState, useEffect } from "react";
import { MdPlace } from "react-icons/md";
import FilterBar from "../filterbar/FilterBar";
import JobDetails from "../jobdetails/JobDetails";
import "./job.scss";

const Job = ({ job }) => {
  console.log(job);

  return (
    <div className="job">
      <div className="partofJob">
        <div className="top">
          <img src="/images/job-logo.png" />
          <span className="title">{job.title}</span>
        </div>
        <div className="down">
          <span className="compagny">{job.compagny}</span>
          <span className="type">{job.type}</span>
          <span className="location">{job.location}</span>
        </div>
      </div>

      <div className="detailsJob">
        <span className="title">{job.title}</span>
        <p className="description">{job.description} </p>
        {/* <JobDetails jobDetails={jobDetails} /> */}

        {/* <div className="top">
          <h1 className="tite">{jobDetails.title}</h1>
        </div>
        <div className="center">
          <div className="left">
            <h2 className="compagny">{jobDetails.compagny}</h2>
            <span className="location">{jobDetails.location}</span>
            <MdPlace className="place" />
          </div>

          <div className="right">
            <span className="type">{jobDetails.type}</span>
            <button className="apply">Apply</button>
          </div>
        </div>
        <div className="down">
          <p className="description">{jobDetails.description} </p>
        </div> */}
      </div>
    </div>
  );
};

export default Job;
