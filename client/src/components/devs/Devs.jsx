import React from 'react';
import Dev from '../dev/Dev';
import "./devs.scss"

const Devs = ({devs}) => {
  return (
    <div className='devs'>
      {devs.map((dev, index) => (
        <Dev dev={dev} key={index} />


      
      ))}

    </div>
  )
}

export default Devs