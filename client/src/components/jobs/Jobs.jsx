import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Job from "../job/Job";
import FilterBar from "../filterbar/FilterBar";
import JobDetails from "../jobdetails/JobDetails";
import "./jobs.scss";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const Jobs = ({jobs}) => {
  // const [jobs, setJobs] = useState([]);
  // const [filteredJobs, setFilteredJobs] = useState([]);
  const [location, setLocation] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const [pageNumber, setPageNumber] = useState(0);

  const jobsPerPage = 5;
  const currentPage = pageNumber * jobsPerPage;

  const pageCount = Math.ceil(jobs.length / jobsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // useEffect(() => {
  //   const getJobs = async () => {
  //     const res = await axios.get("/job");
  //     console.log(res);
  //     setJobs(res.data);
  //   };

  //   getJobs();
  // }, []);


 


 console.log(jobs)
  // const search = (location, title) => {
  //   return jobs.filter(job => {
  //     return job.location === location || job.title.includes(title);
  //   });
  // }


  // useEffect(() => {
  //   setFilteredJobs(jobs.filter(job => job.location === location || job.title.includes(jobTitle)));
  // }, [location, jobTitle]);


  // const onSearch = (newLocation, newJobTitle) => {
  //   setLocation(newLocation);
  //   setJobTitle(newJobTitle);
  // }
  

  return (
    <div className="jobs">
      {/* <FilterBar onSearch={onSearch}  /> */}

      <div className="jobdetail">
        {jobs &&
          jobs.slice(currentPage, currentPage + jobsPerPage) &&
          jobs.map((job, index) => (
            <Job job={job} key={index} />
          ))}
      </div>

      {/* <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      /> */}
    </div>
  );
};

export default Jobs;
