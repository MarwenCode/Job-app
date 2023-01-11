import React, { useState } from "react";
import "./filterbar.scss";

const FilterBar = ({onSearch}) => {
  const [location, setLocation] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(location, jobTitle);
  }

//  console.log(jobs)
  // const onSearch = (location, title) => {
  //   return jobs.filter(job => {
  //     return job.location === location || job.title.includes(title);
  //   });
  // }
  


  return (
    <div className="filterbar">
      <form className="form" >
        <label>
          Job Title:
          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />
        <label>
          Job Type:
          <select>
            <option value="">Any</option>
            <option value="full-time">Remote</option>
            <option value="part-time">Hybride</option>
            {/* <option value="freelance">Freelance</option>
            <option value="internship">Internship</option> */}
          </select>
        </label>
        <br />
        <button type="submit"  onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
};

export default FilterBar;
