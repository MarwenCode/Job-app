import React, {useContext} from 'react';
import Devs from '../../components/devs/Devs';
import Search from '../../components/search/Search';
import { AppContext } from '../../context/context';
import Filter from '../../components/filter/Filter';
import "./home.scss"

const Home = () => {
  const {devs} = useContext(AppContext)
  return (
    <div className='home'>
      {/* <Filter />
      <Search /> */}
      <Devs devs={devs}/>


    </div>
  )
}

export default Home