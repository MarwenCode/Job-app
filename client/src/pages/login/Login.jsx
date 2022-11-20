import { FaUser } from "react-icons/fa";
import React, { useRef,useContext, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../../context/context";
import "./login.scss"

const Login = () => {

    const {user, dispatch } = useContext(AppContext);
    
      const [email, setEmail] = useState()
      const [password, setPassword] = useState()


    const handleLogin = async(e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
    
        try {
            const res = await axios.post("/auth/login/dev", {
                email,
                password
            })
            console.log(res)
            dispatch({type:"LOGIN_SUCCESS",payload: res.data})
            res.data && window.location.replace("/");
            
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE"})
    
            
        }
    
       }
      console.log(user)




  return (
    <div className='register'  onSubmit={handleLogin}>
    <section className="heading">
        <h1>
            <FaUser/> Login
        </h1>
    

    </section>

    <section className="form" >
        <form>
            <div className="form-group">
                <input type='email' 
                       className="form-control"
                       id='email'
                       name='email'
                       placeholder='Enter your email'
                       required
                       onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input type='password' 
                       className="form-control"
                       id='password'
                       name='password'
                    //    value={password}
                    //    onChange={onChange}
                       placeholder='Enter your password'
                       required
                       onChange={(e) => setPassword(e.target.value)}
                />
            </div>
     
            <div className="form-group">
                <button className="btn btn-block">Submit</button>
            </div>

        </form>
    </section>
    
    </div>
  )
}

export default Login

