import "./Desktop23.css";
import React, { useState } from "react";

const Desktop23 = () => {
  const [categoriesr] = useState(["Math", "Science", "History", "Literature"]);
  // Replace with your actual categories
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.value);
  };
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    title: "",
    description: "",
  });
  const [videoUrl, setVideoUrl] = useState("");

  // Handle input changes for title and description
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  // Handle adding a new category
  const handleAddCategory = () => {
    if (newCategory.title && newCategory.description) {
      setCategories([...categories, { ...newCategory, image }]);
      setNewCategory({ title: "", description: "" }); // Clear input fields
      setImage(null); // Clear the uploaded image
    } else {
      alert("Please fill out both fields.");
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result); // Set the image data URL to state
      };
      reader.readAsDataURL(file);
    }
  };
  const handleVideoUpload = () => {
    const videoUrl = document.getElementById("videoUrlInput").value;

    if (isValidVideoUrl(videoUrl)) {
      console.log("Video URL is valid:", videoUrl);
      // Additional logic for handling the video URL
    } else {
      alert("Please enter a valid video URL.");
    }
  };

  // Define isValidVideoUrl function
  const isValidVideoUrl = (url) => {
    return url.includes("youtube.com") || url.includes("vimeo.com");
  }





  
  return (
    <div className="y1desktop-12">
      <div className="y1desktop-12-child" />
      <div className="y1rectangle-parent33">
        <div className="y1frame-child40" />
        <div className="y1frame-parent28">
          <div className="y1group-frame">
            <img
              className="y1group-icon4"
              loading="lazy"
              alt=""
              src="Images/Group.png"
            />
          </div>
          <div className="y1frame-parent29">
            <div className="y1frame-wrapper20">
              <div className="y1frame-parent30">
                <div className="y1course-title-container-wrapper">
                  <div className="y1course-title-container">
                    <img
                      className="y1course-icon1"
                      loading="lazy"
                      alt=""
                      src="Images/dash.png"
                    />
                    <div className="y1bottom-navigation">
                      <b className="y1dashboard5">Dashboard</b>
                    </div>
                  </div>
                </div>
                <div className="y1category-icon-parent">
                  <img className="y1category-icon" alt="" src="Images/Vector11.png" />
                  <div className="y1course-category-name">
                    <b className="y1catagory1">Catagory</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="y1query-inner-join-parent">
              <img
                className="y1query-inner-join7"
                loading="lazy"
                alt=""
                src="Images/QueryInnerJoin.png"
              />
              <div className="y1course-wrapper">
                <b className="y1course">Course</b>
              </div>
              <div className="y1query-separator" />
            </div>
          </div>
        </div>
        <div className="y1frame-wrapper21">
          <div className="y1frame-parent31">
            <div className="y1frame-parent32">
              <div className="y1help-frame">
                <img
                  className="y1help-icon2"
                  loading="lazy"
                  alt=""
                  src="Images/help.png"
                />
              </div>
              <div className="y1logout-icon-wrapper">
                <img className="y1logout-icon2" alt="" src="Images/12vv.png" />
              </div>
              <img
                className="y1logout-icon3"
                loading="lazy"
                alt=""
                src="Images/Logout.png"
              />
            </div>
            <div className="y1frame-wrapper22">
              <div className="y1help-group">
                <b className="y1help4">Help</b>
                <div className="y1frame-wrapper23">
                  <div className="y1setting-container">
                    <b className="y1setting4">Setting</b>
                    <b className="y1log-out4">Log out</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="y1desktop-12-inner">
        <section className="y1frame-parent33">
          <header className="y1frame-wrapper24">
            <div className="y1search-container-parent">
              <div className="y1search-container1">
                <div className="y1search-input-container">
                  <h1 className="y1course-creation">Course Creation</h1>
                  <div className="y1rectangle-parent34">
                    <div className="y1frame-child41" />
                    <img className="y1search-icon3" alt="" src="Images/Search.png" />
                    <div className="y1search-wrapper2">
                      <a href = "/" className="y1search3">Search</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="y1frame-parent34">
                <div className="y1frame-wrapper25">
                  <div className="y1avatar-icon-parent">
                    <img className="y1avatar-icon" alt="" src="Images/Vector.png" />
                    <div className="y1name-icon-wrapper">
                      <img className="y1name-icon" alt="" src="Images/Vector1.png" />
                    </div>
                  </div>
                </div>
                <div className="y1image-53-parent">
                  <img
                    className="y1image-53-icon"
                    loading="lazy"
                    alt=""
                    src="Images/image41.png"
                  />
                  <div className="y1frame-wrapper26">
                    <div className="y1frame-parent35">
                      <div className="y1teacher-name-parent">
                        <b className="y1teacher-name">Teacher Name</b>
                        <div className="y1teacher-wrapper">
                          <div className="y1teacher">Teacher</div>
                        </div>
                      </div>
                      <div className="y1chevron-down-parent">
                        <img
                          className="y1chevron-down-icon6"
                          alt=""
                          src="Images/ChevronDown.png"
                        />
                        <img
                          className="y1chevron-down-icon7"
                          loading="lazy"
                          alt=""
                          src="Images/ChevronDown.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="y1rectangle-parent35">
            <div className="y1frame-child42" />
            <div className="y1frame-parent36">
              <div className="y1upload-new-course-wrapper">
                <h2 className="y1upload-new-course">Upload New Course</h2>
              </div>
              <div className="y1frame-parent37">
                <div className="y1frame-parent38">
                  <div className="y1title-group">
                    <b className="y1title1">Title</b>
                    <div className="y1frame-wrapper27">
                      <div className="y1rectangle-parent36">
                        <div className="y1frame-child43" />
                         {/*----------------------------------------------------- */}
                        <input
                          name="title"
                          className="y1type-here"
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
                  <div className="y1description-parent">
                      <b className="y1description1">Description</b>
                        {/*----------------------------------------------------- */}
                    <div className="y1rectangle-parent37">
                      <div className="y1frame-child44" />
                       <input
                        name="description"
                        className="y1type-here1"
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
                <div className="y1frame-wrapper28">
                  <div className="y1frame-parent39">
                    <div className="y1rectangle-parent38">
                      <div className="y1frame-child45" />
                      <div className="y1image-dropzone">
                        <b className="y1upload-cover-image">Upload cover image</b>
                          {/*----------------------------------------------------- */}
                        <input
                          type="file"
                          className="y1picture-input"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                          {/*----------------------------------------------------- */}
                        <b className="y1drop-your-file">Drop your file here</b>
                        <b className="y1drop-your-file">
                            {/*----------------------------------------------------- */}
                          <input
                            type="text"
                            className="y1video-url-input"
                            placeholder=""
                            id="videoUrlInput"
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                          />
                            {/*----------------------------------------------------- */}
                        </b>
                      </div>
                      <div className="y1arrow-circle-up" />
                      <div className="y1group-wrapper1">
                      <b className="y1drop-your-file">
                          {/*----------------------------------------------------- */}
                        </b>
                        <button className="y1upload-button" onClick={handleVideoUpload}>
                        <img
                          className="y1group-icon5"
                          alt=""
                          src="Images/vedioupload.png"
                        />
                          {/*----------------------------------------------------- */}
                        </button>
                      </div>
                    </div>
                    <div className="y1vedio-url-wrapper">
                      <b className="y1vedio-url">Vedio Url</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="y1frame-wrapper29">
              <div className="y1course-content-parent">
                <b className="y1course-content">Course Content</b>
                <div className="y1rectangle-parent39">
                  <div className="y1frame-child46" />
                  <div className="y1chapter-1-wrapper">
                    <input href = "/" className="y1chapter-11"  type="Text" placeholder="Chapter 1" required></input>
                  </div>
                  <div className="y1title-wrapper">
                    <b className="y1title2">Title</b>
                  </div>
                  <div className="y1rectangle-parent40">
                    <div className="y1frame-child47" />
                    <input className="y1type-here2"  type="Text" placeholder="Type here" required></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="y1chapter-input-container-wrapper">
              <div className="y1chapter-input-container">
                <div className="y1chapter-input-container-child" />
                <div className="y1chapter-title-input">
                  <input href = "/" className="y1chapter-12"  type="Text" placeholder="Chapter 1" required></input>
                </div>
                <div className="y1chapter-title-input1">
                  <b className="y1title3">Title</b>
                </div>
                <div className="y1chapter-input">
                  <div className="y1chapter-input-child" />
                  <input className="y1type-here3"  type="Text" placeholder="Type here" required></input>
                </div>
              </div>
            </div>
            <div className="y1course-settings">
              <div className="y1frame-parent40">
                <div className="y1category-dropdown-parent">
                  <div className="y1category-dropdown">
                    <div className="y1category-dropdown-child" />
                    <div className="y1category-label">
                      <b className="y1select-catagory">Select Catagory</b>
                      {/*----------------------------------------------------- */}
                      {/* <div className="y1category-dropdown"> */}
                      <select
                        className="category-select"
                        value={selectedCategory}
                        onChange={handleCategorySelect}
                      >
                        <option value="" disabled>Select a category</option>
                        <b onClick={handleAddCategory}></b>

                        {categoriesr.map((category, index) => (
                        <option key={index} value={category}>
                        {category}
                        </option>
                        ))}
                      </select>
                      {/*----------------------------------------------------- */}
                    {/* </div> */}
                      
                    </div>
                    <img
                      className="y1image-54-icon"
                      alt=""
                      src="/image-54@2x.png"
                    />
                  </div>
                  <div className="y1frame-parent41">
                    <div className="y1start-date-wrapper">
                      <b className="y1start-date">Start Date</b>
                    </div>
                    <div className="y1rectangle-parent41">
                      <div className="y1frame-child48" />
                        {/*----------------------------------------------------- */}
                      <input type="text"
                           className="date-picker-input"
                          id="datePicker"
                           placeholder="YYYY-MM-DD"
                           onFocus={(e) => (e.target.type = 'date')} // Show date picker on focus
                           onBlur={(e) => (e.target.type = 'text')} // Switch back to text type on blur
                         />
                      <img
                        className="y1calendar-today-icon"
                        alt=""
                        src="Images/date.png"
                      />
                        {/*----------------------------------------------------- */}
                    </div>
                  </div>
                </div>
                <div className="y1end-date-selection">
                  <div className="y1sound-controls">
                    <div className="y1end-date-input">
                      <b className="y1end-date">End Date</b>
                    </div>
                    <div className="y1end-date-calendar">
                      <div className="y1rectangle-parent42">
                        <div className="y1frame-child49" />
                          {/*----------------------------------------------------- */}
                        <input type="text"
                           className="date-picker-input"
                          id="datePicker"
                           placeholder="YYYY-MM-DD"
                           onFocus={(e) => (e.target.type = 'date')} // Show date picker on focus
                           onBlur={(e) => (e.target.type = 'text')} // Switch back to text type on blur
                         />
                        <img
                          className="y1calendar-icon"
                          alt=""
                          src="Images/date.png"
                        />
                          {/*----------------------------------------------------- */}
                      </div>
                      <div className="y1publish-button-container">
                        <div className="y1publish-background-parent">
                          <div className="y1publish-background" />
                          <a href= "1">
                          <b className="y1publish-course">Publish Course</b>
                          </a>
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

export default Desktop23;