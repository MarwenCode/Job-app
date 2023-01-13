import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/context";
import axios from "axios";

const Filter = () => {
    // const { devs } = useContext(AppContext);
    const [filtred, setFiltred] = useState([])
    const [all ,setAll] = useState()
    const [active ,setActive] = useState(all)


    const [react, setReact] = useState('react')
    const [python, setPython] = useState("python")


    const [devs, setDevs] = useState([]);

    useEffect(() => {
        const filterDevs = async () => {
          const res = await axios.get("https://api-job-app.onrender.com/api/dev");
          // const res = await axios.get("/dev");
          console.log(res);
          setAll(res.data.technology);
        };
    
        filterDevs();
      }, []);
    
      console.log(all);

      useEffect(() => {
        const filter = all.filter((dev) => {
            dev.technology.includes(react || python || all)
        });
        setFiltred(filter)

      },[all])


  return (
    <div className="filter">
        <button onClick={() => setActive(all)}>All</button>
        <button onClick={() => setActive(react)}>React JS</button>
        <button onClick={() => setActive(python)}>Python</button>

    </div>
  )
}

export default Filter