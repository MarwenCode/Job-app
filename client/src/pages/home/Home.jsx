import React, {useContext} from 'react';
import Devs from '../../components/devs/Devs';
import { AppContext } from '../../context/context';
import "./home.scss"

const Home = () => {
  const {devs} = useContext(AppContext)
  return (
    <div className='home'>
      <Devs devs={devs}/>


    </div>
  )
}

export default Home