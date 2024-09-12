import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import "./TeacherProfile1.css";

const TeacherProfile1 = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onCoursesTextClick = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);
  
  const [userInfo, setUserInfo] = useState({
    username: "Current Username",
    email: "user@example.com",
    firstName: "First",
    lastName: "Last",
    address: "123 Street Name",
    phone: "123-456-7890",
    gender: "Male",
    imageUrl: "Images/image41.png",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setUserInfo({ ...userInfo, imageUrl });
    }
  };

  return (
    <>
    <div className="i1teacher-profile">
      <div className="i1calendar-131" />
      <div className="i1rectangle-group">
        <div className="i1frame-inner" />
        <div className="i1frame-parent5">
          <div className="i1group-container">
            <img
              className="i1group-icon1"
              loading="lazy"
              alt=""
              src="Images/Group.png"
            />
          </div>
          <div className="i1frame-parent6">
            <div className="i1frame-parent7">
              <div className="i1vector-wrapper">
                <img
                  className="i1vector-icon"
                  loading="lazy"
                  alt=""
                  src="Images/dash.png"
                />
              </div>
              <img
                className="i1i-am-not-perfect-lets-transce"
                loading="lazy"
                alt=""
                src="Images/Vector11.png"
              />
              <div className="i1query-inner-join-container">
                <img
                  className="i1query-inner-join1"
                  loading="lazy"
                  alt=""
                  src="Images/QueryInnerJoin.png"
                />
              </div>
            </div>
            <div className="i1dashboard-category-wrapper">
              <div className="i1dashboard-category">
                <b className="i1dashboard1" onClick={onDashboardTextClick}>
                  Dashboard
                </b>
                <b className="i1catagory">Catagory</b>
                <div className="i1courses-container">
                  <b className="i1courses1" onClick={onCoursesTextClick}>
                    Courses
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="i1frame-wrapper4">
          <div className="i1checked-user-male-group">
            <div className="i1checked-user-male1" />
            <div className="i1frame-wrapper5">
              <div className="i1help-logout-container-parent">
                <div className="i1help-logout-container">
                  <div className="i1help-container">
                    <img
                      className="i1help-icon1"
                      loading="lazy"
                      alt=""
                      src="Images/help.png"
                    />
                  </div>
                  <div className="i1vector-container">
                    <img
                      className="i1vector-icon1"
                      loading="lazy"
                      alt=""
                      src="Images/12vv.png"
                    />
                  </div>
                  <img
                    className="i1logout-icon1"
                    loading="lazy"
                    alt=""
                    src="Images/Logout.png"
                  />
                </div>
                <div className="i1frame-wrapper6">
                  <div className="i1help-group">
                    <b className="i1help1">Help</b>
                    <div className="i1setting-logout-wrapper">
                      <div className="i1setting-logout">
                        <b className="i1setting1">Setting</b>
                        <b className="i1log-out1">Log out</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="i1google-classroom1" />
      </div>
      <main className="i1teacher-profile-inner">
        <section className="i1frame-parent8">
          <header className="i1frame-parent9">
            <div className="i1my-profile-container">
              <h1 className="i1my-profile1">My profile</h1>
            </div>
            <div className="i1image-container-parent">
              <div className="i1image-container">
                <div className="i1hey-neha-parent">
                  <img
                    className="i1hey-neha"
                    loading="lazy"
                    alt=""
                    src="Images/Vector.png"
                  />
                  <div className="i1vector-frame">
                    <img
                      className="i1vector-icon2"
                      loading="lazy"
                      alt=""
                      src="Images/Vector1.png"
                    />
                  </div>
                </div>
              </div>
              <div className="i1image-51-parent">
                <img
                  className="i1image-51-icon"
                  loading="lazy"
                  alt=""
                  src="Images/image41.png"
                />
                <div className="i1name-container-container">
                  <div className="i1name-container1">
                    <div className="i1teacher-name-parent">
                      <b className="i1teacher-name">Teacher Name</b>
                      <div className="i1teacher-wrapper">
                        <div className="i1teacher">Teacher</div>
                      </div>
                    </div>
                    <img
                      className="i1chevron-down-icon1"
                      loading="lazy"
                      alt=""
                      src="Images/ChevronDown.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="i1user-information-container-wrapper">
            <div className="i1user-information-container">
              <img
                className="i1image-56-icon1"
                loading="lazy"
                alt=""
                src="Images/image41.png"
              />
              <div className="i1chat-bubble">
                <div className="i1chat-bubble-child" />
                <div className="i1user-info-details">
                  <div className="i1user-name-edit-parent">
                    <div className="i1user-name-edit">
                      <b className="i1user-information1">USER INFORMATION</b>
                      <div className="i1rectangle-container">
                        <div className="i1rectangle-div" />
                        <div className="i1edit2">Edit</div>
                      </div>
                    </div>
                    <div className="i1user-credentials-parent">
                      <div className="i1user-credentials">
                        <b className="i1username1">Username</b>
                        {/*-------------------------------------------------------------*/}
                       
                        <input className="i1user-credentials-child"   type="text"
                          name="username"
                          value={userInfo.username}
                          onChange={handleInputChange} />
                      </div>
                      <div className="i1user-credentials1">
                        <b className="i1email-address1">Email address</b>
                         {/*-------------------------------------------------------------*/}
                         
                        <input className="i1user-credentials-item"  type="email"
                          name="email"
                          value={userInfo.email}
                          onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="i1change-image-container-wrapper">
                    <div className="i1change-image-container">
                      <div className="i1image-container1">
                        <img
                          className="i1image-58-icon"
                          alt=""
                          src="Images/image8888.png"
                        />
                      </div>
                      <div className="i1change-image-action">
                        <div className="i1change-image-action-child" />
                        {/*----------------------------------------------- */}
                        <label className="i1change-image1">
                        Change Image
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                        />
                      </label>
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="i1first-name-group">
                  <b className="i1first-name1">First name</b>
                    {/*-------------------------------------------------------------*/}
                  
                  <input className="i1knowledge-base-response-for-en" type="text"
                      name="firstName"
                      value={userInfo.firstName}
                      onChange={handleInputChange} />
                </div>
                <div className="i1last-name-container-parent">
                  <div className="i1last-name-container">
                    <b className="i1last-name1">Last name</b>
                      {/*-------------------------------------------------------------*/}
                  </div>
                  <input className="i1frame-child1"  type="text"
                        name="lastName"
                        value={userInfo.lastName}
                        onChange={handleInputChange} />
                </div>
                <div className="i1contact-container-parent">
                  <div className="i1contact-container">
                    <div className="i1address-container-wrapper">
                      <div className="i1address-container">
                        <div className="i1contact-address-wrapper">
                          <div className="i1contact-address">
                            <b className="i1contact-information1">
                              CONTACT INFORMATION
                            </b>
                            <b className="i1address1">Address</b>
                              {/*-------------------------------------------------------------*/}
                              <input className="i1contact-container-child" type="text"
                                name="address"
                                value={userInfo.address}
                                onChange={handleInputChange} />
                             
                          </div>
                        </div>
                        <div className="i1rectangle-parent1">
                          <div className="i1frame-child2"  />
                          <div className="i1edit3">Edit</div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="i1phone-container-parent">
                    <div className="i1phone-container">
                      <b className="i1phone-no1">Phone No</b>
                       
                      
                    </div>
                    <input className="i1frame-child3"   type="text"
                            name="phone"
                            value={userInfo.phone}
                            onChange={handleInputChange}/>
                  </div>
                </div>
                <div className="i1gender-group">
                  <b className="i1gender1">Gender</b>
                 
                   
                  <input className="i1gender-dropdown"  name="gender"
                        value={userInfo.gender}
                        onChange={handleInputChange} ></input>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="i1hello-how-are-you-today-wrapper">
        <div className="i1hello-how-are-you-today" />
      </div>
    </div>
    </>
  );
};

export default TeacherProfile1;


