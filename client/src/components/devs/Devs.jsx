import React, { useState } from "react";
import { useContext } from "react";
import Dev from "../dev/Dev";
import { AppContext } from "../../context/context";
import "./devs.scss";

const Devs = ({ devs }) => {
  const { user } = useContext(AppContext);
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

              {tech}
            </label>
          </li>
        </div>
      ))}

      {selectedTech && (
        <button className="all" onClick={() => setSelectedTech("")}>
          All
        </button>
      )}

      <div className="down">
        {devs
          .filter((dev) => dev._id !== user._id)
          .filter((dev) => dev.technology.includes(selectedTech))

          .map((dev, index) => (
            <Dev dev={dev} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Devs;
