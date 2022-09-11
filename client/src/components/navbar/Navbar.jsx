import React from 'react';
import "./navbar.scss"
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import { AppContext } from '../../context/context';
import { useContext } from 'react';

const Navbar = () => {
    const {user} = useContext(AppContext)
  return (
    <div className='navbar'>
    <div className="title" >
        <Link to='/'  className="link">Job App</Link>
    </div>
    {user ? (
        <button className='logout'>Logout
        <FaSignOutAlt className='signoutIcon'/>

        </button>




    ) :


    (
        <ul className='item'>
        <li>
            <Link to='login'  className="link">
                <FaSignInAlt /> Login
            </Link>
        </li>
        <li>
            <Link to='register'  className="link">
                <FaUser /> register
            </Link>
        </li>
    </ul>


    )



    }


</div>
  )
}

export default Navbar