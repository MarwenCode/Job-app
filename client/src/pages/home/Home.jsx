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
<<<<<<< HEAD
      {/* <Filter />
      <Search /> */}
=======
      {/* <Search /> */}
>>>>>>> 8b7b78b54646736f91069f192f65f10aef675bdb
      <Devs devs={devs}/>


    </div>
  )
}

export default Home