import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {fetchUserData, login } from './api';
import './Desktop18.css';

const Desktop18 = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [setUserData] = useState(null);

  useEffect(() => {
    debugger
    // Fetch user data here if needed
    const getUserData = async () => {
      debugger
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        setError('Failed to fetch user data.');
        console.error('Error fetching user data:', error);
      }
    };
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleSubmit = async (event) => {
    debugger
    event.preventDefault();
    setError(""); // Reset error message
    try {
      const userData = {
        username: email,
        password: password,
      };
      const result = await login(userData);
      debugger
      if (result.token) {
        // // Store the token and user ID in localStorage
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('Id', result.userID);
        localStorage.setItem('userRoles', result.userRoles);

        // Navigate to a different page after successful login
        navigate('/DashboarD'); // Adjust the path as needed
      
      } else {
        setError("Login failed. No token received.");
      }
    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials and try again.");
      alert('Login failed');
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="desktop-1">
      <div className="main2">
        <form className="content2">
          <div className="input-fields2">
            <div className="group2">
              <img className="group-icon12" alt="" src="/Images/Group.png" />
            </div>
            <div className="input-wrapper2">
              <input 
                className="email-field2" 
                type="email"
                placeholder="Email"  
                onChange={handleEmailChange} 
                required />
              <label className="email2"></label>
            </div>
            <div className="input-wrapper12">
              <input
                className="component2" 
                type="password"
                placeholder="Password" 
                onChange={handlePasswordChange}
                required />
              <label className="password2"></label>
            </div>
          </div>
          <div className="actions2">
            <div className="sign-in-button2"onClick={handleSubmit}>
              <div className="component12" />
              <b  className="sign-in2">Sign in</b>
              {error && <p className="error-message">{error}</p>}
            </div>
            <div className="sign-up-prompt2">
              <div className="dont-have-an-container2">
                <p className="dont-have-an-account-sign-up2">
                  {`Don't have an account? `}
                  <Link className="sign-up22" to="/signup">
                    <b className="sign-up22">Sign up</b>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <section className="vector-parent2">
        <img className="frame-child2" alt="" src="/Images/Ellipse.png" />
        <div className="illustration-content2">
          <div className="group32">
            <img className="group-icon132" alt="" src="/Images/Frame.png" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop18;
