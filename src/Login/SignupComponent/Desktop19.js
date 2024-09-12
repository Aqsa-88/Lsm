// src/Login/SignupComponent/Desktop19.js
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
// import { signUp, fetchUserData } from './api'; // Ensure fetchUserData is imported
import "./Desktop19.css";

const Desktop19 = () => {
  // const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [error] = useState("");

  // const onSignUpBackgroundClick = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const userData = { username, email, password, userType };
  //     const result = await signUp(userData); // Call the API function to sign up the user
      
  //     // Store the token in localStorage
  //     localStorage.setItem('authToken', result.token);

  //     // Fetch user data
  //     const userDataResult = await fetchUserData();
  //     console.log('User Data:', userDataResult);

  //     // Navigate to a different page after successful signup
  //     navigate("/desktop-4");
  //   } catch (err) {
  //     setError("Sign up failed. Please try again.");
  //   }
  // };

  // Handlers for each input field
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className="desktop-2">
      <form className="side-panel">
        <div className="logo-container">
          <img className="group-icon12" alt="" src="/Images/Group.png" />
        </div>
        <div className="form-container1">
          <div className="username-background-parent">
            <input
              className="username-background"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
            />
          </div>
          <div className="input-fields1">
            <div className="input-backgrounds-parent">
              <input
                className="input-backgrounds"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
              />
            </div>
            <div className="rectangle-parent">
              <input
                className="frame-item"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                
              />
            </div>
            <div className="select-user-type-parent">
              <b className="select-user-type"></b>
              <div className="user-type-select">
                <select
                  className="user-type-dropdown"
                  value={userType}
                  onChange={handleUserTypeChange}
                >
                  <option value="" disabled hidden>Select User Type</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="sign-up-button-container">
          <div className="sign-up-button">
            <div className="sign-up2">
              <div
                className="sign-up-background"
                // onClick={onSignUpBackgroundClick}
              />
               <b className="sign-up3">Sign Up</b>
               {userType === 'teacher' ?(
                <Link to="/7">
              <b className="sign-up3">Sign Up</b>
              </Link>
               ):
               userType === 'student' ?(
                   <Link to="/s5">
                   <b className="sign-up3">Sign Up</b>
                   </Link>) : null
               }
              {error && <p className="error-message">{error}</p>}
            </div>
            <div className="sign-in-prompt">
              <div className="already-have-an-container">
                <p className="already-have-an-account-sign">
                  {`Already have an account? `}
                  <Link className="Desktop18" to="/Signin">
                    <span className="sign-in3">Sign in</span>
                  </Link>
                </p>
              </div>
            </div>
            {/* <div className="sign-in-prompt">
              <div className="already-have-an-container">
                <p className="already-have-an-account-sign">
                  {`Login as a Teacher `}
                  <Link className="Desktop18" to="/7">
                    <span className="sign-in3">Sign in</span>
                  </Link>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </form>
      <section className="vector-parent">
        <img className="frame-child" alt="" src="/Images/Ellipse.png" />
        <div className="illustration-content">
          <div className="group3">
            <img className="group-icon13" alt="" src="/Images/Frame.png" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop19;
