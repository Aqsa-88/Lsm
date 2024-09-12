import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop29.css";

const Desktop29 = () => {
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

  const onRectangleClick = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  return (
    <div className="j1desktop-8">
      <div className="j1calendar-132" />
      <div className="j1desktop-8-child" />
   
      <div className="j1frame-parent10">
        <div className="j1rectangle-parent2">
          <div className="j1frame-child4" />
          <img
            className="j1group-icon2"
            loading="lazy"
            alt=""
            src="Images/Group.png"
          />
          <div className="j1frame-wrapper7">
            <div className="j1dashboard-group">
              <img
                className="j1dashboard-icon"
                loading="lazy"
                alt=""
                src="Images/dash.png"
              />
              <div className="j1dashboard-wrapper">
                <b className="j1dashboard2" onClick={onDashboardTextClick}>
                  Dashboard
                </b>
              </div>
            </div>
          </div>
          <div className="j1frame-wrapper8">
            <div className="j1query-inner-join-parent">
              <img
                className="j1query-inner-join2"
                loading="lazy"
                alt=""
                src="Images/QueryInnerJoin.png"
              />
              <div className="j1course-name">
              <img
                className="j1category-icon-child"
                alt=""
                src="Images/Rectangle398.png"
              />
                <b className="j1courses2" onClick={onCoursesTextClick}>
                  Courses
                </b>
              </div>
            </div>
          </div>
          <div className="j1frame-wrapper9">
            <div className="j1frame-parent11">
              <div className="j1query-inner-join-frame">
                <div className="j1query-inner-join3" />
              </div>
              <div className="j1task" />
            </div>
          </div>
          <div className="j1inner-navigation-wrapper">
            <div className="j1inner-navigation">
              <div className="j1frame-parent12">
                <div className="j1inner-button-wrapper">
                  <div className="j1inner-button">
                    <div className="j1home-icon-parent">
                      {/* <img className="j1home-icon" alt="" src="/vector-12.svg" /> */}
                      <div className="j1vector-parent">
                        {/* <img
                          className="j1vector-icon5"
                          alt=""
                          src="/vector-22.svg"
                        /> */}
                        <img
                          className="j1vector-icon6"
                          loading="lazy"
                          alt=""
                          src="Images/Massege.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="j1frame-parent13">
                  <div className="j1help-frame">
                    <img
                      className="j1help-icon2"
                      loading="lazy"
                      alt=""
                      src="Images/help.png"
                    />
                  </div>
                  <div className="j1frame-parent14">
                    <div className="j1history-wrapper">
                      <img
                        className="j1history-icon"
                        loading="lazy"
                        alt=""
                        src="Images/12vv.png"
                      />
                    </div>
                    <img
                      className="j1logout-icon2"
                      loading="lazy"
                      alt=""
                      src="Images/Logout.png"
                    />
                  </div>
                </div>
              </div>
              <div className="j1feedback-parent">
                <b className="j1feedback1">FeedBack</b>
                <div className="j1help-feed-back">
                  <div className="j1inner-help">
                    <b className="j1help2">Help</b>
                    <div className="j1setting-logout1">
                      <div className="j1setting-container1">
                        <b className="j1setting2">Setting</b>
                        <b className="j1log-out2">Log out</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="j1inner-category-wrapper">
          <div className="j1inner-category">
            <div className="j1category-icon">
            <img
                className="j1category-icon1"
                loading="lazy"
                alt=""
                src="Images/Vector11.png"
              />
             
            </div>
            <b className="j1category1">Category</b>
          </div>
        </div>
      </div>
      <div className="j1desktop-8-inner" />
      
      <div className="j1microphone" />
      <div className="j1desktop-8-child66" />
      <div className="j1course-list">
        <div className="j1course-container">
          <div className="j1course-content-parent">
            <div className="j1course-content">
              <div className="j1course-header">
                <div className="j1course-title">
                  <div className="j1m">12M</div>
                  <div className="j1course-icons">
                    <img
                      className="j1favourite-background-icon"
                      alt=""
                      src="Images/Eye.png"
                    />
                    <img
                      className="j1mdi-favourite-border-1-icon"
                      loading="lazy"
                      alt=""
                      src="Images/dil.png"
                    />
                    <img
                      className="j1mdi-like-1-icon"
                      loading="lazy"
                      alt=""
                      src="Images/like.png"
                    />
                  </div>
                </div>
              </div>
              <b className="j1math-chapter-2-container">
                <p className="j1math-chapter-2">Math Chapter 2</p>
              </b>
            </div>
            <div className="j1course-description">
              <div className="j1probability-theory-probability-container">
                <p className="j1probability-theory">
                  <b>Probability Theory</b>
                </p>
                <p className="j1probability-theory-helps">
                  Probability theory helps students to calculate the
                  possibilities in cases like cards deck, heads, and tails in
                  coins, probability of winning the match, and many more
                  situations. This is considered one of the most important math
                  topics in the class 9 math syllabus and for students preparing
                  for other Competitive exams.
                </p>
              </div>
             
            </div>
          </div>
          <div className="j1toolbar">
           
            {/* <img className="j1toolbar-icons14" alt="" src="Images/Group.png" /> */}
            <div className="j1playback-controls">
              <div className="j1playback-controls-child" />
              <div className="j1rectangle-parent3">
                <div className="j1frame-child5" />
                <b className="j1video">Video</b>
              </div>
              <div className="j1playback-controls-inner">
                <div className="j1sound-speaker-parent">
                  <img
                    className="j1sound-speaker-icon"
                    loading="lazy"
                    alt=""
                    src="Images/SoundSpeaker.png"
                  />
                  <div className="j1full-screen-wrapper">
                    <img
                      className="j1full-screen-icon"
                      loading="lazy"
                      alt=""
                      src="Images/FullScreen.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="j1course-search-parent">
            <div className="j1course-search">
              <div className="j1course-options">
                <div className="j1course-header1">
                  <div className="j1course-title1">
                    <h1 className="j1course">Course</h1>
                    <div className="j1search-input">
                      <div className="j1search-input-child" />
                      <img className="j1search-icon" alt="" src="Images/Search.png" />
                      <div className="j1search-wrapper">
                        <a href = "/" className="j1search">Search</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="j1whiteboard-header-parent">
                  <div className="j1whiteboard-header">
                    <b className="j1whiteboard">Whiteboard</b>
                    <div className="j1whiteboard-icon">
                      <img className="j1button-icon" alt="" src="Images/Down.png" />
                    </div>
                  </div>
                  <div className="j1recorded-video-header-wrapper">
                    <div className="j1recorded-video-header">
                      <div className="j1content" />
                      <h3 className="j1recoded-vedio">Recoded Vedio</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="j1course-navigation">
              <div className="j1previous-button">
                <div className="j1previous-icon">
                  <img
                    className="j1vector-icon7"
                    loading="lazy"
                    alt=""
                    src="Images/Vector.png"
                  />
                </div>
                <div className="j1progress-indicator" />
              </div>
              <div className="j1next-button">
                <div className="j1next-icon">
                  <div className="j1forward-wrapper">
                    <img
                      className="j1forward-icon"
                      loading="lazy"
                      alt=""
                      src="Images/Vector1.png"
                    />
                  </div>
                  <b className="j1b">01:10:30</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="j1user-profile-wrapper">
        <div className="j1user-profile">
          <img
            className="j1graphs-icon"
            loading="lazy"
            alt=""
            src="Images/Play.png"
          />
          <div className="j1user-info">
            <div className="j1user-info-child" />
            <div className="j1user-card">
              <div className="j1image-9-group">
                <img
                  className="j1image-9-icon1"
                  loading="lazy"
                  alt=""
                  src="Images/image57.png"
                />
                <div className="j1user-name1">
                  <div className="j1user-full-name">
                    <a href = "/" className="j1user-name2" onClick={onUserNameTextClick}>
                      User name
                    </a>
                    <div className="j1user-type">
                      <a href = "/" className="j1student1">Student</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="j1user-dropdown">
                <img
                  className="j1chevron-down-icon2"
                  loading="lazy"
                  alt=""
                  src="Images/ChevronDown.png"
                />
              </div>
            </div>
            <div className="j1recorded-videos-parent">
              <h3 className="j1recorded-videos">Recorded videos</h3>
              <div className="j1video-list">
                <div className="j1video-item">
                  <div className="j1video-thumbnail" />
                  <div className="j1math-chapter-12">
                    Math chapter 1 1 hr 30 mins
                  </div>
                </div>
                <div className="j1video-grid">
                  <div className="j1video-row">
                    <div className="j1math-chapter-21">
                      Math chapter 2 1 hr 30 mins
                    </div>
                    <div className="j1video-preview">
                      <div className="j1thumbnail-placeholder" />
                      <img
                        className="j1play-icon"
                        loading="lazy"
                        alt=""
                        src="Images/Play.png"
                      />
                    </div>
                  </div>
                  <div className="j1video-row1">
                    <div className="j1math-chapter-3">
                      Math chapter 3 1 hr 30 mins
                    </div>
                    <div className="j1rectangle-parent4">
                      <div className="j1frame-child6" />
                      <img
                        className="j1vector-icon8"
                        loading="lazy"
                        alt=""
                        src="Images/Play.png"
                      />
                    </div>
                  </div>
                  <div className="j1video-grid-container">
                    <div className="j1video-row-container">
                      <div className="j1math-chapter-4">
                        Math chapter 4 1 hr 30 mins
                      </div>
                      <div className="j1rectangle-parent5">
                        <div className="j1frame-child7" />
                        <img
                          className="j1vector-icon9"
                          loading="lazy"
                          alt=""
                          src="Images/Play.png"
                        />
                      </div>
                    </div>
                    <div className="j1video-row-container1">
                      <div className="j1math-chapter-5">
                        Math chapter 5 1 hr 30 mins
                      </div>
                      <div className="j1rectangle-parent6">
                        <div className="j1frame-child8" />
                        <img
                          className="j1vector-icon10"
                          alt=""
                          src="Images/Play.png"
                        />
                      </div>
                    </div>
                    <div className="j1video-row-container2">
                      <div className="j1math-chapter-6">
                        Math chapter 6 1 hr 30 mins
                      </div>
                      <div className="j1rectangle-parent7">
                        <div className="j1frame-child9" />
                        <img
                          className="j1vector-icon11"
                          alt=""
                          src="Images/Play.png"
                        />
                      </div>
                    </div>
                    <div className="j1video-row-container3">
                      <div className="j1math-chapter-7">
                        Math chapter 7 1 hr 30 mins
                      </div>
                      <div className="j1the-dashboard-ui-kit-is-a-mode-parent">
                        <div className="j1the-dashboard-ui-kit-is-a-mode" />
                        <img
                          className="j1vector-icon12"
                          alt=""
                          src="Images/Play.png"
                        />
                      </div>
                    </div>
                    <div className="j1video-row-container4">
                      <div className="j1math-chapter-8">
                        Math chapter 8 1 hr 30 mins
                      </div>
                      <div className="j1rectangle-parent8">
                        <div className="j1frame-child10" />
                        <img
                          className="j1vector-icon13"
                          alt=""
                          src="Images/Play.png"
                        />
                      </div>
                    </div>
                    <div className="j1video-row-container5">
                      <div className="j1math-chapter-9">
                        Math chapter 9 1 hr 30 mins
                      </div>
                      <div className="j1rectangle-parent9">
                        <div className="j1frame-child11" />
                        <img
                          className="j1vector-icon14"
                          loading="lazy"
                          alt=""
                          src="Images/Play.png"
                        />
                      </div>
                    </div>
                    <div className="j1video-row-container6">
                      <div className="j1math-chapter-10">
                        Math chapter 10 1 hr 30 mins
                      </div>
                      <div className="j1rectangle-parent10">
                        <div className="j1frame-child12" />
                        <img
                          className="j1vector-icon15"
                          loading="lazy"
                          alt=""
                          src="Images/Play.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="j1course-material-button-wrapper">
                <div className="j1course-material-button">
                  <div
                    className="j1course-material-icon"
                    onClick={onRectangleClick}
                  />
                  <b className="j1open-course-material">Open Course material</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop29;