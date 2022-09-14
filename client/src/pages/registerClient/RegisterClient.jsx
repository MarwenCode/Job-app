import { FaUser } from "react-icons/fa";
import React, { useRef,useContext, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RegisterClient = () => {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const handleRegister = async(e) => {
   
        e.preventDefault()
    
        try {
          const res = await axios.post("/auth/register/user", {
            username,
            email,
            password,
            confirmPassword
          });
          localStorage.setItem("userClient", JSON.stringify(res))
          console.log(res)
          res.data && window.location.replace("/");
        }catch(error) {
          console.log(error)
         
        }
    
      }


  return (
    <div className='register'>
    <section className="heading">
        <h1>
            <FaUser/> Register client version
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
            <Link to="/login/user" className="link">

            <span>if you have an account clic here</span>
            
            </Link>
   

        </form>
    </section>
    
    </div>
  )
}

export default RegisterClient