import React from 'react';
import "./dev.scss"

const dev = ({dev}) => {
  return (
    <div className='dev'>
        <div className="right">
           <img className="img" src="" alt="" />

        </div>
        <div className="left">
          <span>name: {dev.username}</span> 
          <span> e-mail: {dev.email}</span> 
          <span>technology: {dev.technology}</span> 
          

        </div>
        <div className="down">

        </div>

    </div>
  )
}

export default dev