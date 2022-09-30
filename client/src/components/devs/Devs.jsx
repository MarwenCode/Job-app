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


      
      ))}


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
