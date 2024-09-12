import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop24.css";

const Desktop24 = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onCategoryTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onUserNameTextClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  return (
    <div className="f1desktop-6">
      <div className="f1desktop-6-child" />
      <div className="f1calendar-131" />
      <div className="f1rectangle-parent44">
        <div className="f1frame-child52" />
        <div className="f1main-content-parent">
          <div className="f1main-content">
            <img
              className="f1group-icon7"
              loading="lazy"
              alt=""
              src="Images/Group.png"
            />
          </div>
          <div className="f1inner-content-parent">
            <div className="f1inner-content1">
              <div className="f1elements-container">
                <img
                  className="f1top-element-icon"
                  loading="lazy"
                  alt=""
                  src="Images/dash.png"
                />
              </div>
              <img
                className="f1bottom-element-icon"
                loading="lazy"
                alt=""
                src="Images/Vector11.png"
              />
              <div className="f1query-container">
                <img
                  className="f1query-inner-join9"
                  loading="lazy"
                  alt=""
                  src="Images/QueryInnerJoin.png"
                />
              </div>
            </div>
            <div className="f1frame-wrapper35">
              <div className="f1dashboard-parent1">
                <b className="f1dashboard7" onClick={onDashboardTextClick}>
                  Dashboard
                </b>
                <div className="f1category-container">
                  <b className="f1category5" onClick={onCategoryTextClick}>
                    <p className="f1category6">Category</p>
                  </b>
                </div>
                <img className="f1vector-icon19" alt="" src="Images/Rectangle398.png" />
                <b className="f1course1">Course</b>
              </div>
            </div>
          </div>
        </div>
        <div className="f1right-sidebar3">
          <div className="f1frame-parent51">
            <div className="f1frame-wrapper36">
              <div className="f1vector-parent2">
                {/* <img className="f1vector-icon18" alt="" src="/vector-26.svg" /> */}
                <div className="f1vector-parent3">
                
                  <div className="f1vector-parent4">
                    {/* <img
                      className="f1vector-icon20"
                      alt=""
                      src="/vector-46.svg"
                    /> */}
                    <img
                      className="f1vector-icon21"
                      loading="lazy"
                      alt=""
                      src="Images/Massege.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="f1frame-parent52">
              <div className="f1help-wrapper2">
                <img
                  className="f1help-icon4"
                  loading="lazy"
                  alt=""
                  src="Images/help.png"
                />
              </div>
              <div className="f1frame-parent53">
                <div className="f1logout-icon-container">
                  <img
                    className="f1logout-icon5"
                    loading="lazy"
                    alt=""
                    src="Images/12vv.png"
                  />
                </div>
                <img
                  className="f1logout-icon6"
                  loading="lazy"
                  alt=""
                  src="Images/Logout.png"
                />
              </div>
            </div>
          </div>
          <div className="f1feedback-container-container">
            <div className="f1feedback-container1">
              <b className="f1feedback6" onClick={onDashboardTextClick}>
                FeedBack
              </b>
              <div className="f1help-container1">
                <div className="f1nested-help-container">
                  <b className="f1help6">Help</b>
                  <div className="f1setting-container2">
                    <div className="f1setting-logout">
                      <b className="f1setting6">Setting</b>
                      <b className="f1log-out6">Log out</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="f1course-list-container-wrapper">
        <section className="f1course-list-container">
          <div className="f1search-and-filter">
            <header className="f1search-bar-container">
              <div className="f1search-input-container1">
                <div className="f1courses-parent">
                  <h1 className="f1courses7">Courses</h1>
                  <div className="f1search-icons1">
                    <div className="f1search-icons-child" />
                    <img className="f1search-icon4" alt="" src="Images/Search.png" />
                    <div className="f1search-wrapper3">
                      <a href = "/" className="f1search4">Search</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="f1user-profile1">
                <div className="f1profile-picture">
                  <div className="f1picture-container">
                    <img
                      className="f1profile-icon1"
                      loading="lazy"
                      alt=""
                      src="Images/Vector.png"
                    />
                    <div className="f1vector-wrapper3">
                      <img
                        className="f1vector-icon22"
                        loading="lazy"
                        alt=""
                        src="Images/Vector1.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="f1user-dropdown">
                  <img
                    className="f1image-9-icon5"
                    loading="lazy"
                    alt=""
                    src="Images/image41.png"
                  />
                  <div className="f1user-name-container1">
                    <div className="f1name-and-role-parent">
                      <div className="f1name-and-role">
                        <div className="f1chevron-down-group">
                          <img
                            className="f1chevron-down-icon9"
                            loading="lazy"
                            alt=""
                            src="Images/ChevronDown.png"
                          />
                          <b
                            className="f1user-name5"
                            onClick={onUserNameTextClick}
                          >
                            User Name
                          </b>
                        </div>
                      </div>
                      <a href = "/" className="f1student1">Student</a>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="f1separator-parent">
            <div className="f1separator" data-scroll-to="rectangle" />
            <div className="f1course-grid">
              <div className="f1course-row">
                <div className="f1course-cards">
                  <div className="f1first-card">
                    <a href = "/" className="f1all-courses-12">All courses (12)</a>
                  </div>
                  <div className="f1second-card">
                    <b className="f1ongoing-7">Ongoing (7)</b>
                  </div>
                  <b className="f1completed-5">Completed (5)</b>
                </div>
              </div>
              <div className="f1course-examples">
                <div className="f1first-example">
                  <div className="f1first-example-child" />
                  <div className="f1math-card">
                    <div className="f1math-content">
                      <img
                        className="f1image-35-icon"
                        alt=""
                        src="Images/imgh.png"
                      />
                      <img
                        className="f1image-41-icon"
                        loading="lazy"
                        alt=""
                        src="Images/image41.png"
                      />
                    </div>
                    <b className="f1maths-course">Maths Course</b>
                  </div>
                  <div className="f1math-progress">
                    <div
                      className="f1math-progress-bar"
                      onClick={onRectangleClick}
                    />
                    <a href="s4">
                    <div className="f1resume">Resume</div>
                    </a>
                  </div>
                </div>
                <div className="f1second-example">
                  <div className="f1chemistry-card">
                    <div className="f1chemistry-card-child" />
                    <div className="f1chemistry-content">
                      <div className="f1chemistry-course-wrapper">
                         <img className="f1image-36-icon" alt="" src="Images/img.png" />
                        <b className="f1chemistry-course1">Chemistry Course</b>
                       
                      </div>
                      <img
                        className="f1image-42-icon"
                        loading="lazy"
                        alt=""
                        src="Images/image42.png"
                      />
                       <div className="f1resume2">Resume</div>
                    </div>
                    <div className="f1chemistry-progress1">
                      <div
                        className="f1chemistry-progress-bar"
                        onClick={onRectangleClick}
                      />
                    </div>
                  </div>
                </div>
                <div className="f1third-example">
                  <div className="f1physics-card">
                    <div className="f1physics-card-child" />
                    <div className="f1physics-content">
                      <b className="f1physics-course">Physics Course</b>
                      <div className="f1course-image">
                        <img
                          className="f1image-37-icon"
                          alt=""
                          src="Images/image37.png"
                        />
                        <img
                          className="f1image-44-icon2"
                          loading="lazy"
                          alt=""
                          src="Images/image44.png"
                        />
                      </div>
                    </div>
                    <div className="f1course-progress">
                      <div className="f1progress-info">
                        <div
                          className="f1progress-info-child"
                          onClick={onRectangleClick}
                        />
                        <div className="f1resume1">Resume</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <b className="f1see-all3">See all</b>
            </div>
            <div className="f1course-list">
              <div className="f1course-item">
                <div className="f1course-details1">
                  <div className="f1course-details-child" />
                  <div className="f1course-title1">
                    <div className="f1title-image">
                      <img
                        className="f1image-40-icon"
                        alt=""
                        src="Images/image40.png"
                      />
                      <img
                        className="f1image-44-icon3"
                        loading="lazy"
                        alt=""
                        src="Images/image4.png"
                      />
                    </div>
                    <b className="f1computer-science-course">
                      Computer science Course
                    </b>
                  </div>
                  <div className="f1course-action">
                    <div
                      className="f1course-action-child"
                      onClick={onRectangleClick}
                    />
                    <div className="f1resume4">Resume</div>
                  </div>
                </div>
                <div className="f1course-details2">
                  <div className="f1course-details-item" />
                  <div className="f1frame-parent54">
                    <div className="f1english-course-wrapper">
                      <b className="f1english-course">English Course</b>
                      <img className="f1image-38-icon" alt="" src="Images/image38.png" />
                    </div>
                    <img
                      className="f1image-45-icon"
                      loading="lazy"
                      alt=""
                      src="Images/image45.png"
                    />
                  </div>
                  <div className="f1course-details-inner">
                    <div className="f1frame-child53" onClick={onRectangleClick} />
                    <div className="f1resume3">Resume</div>
                  </div>
                </div>
                <div className="f1social-course">
                  <div className="f1social-details">
                    <div className="f1social-details-child" />
                    <div className="f1social-title">
                      <div className="f1title-image1">
                        <img
                          className="f1image-39-icon"
                          alt=""
                          src="Images/image39.png"
                        />
                        <img
                          className="f1image-46-icon"
                          loading="lazy"
                          alt=""
                          src="Images/image46.png"
                        />
                      </div>
                      <b className="f1social-science-course">
                        Social science Course
                      </b>
                    </div>
                    <div className="f1social-action">
                      <div className="f1social-progress">
                        <div
                          className="f1social-progress-child"
                          onClick={onRectangleClick}
                        />
                        <div className="f1resume5">Resume</div>
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

export default Desktop24;