
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { uploadCategory } from '../Services/Api';
import "./Desktop33.css";

const Desktop33 = () => {
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    title: "",
    description: "",
  });
  const [videoUrl, setVideoUrl] = useState("");


  
  useEffect(() => {
    const loadCategories = async () => {
      try {
        // const data = await fetchCategories();
        // setCategories(data);
      } catch (error) {
        console.error('Failed to load categories:', error);
      }
    };

    loadCategories();
  }, []);
  
  const handleAddCategory = async () => {
    debugger
    const userId = localStorage.getItem('Id'); // Get userId from local storage
    
    if (newCategory.title && newCategory.description) {
      const formData = new FormData();
      formData.append('Title', newCategory.title);
      formData.append('Description', newCategory.description);
      formData.append('Vedio_URl', videoUrl);
      formData.append('User_ID', userId); // Add userId to form data
  
      if (image) {
        formData.append('Picturess', image);
      }
  
      try {
        const uploadedCategory = await uploadCategory(formData);
        setCategories([categories, uploadedCategory]);
        setNewCategory({ title: "", description: "" });
        setImage("");
        setVideoUrl("");
      } catch (error) {
        console.error('Error uploading category:', error.response ? error.response.data : error.message);
        alert('Failed to upload category.');
      }
    } else {
      alert("Please fill out all fields.");
    }
  };
  
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);  // directly storing the File object
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => setImage(e.target.result);
  //     reader.readAsDataURL(file);
  //   }
    
  // };

  const handleVideoUpload = () => {
    const videoUrl = document.getElementById("videoUrlInput").value;

    if (isValidVideoUrl(videoUrl)) {
      console.log("Video URL is valid:", videoUrl);
    } else {
      alert("Please enter a valid video URL.");
    }
  };

  const isValidVideoUrl = (url) => {
    return url.includes("youtube.com") || url.includes("vimeo.com");
  };


  return (
    <div className="desktop-15">
      <div className="desktop-15-childq1" />
      <div className="rectangle-parentq1">
        <div className="frame-childq1" />
        <div className="group-wrapperq1">
          <img
            className="group-iconq1"
            loading="lazy"
            alt=""
            src="../Images/Group.png"
          />
        </div>
        <div className="frame-parentq1">
          <div className="chart-content-wrapperq1">
            <div className="chart-contentq1">
              <img
                className="vector-iconq1"
                loading="lazy"
                alt=""
                src="../Images/dash.png"
              />
              <div className="dashboard-wrapperq1">
                <b className="dashboardq1">Dashboard</b>
              </div>
            </div>
          </div>
          <div className="vector-parentq1">
            <img className="vector-icon1q1" alt="" src="../Images/Vector11.png" />
            <div className="frame-itemq1" />
            <div className="catagory-wrapperq1">
              <b href ="Desktop27"className="catagoryq1">Catagory</b>
            </div>
          </div>
          <div className="query-content-wrapperq1">
            <div className="query-contentq1">
              <img
                className="query-inner-joinq1"
                loading="lazyq1"
                alt=""
                src="../Images/QueryInnerJoin.png"
              />
              <div className="course-wrapperq1">
                <b className="courseq1">Course</b>
              </div>
            </div>
          </div>
          <div className="action-buttons-wrapperq1">
          <div className="action-buttonsq1">
            <div className="help-logoutq1">
              <div className="help-buttonq1">
                <img
                  className="help-iconq1"
                  loading="lazy"
                  alt=""
                  src="../Images/help.png"
                />
              </div>
              <div className="logout-iconq1">
                <img className="vector-icon2q1" alt="" src="../Images/12vv.png" />
              </div>
              <img
                className="logout-icon1q1"
                loading="lazy"
                alt=""
                src="../Images/Logout.png"
              />
            </div>
            <div className="help-labelq1">
              <div className="help-parentq1">
                <b className="helpq1">Help</b>
                <div className="help-settingq1">
                  <div className="setting-logoutq1">
                    <b className="settingq1">Setting</b>
                    <b className="log-outq1">Log out</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
          
      <main className="category-managementq1">
        <section className="category-contentq1">
          <header className="category-headerq1">
            <div className="header-componentsq1">
              <div className="header-elementsq1">
                <div className="category-titleq1">
                  <h1 className="catagory-creationq1">Catagory Creation</h1>
                  {/* <div className="search-barq1">
                    <div className="search-bar-childq1" />
                    <img className="search-iconq1" alt="" src="../Images/Search.png" />
                    <div className="search-labelq1">
                      <input href ="" className="searchq1"  type="email" placeholder="Search" required/>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="admin-profileq1">
                <div className="profile-contentq1">
                  <div className="profile-elementsq1">
                    <img className="profile-iconq1" alt="" src="../Images/vector.png" />
                    <div className="admin-image-icon-wrapperq1">
                      <img
                        className="admin-image-iconq1"
                        alt=""
                        src="../Images/Vector1.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="admin-detailsq1">
                  <img
                    className="image-53-iconq1"
                    loading="lazy"
                    alt=""
                    src="../Images/image41.png"
                  />
                  <div className="admin-name-chevronq1">
                    <div className="admin-name-label-parentq1">
                      <div className="admin-name-labelq1">
                        <b className="admin-nameq1">Admin Name</b>
                        <div className="admin-typeq1">
                          <a  href ="/" className="adminq1">Admin</a>
                        </div>
                      </div>
                      <img
                        className="chevron-down-iconq1"
                        loading="lazy"
                        alt=""
                        src="../Images/ChevronDown.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div style={{ height: '460px',width:'995px', overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
     
          <div className="rectangle-groupq1">
            <div className="frame-innerq1" />
            <div className="upload-contentq1">
              <div className="upload-titleq1">
                <h2 className="upload-new-catagoryq1">Upload New Catagory</h2>
              </div>
              <div className="upload-formq1">
                <div className="form-fieldsq1">
                  <div className="title-fieldq1">
                    <b className="titleq1">Title</b>
                    <div className="title-inputq1">
                      <div className="title-valueq1">
                        <div className="title-value-childq1" />
                        {/* <input  href ="" className="type-hereq1"  type="email" placeholder="Type here" required/> */}
                    {/*----------------------------------------------------- */}
                        <input
                          name="title"
                          className="type-hereq1"
                          type="text"
                          placeholder="Type here"
                          value={newCategory.title}
                          onChange={handleInputChange}
                          required
                        />
                   {/*----------------------------------------------------- */}
                      </div>
                    </div>
                  </div>
                  <div className="description-fieldq1">
                    <b className="descriptionq1">Description</b>
                    <div className="description-inputq1">
                      <div className="description-input-childq1" />
                      {/* <input  href ="" className="type-here1q1"  type="email" placeholder="Type here" required/> */}
                   {/*----------------------------------------------------- */}
                      <input
                        name="description"
                        className="type-here1q1"
                        type="text"
                        placeholder="Type here"
                        value={newCategory.description}
                        onChange={handleInputChange}
                        required
                      />
                    {/*----------------------------------------------------- */}
                    </div>
                  </div>
                </div>
                <div className="upload-form-innerq1">
                 <div className="image-upload-parentq1">
                 <div className="image-uploadq1">
                 <div className="image-upload-childq1" />
                 <div className="image-dropzoneq1">
                 <b className="upload-cover-imageq1">Upload cover image 
                   <input
                   type="file"
                   className="picture-inputq1"
                   accept="image/*"
                   onChange={handleImageUpload}
                 /></b>
                 <b className="drop-your-fileq1">Drop your file here
                {/* <input type="text" className="video-url-inputq1"placeholder="Enter video URL"id="videoUrlInput" /> */}
                </b>
                {/*----------------------------------------------------- */}
                <b className="drop-your-fileq1">
                          <input
                            type="text"
                            className="video-url-inputq1"
                            placeholder=""
                            id="videoUrlInput"
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                          />
                        </b>
                {/*----------------------------------------------------- */}
               </div>
                <div className="arrow-circle-upq1" />
                  <div className="image-iconq1">
                  <button className="upload-buttonq1" onClick={handleVideoUpload}>
                  <img
                   className="group-icon1q1"
                   alt=""
                   src="../Images/vedioupload.png"
                  />
                  </button>
                  
                  </div>
               </div>
              </div>
            </div>
            </div>
            </div>
            <div className="content-details-wrapperq1">
              <div className="content-detailsq1">
                <div className="content-titleq1">
                  <b className="catagory-contentq1">Catagory Content</b>
                  <div className="chapter-fieldsq1">
                    <div className="chapter-fields-childq1" />
                    <div className="chapter-labelq1">
                      <input  href ="/" className="chapter-1q1" type="Text" placeholder="Chapter 1" required></input>
                    </div>
                    <div className="chapter-titleq1">
                      <b className="title1q1">Title</b>
                    </div>
                    <div className="chapter-title-inputq1">
                      <div className="chapter-title-input-childq1" />
                      <input className="type-here2q1"  type="Text" placeholder="Type here" required />
                    </div>
                  </div>
                </div>
                <div className="chapter-rowq1">
                  <div className="chapter-row-layoutq1">
                    <div className="chapter-row-layout-childq1" />
                    <div className="chapter-labelsq1">
                      <input href ="/" className="chapter-11q1" type="Text" placeholder="Chapter 1" required></input>
                    </div>
                    <div className="chapter-labels1q1">
                      <b className="title2q1">Title</b>
                    </div>
                    <div className="chapter-inputq1">
                      {/* <div className="chapter-input-childq1" /> */}
                      <input className="type-here3q1"  type="Text" placeholder="Type here" required />
                    </div>
                  </div>
                </div>
                <div className="add-category-buttonq1">
                    <div className="add-category-button-wrapperq1">
                      <div className="add-category-button-wrapper-childq1" />
                      <b className="add-catagoryq1" onClick={handleAddCategory}>Save</b>
                    </div>
                     </div>
                     <div className="clear-category-buttonq1">
                    <div className="clear-category-button-wrapperq1">
                      <div className="clear-category-button-wrapper-childq1" />
                      <b className="clear-catagoryq1" onClick={handleAddCategory}>Clear</b>
                    </div>
                     </div>

                <div className="course-datesq1">
                  <div className="course-dates-wrapperq1">
                    {/* <div className="frame-groupq1">
                      <div className="start-date-wrapperq1">
                        <b className="start-dateq1">Start Date</b>
                      </div>
                      <div className="rectangle-containerq1">
                        <div className="rectangle-divq1" />
                           {/*----------------------------------------------------- 
                        <input type="text"
                           className="date-picker-input"
                          id="datePicker"
                           placeholder="YYYY-MM-DD"
                           onFocus={(e) => (e.target.type = 'date')} // Show date picker on focus
                           onBlur={(e) => (e.target.type = 'text')} // Switch back to text type on blur
                         />
                        <img
                          className="calendar-today-iconq1"
                          alt=""
                          src="../Images/date.png"
                        />
                           {/*----------------------------------------------------- *
                      </div>
                    </div> */}
                    <div className="frame-containerq1">
                      <div className="end-date-wrapperq1">
                        <b className="end-dateq1">End Date</b>
                      </div>
                      <div className="end-date-inputq1">
                        <div className="end-date-input-wrapperq1">
                          <div className="end-date-input-wrapper-childq1" />
                             {/*----------------------------------------------------- */}
                           <input type="text"
                           className="date-picker-input"
                          id="datePicker"
                           placeholder="YYYY-MM-DD"
                           onFocus={(e) => (e.target.type = 'date')} // Show date picker on focus
                           onBlur={(e) => (e.target.type = 'text')} // Switch back to text type on blur
                         />
                         <img
                            className="end-date-calendar-iconq1"
                            alt=""
                            src="../Images/date.png"
                          />
                             {/*----------------------------------------------------- */}
                        </div>
                        <div className="publish-course-buttonq1">
                          <div className="publish-course-button-wrapperq1">
                            <div className="publish-course-iconq1" />
                            <Link to= "AfterCreate">
                            <b  className="publish-courseq1">Publish Course</b>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        
      </main>
      
    </div>
  );
};

export default Desktop33;