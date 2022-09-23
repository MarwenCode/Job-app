import React from 'react';
import "./job.scss"

const Job = ({job}) => {
  return (
    <div className='job'>
    
        <div className="top">
            <h1 className='tite'>{job.title}</h1>

        </div>
        <div className="center">
            <div className="left">
            <h2 className='compagny'>{job.compagny}</h2>
            <span className='location'>{job.location}</span>

            </div>

            <div className="right">
            <span className='type'>{job.type}</span>
            <button className='apply'>Apply</button>

            </div>
          

        </div>
        <div className="down">
            <p>{job.description}  </p>

        </div>
        
    </div>
  )
}

export default Job