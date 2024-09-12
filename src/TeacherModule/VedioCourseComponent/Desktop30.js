import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop30.css";

const Desktop30 = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onCoursesTextClick = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  const onTeacherNameTextClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  return (
    <div className="o1desktop-18">
      <div className="o1calendar-133" />
      <div className="o1desktop-18-child" />    
      <div className="o1desktop-18-child66" />
      <div className="o1frame-parent15">
        <div className="o1rectangle-parent11">
          <div className="o1frame-child13" />
          <img
            className="o1group-icon3"
            loading="lazy"
            alt=""
            src="Images/Group.png"
          />
          <div className="o1frame-wrapper10">
            <div className="o1vector-group">
              <img
                className="o1vector-icon19"
                loading="lazy"
                alt=""
                src="Images/dash.png"
              />
              <div className="o1dashboard-container">
                <b className="o1dashboard3" onClick={onDashboardTextClick}>
                  Dashboard
                </b>
              </div>
            </div>
          </div>
          <div className="o1frame-wrapper11">
            <div className="o1query-inner-join-group">
               <img
                className="o1category-container-child"
                alt=""
                src="Images/Rectangle398.png"
              />
              <img
                className="o1query-inner-join4"
                loading="lazy"
                alt=""
                src="Images/QueryInnerJoin.png"
              />
              <div className="o1courses-frame">
                <b className="o1courses3" onClick={onCoursesTextClick}>
                  Courses
                </b>
              </div>
            </div>
          </div>
          <div className="o1frame-wrapper12">
            <div className="o1frame-parent16">
              <div className="o1query-inner-join-wrapper1">
                <div className="o1query-inner-join5" />
              </div>
              <div className="o1task1" />
            </div>
          </div>
          <div className="o1frame-wrapper13">
            <div className="o1frame-parent17">
              <div className="o1frame-parent18">
                <div className="o1help-wrapper1">
                  <img
                    className="o1help-icon3"
                    loading="lazy"
                    alt=""
                    src="Images/help.png"
                  />
                </div>
                <div className="o1vector-wrapper2">
                  <img
                    className="o1vector-icon20"
                    loading="lazy"
                    alt=""
                    src="Images/12vv.png"
                  />
                </div>
                <img
                  className="o1logout-icon3"
                  loading="lazy"
                  alt=""
                  src="Images/Logout.png"
                />
              </div>
              <div className="o1frame-wrapper14">
                <div className="o1help-parent1">
                  <b className="o1help3">Help</b>
                  <div className="o1logout-setting-wrapper">
                    <div className="o1logout-setting">
                      <b className="o1setting3">Setting</b>
                      <b className="o1log-out3">Log out</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="o1category-parent-wrapper">
          <div className="o1category-parent">
            <div className="o1category-container">
              <img
                className="o1vector-icon21"
                loading="lazy"
                alt=""
                src="Images/Vector11.png"
              />
              {/* <img
                className="o1category-container-child"
                alt=""
                src="Images/Rectangle398.png"
              /> */}
            </div>
            <b className="o1category2">Category</b>
          </div>
        </div>
      </div>
      <div className="o1course-math-parent-wrapper">
        <div className="o1course-math-parent">
          <h2 className="o1coursemath">Course/Math</h2>
          <div className="o1pencil-parent">
            <img className="o1frame-child53" alt="" src="/vector-105.svg" />
            <div className="o1rectangle-parent12">
              <div className="o1frame-child54" />
              <div className="o1rectangle-parent13">
                <div className="o1frame-child55" />
                <b className="o1video1">Video</b>
              </div>
              <div className="o1sound-parent-wrapper">
                <div className="o1sound-parent">
                  <img
                    className="o1sound-speaker-icon1"
                    loading="lazy"
                    alt=""
                    src="Images/SoundSpeaker.png"
                  />
                  <div className="o1full-screen-container">
                    <img
                      className="o1full-screen-icon1"
                      loading="lazy"
                      alt=""
                      src="Images/FullScreen.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="o1frame-parent19">
            <div className="o1search-container-parent">
              <div className="o1search-container">
                <div className="o1rectangle-parent14">
                  <div className="o1frame-child56" />
                  <img className="o1search-icon1" alt="" src="Images/Search.png" />
                  <div className="o1search-frame">
                    <a href = "/" className="o1search1">Search</a>
                  </div>
                </div>
              </div>
              <div className="o1whiteboard-container-parent">
                <div className="o1whiteboard-container">
                  <b className="o1whiteboard1">Whiteboard</b>
                  <div className="o1vector-wrapper3">
                    <img
                      className="o1vector-icon22"
                      alt=""
                      src="Images/down.png"
                    />
                  </div>
                </div>
                <div className="o1recoded-container-wrapper">
                  <div className="o1recoded-container">
                    <div className="o1recoded-container-child" />
                    <h3 className="o1recoded-vedio1">Recoded Vedio</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="o1frame-wrapper15">
              <div className="o1frame-parent20">
                <div className="o1icon-wrapper-parent">
                  <div className="o1icon-wrapper">
                    <img
                      className="o1menu-icon"
                      loading="lazy"
                      alt=""
                      src="Images/Vector.png"
                    />
                  </div>
                  <div className="o1ellipse-div" />
                </div>
                <div className="o1notification-container">
                  <div className="o1notification-content">
                    <div className="o1notification-icon-container">
                      <img
                        className="o1notification-bell-icon"
                        loading="lazy"
                        alt=""
                        src="Images/Vector1.png"
                      />
                    </div>
                    <b className="o1notification-count">01:10:30</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="o1course-header2">
            <div className="o1course-header-content">
              <div className="o1course-actions">
                <div className="o1favorite-action">
                  <img
                    className="o1mdi-favourite-border-1-icon1"
                    loading="lazy"
                    alt=""
                    src="Images/dil.png"
                  />
                </div>
                <div className="o1like-action">
                  <div className="o1like-button-container">
                    <img
                      className="o1mdi-like-1-icon1"
                      loading="lazy"
                      alt=""
                      src="Images/like.png"
                    />
                    <div className="o1like-count-container">
                      <div className="o1m1">12M</div>
                      <img
                        className="o1like-count-background"
                        alt=""
                        src="Images/Blackeye.png"
                      />
                    </div>
                  </div>
                  <div className="o1view-count-container">
                    <div className="o1k">12K</div>
                  </div>
                </div>
              </div>
              <div className="o1course-title-container">
                <b className="o1math-chapter-2-container1">
                  <p className="o1math-chapter-22">Math Chapter 2</p>
                </b>
              </div>
            </div>
            <div className="o1course-description-container">
              <div className="o1course-description-content">
                <div className="o1probability-theory-probability-container1">
                  <p className="o1probability-theory1">
                    <b>Probability Theory</b>
                  </p>
                  <p className="o1probability-theory-helps1">
                    Probability theory helps students to calculate the
                    possibilities in cases like cards deck, heads, and tails in
                    coins, probability of winning the match, and many more
                    situations. This is considered one of the most important
                    math topics in the class 9 math syllabus and for students
                    preparing for other Competitive exams.
                  </p>
                </div>
                {/* <img
                  className="o1vector-icon23"
                  loading="lazy"
                  alt=""
                  src="Images/SoundSpeaker.png"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="o1desktop-18-inner1">
        <div className="o1vector-parent1">
          <img
            className="o1vector-icon24"
            loading="lazy"
            alt=""
            src="Images/Play.png"
          />
          <div className="o1video-content">
            <div className="o1video-content-child" />
            <div className="o1video-card">
              <div className="o1video-card-container">
                <img
                  className="o1image-53-icon"
                  loading="lazy"
                  alt=""
                  src="Images/image41.png"
                />
                <div className="o1video-details">
                  <div className="o1video-title-container">
                    <div className="o1teacher-info">
                      <a href = "/"
                        className="o1teacher-name1"
                        onClick={onTeacherNameTextClick}
                      >
                        Teacher Name
                      </a>
                      <div className="o1teacher-label">
                        <a href = "/" className="o1teacher1">Teacher</a>
                      </div>
                    </div>
                    <img
                      className="o1chevron-down-icon3"
                      loading="lazy"
                      alt=""
                      src="Images/ChevronDown.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="o1recorded-videos-group">
              <h3 className="o1recorded-videos1">Recorded videos</h3>
              <div className="o1recorded-videos-list">
                <div className="o1recorded-video-item">
                  <div className="o1recorded-video-thumbnail" />
                  <div className="o1math-chapter-15">
                    Math chapter 1 1 hr 30 mins
                  </div>
                </div>
                <div className="o1additional-videos">
                  <div className="o1math-chapter-2-1-hr-30-mins-parent">
                    <div className="o1math-chapter-23">
                      Math chapter 2 1 hr 30 mins
                    </div>
                    <div className="o1additional-video-icons">
                      <div className="o1additional-video-thumbnails" />
                      <img
                        className="o1vector-icon25"
                        loading="lazy"
                        alt=""
                        src="Images/Play.png"
                      />
                    </div>
                  </div>
                  <div className="o1math-chapter-3-1-hr-30-mins-parent">
                    <div className="o1math-chapter-31">
                      Math chapter 3 1 hr 30 mins
                    </div>
                    <div className="o1rectangle-parent15">
                      <div className="o1frame-child57" />
                      <img
                        className="o1vector-icon26"
                        loading="lazy"
                        alt=""
                        src="Images/Play.png"
                      />
                    </div>
                  </div>
                  <div className="o1more-videos">
                    <div className="o1math-chapter-4-1-hr-30-mins-parent">
                      <div className="o1math-chapter-41">
                        Math chapter 4 1 hr 30 mins
                      </div>
                      <div className="o1more-video-icons">
                        <div className="o1more-video-thumbnails" />
                        <img
                          className="o1vector-icon27"
                          loading="lazy"
                          alt=""
                          src="Images/Play.png"
                        />
                      </div>
                    </div>
                    <div className="o1math-chapter-5-1-hr-30-mins-parent">
                      <div className="o1math-chapter-51">
                        Math chapter 5 1 hr 30 mins
                      </div>
                      <div className="o1rectangle-parent16">
                        <div className="o1frame-child58" />
                        <img
                          className="o1vector-icon28"
                          alt=""
                          src="Images/Play.png"
                        />
                      </div>
                    </div>
                    <div className="o1math-chapter-6-1-hr-30-mins-parent">
                      <div className="o1math-chapter-61">
                        Math chapter 6 1 hr 30 mins
                      </div>
                      <div className="o1rectangle-parent17">
                        <div className="o1frame-child59" />
                        <img
                          className="o1vector-icon29"
                          alt=""
                          src="Images/Play.png"
                        />
                      </div>
                    </div>
                    <div className="o1math-chapter-7-1-hr-30-mins-parent">
                      <div className="o1math-chapter-71">
                        Math chapter 7 1 hr 30 mins
                      </div>
                      <div className="o1rectangle-parent18">
                        <div className="o1frame-child60" />
                        <img
                          className="o1vector-icon30"
                          alt=""
                          src="Images/Play.png"
                        />
                      </div>
                    </div>
                    <div className="o1math-chapter-8-1-hr-30-mins-parent">
                      <div className="o1math-chapter-81">
                        Math chapter 8 1 hr 30 mins
                      </div>
                      <div className="o1rectangle-parent19">
                        <div className="o1frame-child61" />
                        <img
                          className="o1vector-icon31"
                          alt=""
                          src="Images/Play.png"
                        />
                      </div>
                    </div>
                    <div className="o1math-chapter-9-1-hr-30-mins-parent">
                      <div className="o1math-chapter-91">
                        Math chapter 9 1 hr 30 mins
                      </div>
                      <div className="o1rectangle-parent20">
                        <div className="o1frame-child62" />
                        <img
                          className="o1vector-icon32"
                          loading="lazy"
                          alt=""
                          src="Images/Play.png"
                        />
                      </div>
                    </div>
                    <div className="o1math-chapter-10-1-hr-30-mins-parent">
                      <div className="o1math-chapter-101">
                        Math chapter 10 1 hr 30 mins
                      </div>
                      <div className="o1rectangle-parent21">
                        <div className="o1frame-child63" />
                        <img
                          className="o1vector-icon33"
                          loading="lazy"
                          alt=""
                          src="Images/Play.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="o1course-material-button-container">
                <div className="o1course-material-button1">
                  <div
                    className="o1course-material-icon1"
                    onClick={onRectangleClick}
                  />
                  <b className="o1open-course-material1">Open Course material</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop30;