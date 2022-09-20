import React from 'react'
import { FaSearch } from 'react-icons/fa';
import "./search.scss";

const Search = () => {
  return (
    <div className='search'>
         <FaSearch className="Fasearch" />
    
    <input
            className="inputSearch"
            type="text"
            placeholder="    search for a dev..."
          
          />

    </div>
  )
}

export default Search