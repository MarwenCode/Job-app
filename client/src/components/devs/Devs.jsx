<<<<<<< HEAD
import React, { useState } from "react";
import Dev from "../dev/Dev";
import "./devs.scss";

const Devs = ({ devs }) => {
  const [selectedTech, setSelectedTech] = useState("");
  const radios = ["react", "python", "javaScript"];
  console.log(devs);
  return (
    <div className="devs">
      {radios.map((tech) => (
        <div className="top">
          <li className="list">
            <label htmlFor={tech} className="labelFilter">
              <input
                type="radio"
                className="inputTech"
                id={tech}
                name="filterTech"
                checked={tech === selectedTech}
                onChange={(e) => setSelectedTech(e.target.id)}
              />
=======
import React, {useState} from 'react';
import Dev from '../dev/Dev';
import "./devs.scss"

const Devs = ({devs}) => {
    const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["react", "python", "javaScript"];
  console.log(devs)
  return (
    <div className='devs'>
        {radios.map((tech) => (
          <li>
            <input
              type="radio"
              id={tech}
              name="continentRadio"
              checked={tech === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={tech}>{tech}</label>
          </li>
        ))}
      {devs.filter((dev) => dev.technology.includes(selectedRadio))
      
      .map((dev, index) => (
        <Dev dev={dev} key={index} />
>>>>>>> 8b7b78b54646736f91069f192f65f10aef675bdb

              {tech}
            </label>
          </li>
        </div>
      ))}

<<<<<<< HEAD
      {selectedTech && <button className="all" onClick={() => setSelectedTech("")}>All</button>}

      <div className="down">
        {devs
          .filter((dev) => dev.technology.includes(selectedTech))

          .map((dev, index) => (
            <Dev dev={dev} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Devs;
=======

        {/* {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))} */}

    </div>
  )
}

export default Devs
>>>>>>> 8b7b78b54646736f91069f192f65f10aef675bdb
