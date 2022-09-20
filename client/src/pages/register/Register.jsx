import { FaUser } from "react-icons/fa";
import React, { useRef,useContext, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../../context/context";
import "./register.scss"

const Register = () => {

    const {user,dispatch } = useContext(AppContext)
 
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
  
    const Navigate = useNavigate()
  
    const handleRegister = async(e) => {
   
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try {
          const res = await axios.post("/auth/register/dev", {
            username,
            email,
            password,
            confirmPassword
          });
          localStorage.setItem("user", JSON.stringify(res))
          console.log(res)
          dispatch({type:"LOGIN_SUCCESS",payload: res.data})
        //   res.data && window.location.replace("/login");
          res.data && window.location.replace("/");
        }catch(error) {
          console.log(error)
         
        }
    
      }
  console.log(user)



  return (
    <div className='register'>
    <section className="heading">
        <h1>
            <FaUser/> Register
        </h1>
        <p>Please create an account</p>

    </section>

    <section className="form" onSubmit={handleRegister}>
        <form>
            <div className="form-group">
                <input type='text' 
                       className="form-control"
                       id='name'
                       name='name'
                    //    value={name}
                    //    onChange={onChange}
                       placeholder='Enter your name'
                       required
                       onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input type='email' 
                       className="form-control"
                       id='email'
                       name='email'
                    //    value={email}
                    //    onChange={onChange}
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
                <input type='password' 
                       className="form-control"
                       id='confirmPassword'
                       name='confirmPassword'
                       placeholder='Confirm  password'
                       onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <button className="btn">Submit</button>
            </div>

        </form>
    </section>
    
    </div>
  )
}

export default Register