import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../../context/context";
import { ToastContainer, toast } from "react-toastify";

import "./editeprofile.scss";

const EditeProfile = () => {
  const { user } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
      file,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }

    try {
      const res = await axios.put("https://api-job-app.onrender.com/api/dev/" + user._id, updatedUser);
      // const res = await axios.put("/dev/" + user._id, updatedUser);

      console.log(res);
    } catch (error) {}
  };

  const update = () => {
    toast.dark("your profile has been updated");

    setTimeout(() => {
      window.location.replace("/");
    }, "4000");
  };

  return (
    <div className="ProfileSection">
      <div className="profile">
        <h1 className="updateTitle">Update profile</h1>
        <div className="settingContainer">
          <form className="settingForm" onSubmit={handleSubmit}>
            <label></label>
            <div className="settingProfilePicutre">
              {/* <img src={file ? URL.createObjectURL(file) : + publicFolder+user.profilePic} */}
              <img src={file && URL.createObjectURL(file)} />
              <label>
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input
                type="file"
                className="fileInput"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <div className="inputText">
              <label>username</label>
              <input
                type="text"
                placeholder={user.username}
                className="settingInput"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                placeholder={user.email}
                className="settingInput"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="password"
                className="settingInput"
                onChange={(e) => setPasswrod(e.target.value)}
              />
            </div>
            <button className="settingsSubmit " type="submit" onClick={update}>
              Update
            </button>
      
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditeProfile;
