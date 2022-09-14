import React from 'react';
import "./navbar.scss"
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import { AppContext } from '../../context/context';
import { useContext } from 'react';

const Navbar = () => {
    const {user, dispatch} = useContext(AppContext)

    const Navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    
        Navigate("/login");
      };



  return (
    <div className='navbar'>
    <div className="title" >
        <Link to='/'  className="link">Job App </Link>
        <span className='version'>for devs</span>
    </div>
    <Link to="/register/user"        className='link'>
    <span className='client'>clic here to join the app for clients</span>
    </Link>
  
    {user ? (
        <>
        <Link to="/forum" className='link'>
        <button className='forum'>Forum</button>
        
        </Link>

         
         <button className='logout'   onClick={handleLogout}>Logout
        <FaSignOutAlt className='signoutIcon'/>

        </button>
        
        </>
       




    ) :


    (
        <ul className='item'>
        <li>
            <Link to='login'  className="link">
                <FaSignInAlt /> Login
            </Link>
        </li>
        <li>
            <Link to='/'  className="link">
                <FaUser /> register
            </Link>
        </li>
    </ul>


    )



    }

    {/* {user &&    <button className='logout'>test
        <FaSignOutAlt className='signoutIcon'/>

        </button>} */}


</div>
  )
}

export default Navbar