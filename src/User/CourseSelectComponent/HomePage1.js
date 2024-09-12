import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage1.css";

const HomePage1 = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onCoursesTextClick = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  const onUserNameTextClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  return (
    <div className="g1homepage-7">
      <div className="g1calendar-13" />
      <div className="g1rectangle-parent">
        <div className="g1frame-child" />
        <div className="g1frame-parent">
          <div className="g1group-wrapper">
            <img
              className="g1group-icon"
              loading="lazy"
              alt=""
              src="Images/Group.png"
            />
          </div>
          <div className="g1frame-group">
            <div className="g1frame-wrapper">
              <div className="g1frame-container">
                <div className="g1frame-div">
                  <div className="g1dashboard-icon-parent">
                    <img
                      className="g1dashboard-icon"
                      loading="lazy"
                      alt=""
                      src="Images/dash.png"
                    />
                    <div className="g1dashboard-wrapper">
                      <b className="g1dashboard" onClick={onDashboardTextClick}>
                        Dashboard
                      </b>
                    </div>
                  </div>
                </div>
                <div className="g1category-icon-parent">
                  <img
                    className="g1category-icon"
                    loading="lazy"
                    alt=""
                    src="Images/Vector11.png"
                  />
                  <div className="g1category-wrapper">
                    <b className="g1category">Category</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="g1query-inner-join-parent">
              <img
                className="g1query-inner-join"
                alt=""
                src="Images/QueryInnerJoin.png"
              />
              <div className="g1frame-item" />
              <div className="g1courses-wrapper">
                <b className="g1courses" onClick={onCoursesTextClick}>
                  Courses
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="g1frame-wrapper1">
          <div className="g1frame-parent1">
            <div className="g1frame-parent2">
              <div className="g1frame-wrapper2">
                <div className="g1feedback-icon-parent">
                  <img
                    className="g1feedback-icon"
                    loading="lazy"
                    alt=""
                    src="Images/Massege.png"
                  />
                  <div className="g1feedback-wrapper">
                    <b className="g1feedback">FeedBack</b>
                  </div>
                </div>
              </div>
              <div className="g1help-parent">
                <img
                  className="g1help-icon"
                  loading="lazy"
                  alt=""
                  src="Images/help.png"
                />
                <div className="g1help-wrapper">
                  <b className="g1help">Help</b>
                </div>
              </div>
            </div>
            <div className="g1frame-wrapper3">
              <div className="g1frame-parent3">
                <div className="g1setting-icon-parent">
                  <img
                    className="g1setting-icon"
                    loading="lazy"
                    alt=""
                    src="Images/12vv.png"
                  />
                  <div className="g1setting-wrapper">
                    <b className="g1setting">Setting</b>
                  </div>
                </div>
                <div className="g1logout-parent">
                  <img
                    className="g1logout-icon"
                    loading="lazy"
                    alt=""
                    src="Images/Logout.png"
                  />
                  <div className="g1log-out-wrapper">
                    <b className="g1log-out">Log out</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="g1homepage-7-inner">
        <section className="g1frame-section">
          <div className="g1frame-wrapper4">
            <header className="g1frame-header">
              <div className="g1frame-wrapper5">
                <div className="g1course-parent">
                  <h1 className="g1course">Course</h1>
                  <div className="g1rectangle-group">
                    <div className="g1frame-inner" />
                    <img className="g1search-icon" alt="" src="Images/Search.png" />
                    <div className="g1search-wrapper">
                      <a href = "/" className="g1search">Search</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="g1frame-parent4">
                <div className="g1frame-wrapper6">
                  <div className="g1user-icon-parent">
                    <img
                      className="g1user-icon"
                      loading="lazy"
                      alt=""
                      src="Images/Vector.png"
                    />
                    <div className="g1notification-icon-wrapper">
                      <img
                        className="g1notification-icon"
                        loading="lazy"
                        alt=""
                        src="Images/Vector1.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="g1image-9-parent">
                  <img
                    className="g1image-9-icon"
                    loading="lazy"
                    alt=""
                    src="Images/image41.png"
                  />
                  <div className="g1frame-wrapper7">
                    <div className="g1frame-parent5">
                      <div className="g1user-name-parent">
                        <b className="g1user-name" onClick={onUserNameTextClick}>
                          User Name
                        </b>
                        <div className="g1student-wrapper">
                          <a href = "/" className="g1student">Student</a>
                        </div>
                      </div>
                      <img
                        className="g1chevron-down-icon"
                        loading="lazy"
                        alt=""
                        src="Images/ChevronDown.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="g1course-grid">
            <div className="g1course-grid-child" />
            <div className="g1grid-row">
              <div className="g1grid-row-child" />
              <div className="g1grid-row1">
                <div className="g1subject-icons">
                  <img
                    className="g1image-35-icon"
                    alt=""
                    src="Images/imgh.png"
                  />
                  <img
                    className="g1image-41-icon"
                    loading="lazy"
                    alt=""
                    src="Images/image41.png"
                  />
                </div>
               
                <b className="g1maths">{`Maths `}</b>
                
              </div>
              <div className="g1grid-row2">
                <div className="g1course-status" />
                <a href="s7">
                <div className="g1open-course">Open Course</div>
                </a>
              </div>
            </div>
            <div className="g1grid-row3">
              <div className="g1grid-row-item" />
              <div className="g1frame-parent6">
                <div className="g1image-40-parent">
                  <img
                    className="g1image-40-icon"
                    alt=""
                    src="Images/image40.png"
                  />
                  <img
                    className="g1image-44-icon"
                    loading="lazy"
                    alt=""
                    src="Images/image4.png"
                  />
                </div>
                <b className="g1computer-science">{`Computer science `}</b>
              </div>
              <div className="g1rectangle-container">
                <div className="g1rectangle-div" />
                <div className="g1open-course1">Open Course</div>
              </div>
            </div>
            <div className="g1grid-row4">
              <div className="g1grid-row-inner" />
              <div className="g1frame-parent7">
                <div className="g1chemistry-wrapper">
                  <b className="g1chemistry">{`Chemistry `}</b>
                  <img className="g1image-36-icon" alt="" src="Images/img.png" />
                </div>
                <img
                  className="g1image-42-icon"
                  loading="lazy"
                  alt=""
                  src="Images/image42.png"
                />
              </div>
              <div className="g1grid-row-inner1">
                <div className="g1course-status-parent">
                  <div className="g1course-status1" />
                  <div className="g1open-course2">Open Course</div>
                </div>
              </div>
            </div>
            <div className="g1grid-row5">
              <div className="g1grid-row-child1" />
              <div className="g1frame-parent8">
                <div className="g1english-wrapper">
                  <b className="g1english">{`English `}</b>
                  <img className="g1image-38-icon" alt="" src="Images/image38.png" />
                </div>
                <img
                  className="g1image-45-icon"
                  loading="lazy"
                  alt=""
                  src="Images/image45.png"
                />
              </div>
              <div className="g1grid-row-inner2">
                <div className="g1rectangle-parent1">
                  <div className="g1frame-child1" />
                  <div className="g1open-course3">Open Course</div>
                </div>
              </div>
            </div>
            <div className="g1grid-row6">
              <div className="g1grid-row-child2" />
              <div className="g1frame-parent9">
                <div className="g1image-39-parent">
                  <img
                    className="g1image-39-icon"
                    alt=""
                    src="Images/image39.png"
                  />
                  <img
                    className="g1image-46-icon"
                    loading="lazy"
                    alt=""
                    src="Images/image46.png"
                  />
                </div>
                <b className="g1social-science">
                  <p className="g1social-science1">{`Social science `}</p>
                </b>
              </div>
              <div className="g1rectangle-parent2">
                <div className="g1frame-child2" />
                <div className="g1open-course4">Open Course</div>
              </div>
            </div>
            <div className="g1grid-row7">
              <div className="g1grid-row-child3" />
              <div className="g1frame-parent10">
                <div className="g1image-37-parent">
                  <img
                    className="g1image-37-icon"
                    alt=""
                    src="Images/image37.png"
                  />
                  <img
                    className="g1image-47-icon"
                    loading="lazy"
                    alt=""
                    src="Images/image44.png"
                  />
                </div>
                <b className="g1physics">{`Physics `}</b>
              </div>
              <div className="g1rectangle-parent3">
                <div className="g1frame-child3" />
                <div className="g1open-course5">Open Course</div>
              </div>
            </div>
           
           
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage1;