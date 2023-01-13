// import React, { useState, useContext, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import { AppContext } from "../../context/context";
// import axios from "axios";
// import "./search.scss";

// const Search = () => {
//   // const { devs } = useContext(AppContext);
//   const [devs, setDevs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchDevs = async () => {
//       const res = await axios.get("/dev");
//       console.log(res);
//       setDevs(res.data);
//     };

//     fetchDevs();
//   }, []);

//   console.log(devs);

//   return (
//     <div className="search">
//       {/* <FaSearch className="Fasearch" /> */}

//       {/* <input
//         className="inputSearch"
//         type="text"
//         placeholder="    search for a dev..."
//         onChange={(e) => setSearchTerm(e.target.value)}
//       /> */}

//       <div className="sectionSearch">
//         {devs
//           // .filter((dev) => {
//           //   if (searchTerm == "") {
//           //     return;
//           //   } else if (
//           //     dev.technology?.toLowerCase().includes(searchTerm.toLowerCase())
//           //   ) {
//           //     return dev;
//           //   }
//           // })

//           .map((dev, key) => {
//             return (
//               <div className="searchTerm" key={key}>
//                 {dev.technology}
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default Search;
