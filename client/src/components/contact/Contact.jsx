
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Rating from "../rating/Rating";
import { ToastContainer, toast } from 'react-toastify';
import "./contact.scss"

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [dev, setDev] = useState({});
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];
  console.log(path);

  useEffect(() => {
    const getDev = async () => {
      const res = await axios.get("https://api-job-app.onrender.com/api/dev/" + path);
      // const res = await axios.get("/dev/" + path);
      // const res = await axios.get(`/review/${user._id}`);
      console.log(res.data);
      setDev(res.data);
    };

    getDev();
  }, [path]);

  console.log(dev);

  const sendMessage = () => {
    toast.dark("your messsage has been sent")

    setName("")
    setMessage("")
    setEmail("")


  }




  return (

    <div className="contact">
      {/* <div className="profileSidebar">
      <div className="top">
        <div className="right">
          <img className="img" src="" alt="" />
          <Rating className="rating" />
        </div>
        <div className="left">
          <span className="username">{dev.username}</span>
          <span className="email">{dev.email}</span>
          <span className="tech">{dev.technology}</span>
         
        </div>
      </div>


      </div> */}
      <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">

          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT :  <span className="username">{dev.username}</span></span>
            
          </div>
          <div className="app-contact"></div>
        </div>
        <div className="screen-body-item">
          <div class="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="name" 
              value={name}
               onChange={(e) => setName(e.target.value)}
              
              />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="email"
              value={email}

             onChange={(e) => setEmail(e.target.value)}
              
              
              />
            </div>
             <div/>
             <div className="app-form-group message">
              <textarea className="app-form-control" placeholder="message"
              value={message}
                onChange={(e) => setMessage(e.target.value)}
              
              />
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button"  onClick={sendMessage}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>




    </div>


  )
}

export default Contact

