import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop20.css";

const Desktop20 = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='paragraph']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCoursesTextClick = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  const onChevronDownIconClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  return (
    <div className="zdesktop-4">
      <div className="zfri">Fri</div>
      <div className="zdesktop-4-child" />
      <div className="zfri1">Fri</div>
      <div className="zdiv">3</div>
      <div className="zdesktop-4-item" />
      <div className="zfri2">Fri</div>
      <div className="zdiv1">3</div>
      <div className="zdesktop-4-inner" />
      <div className="zmain">
        <div className="zmain-child" />
        <div className="zleft-panel">
          <img
            className="zgroup-icon"
            loading="lazy"
            alt=""
            src="Images/Group.png"
          />
          <div className="zqueries">
            <div className="zinner-join-container">
              <div className="zquery-inner-join">
                <div className="zchecked-user-container">
                  <img
                    className="zchecked-user-icon"
                    loading="lazy"
                    alt=""
                    src="Images/dash.png"
                  />
                </div>
                <div className="zchecked-user-male">
                  <img
                    className="zvector-icon"
                    loading="lazy"
                    alt=""
                    src="Images/Vector11.png"
                  />
                  <div className="zfeedback-help">
                    <img
                      className="zquery-inner-join1"
                      loading="lazy"
                      alt=""
                      src="Images/QueryInnerJoin.png"
                    />
                  </div>
                </div>
              </div>
              <div className="zcategory-courses">
                <div className="zcategory-courses-container">
                  <div className="zcourses-container">
                    <b className="zdashboard" onClick={onDashboardTextClick}>
                      Dashboard
                    </b>
                  </div>
                  <div className="zcourses">
                    <b className="zcategory">Category</b>
                    <b className="zcourses1" onClick={onCoursesTextClick}>
                      Courses
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="zright-panel">
          <div className="zuser-header">
            <div className="zquery-inner-join2" />
            <div className="zuser-interactions">
              <div className="zchecked-user-male1" />
              <div className="zuser-interactions-inner">
                <div className="zframe-parent">
                  <div className="zframe-group">
                    <div className="zframe-wrapper">
                      <div className="zvector-parent">
                        <img
                          className="zvector-icon1"
                          alt=""
                          src="Images/Massege.png"
                        />
                        <div className="zvector-group">
                          <img
                            className="zvector-icon2"
                            alt=""
                            src="Images/help.png"
                          />
                          <img
                            className="zvector-icon3"
                            loading="lazy"
                            alt=""
                            src="Images/.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="zvector-wrapper">
                      <img
                        className="zvector-icon4"
                        loading="lazy"
                        alt=""
                        src="Images/12vv.png"
                      />
                    </div>
                  </div>
                  <div className="zfeedback-help-logout">
                    <b className="zfeedback">FeedBack</b>
                    <div className="zhelp-container">
                      <b className="zhelp">Help</b>
                    </div>
                    <div className="zsettings-logout">
                      <div className="zsetting-log-out">
                        <b className="zsetting">Setting</b>
                        <b className="zlog-out">Log out</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="zcontent">
        <div className="zheader">
          <div className="zdashboard-search">
            <div className="zdashboard-search-icons">
              <h1 className="zdashboard1">Dashboard</h1>
              <div className="zsearch-container">
                <div className="zsearch-input">
                  <div className="zsearch-terms">
                    <div className="zsearch-terms-child" />
                    <div className="zsearch-icons">
                      {/* <img className="zsearch-icon" alt="" src="Images/.png" /> */}
                      <img
                        className="zvector-icon5"
                        alt=""
                        src="Images/Search.png"
                      />
                    </div>
                    <div className="zsearch-wrapper">
                      <a href="/" className="zsearch">Search</a>
                    </div>
                  </div>
                  <div className="zfilter-icons">
                    <div className="zvector-container">
                      <img
                        className="zvector-icon6"
                        loading="lazy"
                        alt=""
                        src="Images/Vector.png"
                      />
                      <img
                        className="zvector-icon7"
                        loading="lazy"
                        alt=""
                        src="Images/Vector1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="zannouncement-live">
            <div className="zannouncement-join">
              <div className="zannouncement-join-child" />
              <div className="zannouncement-container">
                <h2 className="zannouncement">Announcement</h2>
              </div>
              <div className="zjoin-container">
                <div className="zparagraph" data-scroll-to="paragraph" />
                <div className="zlive-session">
                  <div className="zhello-username-your">
                    Hello UserName, your live session is about to start!
                  </div>
                </div>
                <div className="zjoin-button">
                  <div className="zjoin-button-child" />
                  <b className="zjoin">Join</b>
                </div>
              </div>
            </div>
          </div>
          <div className="zleaderboard-progress">
            <div className="zleaderboard-categories">
              <div className="zleaderboard-categories-child" />
              <h2 className="zleader-board">Leader board</h2>
              <div className="zleaderboard-items3">
    <div className="zrectangle-div" />  
    <img
        className="zimage-13-icon"
        loading="lazy"
        alt=""
        src="Images/image2.png"
    />
    <div className="zframe-div">
        <div className="zrudhra-shankar-parent">
            <b className="zrudhra-shankar">Rudhra Shankar</b>
            <div className="zscore-49">Score 49</div>
        </div>
    </div>
</div>

<div className="zleaderboard-items2">
    <div className="zrectangle-div1" />  
    <img
        className="zimage-13-icon"
        loading="lazy"
        alt=""
        src="Images/image3.png"
    />
    <div className="zframe-div">
        <div className="zrudhra-shankar-parent">
            <b className="zrudhra-shankar">Aarav Gupta</b>
            <div className="zscore-49">Score 55</div>
        </div>
    </div>
</div>

<div className="zleaderboard-items1">
    <div className="zrectangle-div2" />  
    <img
        className="zimage-13-icon"
        loading="lazy"
        alt=""
        src="Images/image0.png"
    />
    <div className="zframe-div">
        <div className="zrudhra-shankar-parent">
            <b className="zrudhra-shankar">Neha Verma</b>
            <div className="zscore-49">Score 42</div>
        </div>
    </div>
</div>

<div className="zleaderboard-items0">
    <div className="zrectangle-div3" />  
    <img
        className="zimage-13-icon"
        loading="lazy"
        alt=""
        src="Images/image1.png"
    />
    <div className="zframe-div">
        <div className="zrudhra-shankar-parent">
            <b className="zrudhra-shankar">Kunal Singh</b>
            <div className="zscore-49">Score 38</div>
        </div>
    </div>
</div>

              {/* <div className="zleaderboard-content">
                <div className="zleaderboard-users">
                  <div className="zleaderboard-items">
                    <div className="zleaderboard-items-child" />
                    {/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
                    <img
                      className="zimage-132-icon"
                      loading="lazy"
                      alt=""
                      src="Images/image3.png"
                    />
                    <b className="zshyam-nithin">Shyam Nithin</b>
                    <div className="zscore-60">Score 60</div>
                  </div>
                  <div className="zleaderboard-items1">
                    <div className="zleaderboard-items-item" />
                      {/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
                    <img
                      className="zimage-11-icon"
                      loading="lazy"
                      alt=""
                      src="Images/image0.png"
                    />
                    <div className="znivin-kumar-parent">
                   
                      <b className="znivin-kumar">Nivin Kumar</b>
                      <div className="zscore-58">Score 58</div>
                    </div>
                  </div>
                  <div className="zleaderboard-items2">
                    <div className="zleaderboard-items-inner" />
                      {/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
                      <img
                      className="zimage-132-icon"
                      loading="lazy"
                      alt=""
                      src="Images/image1.png"
                    />
                    <b className="znivetha-dinesh">Nivetha Dinesh</b>
                    <div className="zscore-50">Score 50</div>
                  </div>
                  <div className="zleaderboard-items3">
                    <div className="zrectangle-div" />  
                      {/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&                
                     <img
                      className="zimage-13-icon"
                      loading="lazy"
                      alt=""
                      src="Images/image2.png"
                    />
                    <div className="zframe-div">
                      <div className="zrudhra-shankar-parent">
                        <b className="zrudhra-shankar">Rudhra shankar</b>
                        <div className="zscore-49">Score 49</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="zleaderboard-separators">
                  <div className="zcontainer" />
                  <div className="zlinks-container" />
                </div>
              </div> */}
            </div>
            <div className="zcompletion-categories">
              <div className="zcompletion-categories-child" />
              <h2 className="zcompletion-progress">Completion progress</h2>
              <div className="zcompletion-content">
                <div className="zprogress-bars">
                  <div className="zprogress-bar">
                    <div className="zprogress-bar-items">
                      <div className="zprogress-subjects">
                        <div className="zprogress-subjects-child" />
                        <div className="zprogress-chapters">
                          <b className="zorganic-chemistry">Organic Chemistry</b>
                          <div className="zprogress-chapter-labels">
                            <div className="zchapter-1">Chapter 1</div>
                          </div>
                        </div>
                        <div className="zprogress-subjects-inner">
                          <div className="zrectangle-parent">
                            <div className="zframe-child" />
                            <div className="zcontainer1" />
                          </div>
                        </div>
                      </div>
                      <div className="zprogress-subjects1">
                        <div className="zprogress-subjects-item" />
                        <div className="zstates-of-matter-parent">
                          <b className="zstates-of-matter">States of matter</b>
                          <div className="zchapter-2-wrapper">
                            <div className="zchapter-2">Chapter 2</div>
                          </div>
                        </div>
                        <div className="zprogress-subjects-inner1">
                          <div className="zrectangle-group">
                            <div className="zframe-item" />
                            <div className="zframe-inner" />
                          </div>
                        </div>
                      </div>
                      <div className="zprogress-subjects2">
                        <div className="zprogress-subjects-child1" />
                        <div className="zsolutions-parent">
                          <b className="zsolutions">Solutions</b>
                          <div className="zchapter-3-wrapper">
                            <div className="zchapter-3">Chapter 3</div>
                          </div>
                        </div>
                        <div className="zprogress-subjects-inner2">
                          <div className="zrectangle-container">
                            <div className="zframe-child1" />
                            <div className="zsub-container" />
                          </div>
                        </div>
                      </div>
                      <div className="zprogress-subjects3">
                        <div className="zprogress-subjects-child2" />
                        <div className="zchemical-changes-parent">
                          <b className="zchemical-changes">Chemical changes</b>
                          <div className="zchapter-4-wrapper">
                            <div className="zchapter-4">Chapter 4</div>
                          </div>
                        </div>
                        <div className="zprogress-subjects-inner3">
                          <div className="zrectangle-parent1">
                            <div className="zframe-child2" />
                            <div className="zframe-child3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="zrectangle-parent2">
                    <div className="zframe-child4" />
                    <div className="zframe-child5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="zcategories-upcoming">
            <div className="zcategories-upcoming-child" />
            <h2 className="zcatagories">Catagories</h2>
            <div className="zcategory-list">
              <div className="zcategory-art-container">
                <div className="zsignup-description" />
                <div className="zcategory-science-art">
                  <b className="zscience">{`Science `}</b>
                </div>
                <b className="zam">11.00 AM</b>
                <b className="zpending">Pending</b>
              </div>
              <div className="zcategory-art-container1">
                <div className="zcontainer2" />
                <b className="zart">Art</b>
                <div className="zstatus-details-wrapper">
                  <div className="zstatus-details">
                    <div className="zstatus-complete">
                      <b className="zam1">11.40 AM</b>
                    </div>
                    <b className="zcompleted">Completed</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="zevents-container">
        <div className="zevents-divider" />
        <b className="zpresentation-for-maths">Presentation for maths</b>
        <b className="zguest-lecture-on">Guest Lecture on Atoms</b>
        <b className="zenglish-prepositions">English - Prepositions</b>
        <a href="/" className="zsee-all">See all</a>
        <div className="zevent-user-container">
          <div className="zevent-user-container-child" />
          <div className="zevent-user">
            <div className="zuser-image-container">
              <div className="zuser-image">
                <div className="zimage-9-parent">
                  <img
                    className="zimage-9-icon"
                    loading="lazy"
                    alt=""
                    src="Images/image9.png"
                  />
                  <div className="zuser-information">
                    <div className="zuser-name-container">
                      <a href="/" className="zuser-name">User Name</a>
                      <div className="zuser-type-container">
                        <a href="/" className="zuser">User</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="zevent-calendar">
                <div className="zevent-calendar-container">
                  <div className="zevent-month">
                    <a href="/" className="znovember-2023">November 2023</a>
                  </div>
                  <div className="zcalendar-days">
                    <div className="zweek-days">
                      <div className="zweek-days-child" />
                      <div className="zfri3">Fri</div>
                      <div className="zdiv2">3</div>
                    </div>
                    <div className="zside-dish-item">
                      <div className="zcontainer3" />
                      <div className="zsat">Sat</div>
                      <div className="zdiv3">4</div>
                    </div>
                    <div className="zweek-days1">
                      <div className="zweek-days-item" />
                      <div className="zsun">Sun</div>
                      <div className="zday-separator-wrapper">
                        <div className="zday-separator">5</div>
                      </div>
                    </div>
                    <div className="zweek-days2">
                      <div className="zweek-days-inner" />
                      <div className="zmon">Mon</div>
                      <div className="zwrapper">
                        <div className="zdiv4">6</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="zsubject-header">
                  <h2 className="zsubjects">Subjects</h2>
                </div>
              </div>
            </div>
            <div className="zcalendar-navigation">
              <div className="zcalendar-controls">
                <div className="zcalendar-controls-child" />
                <div className="ztue">Tue</div>
                <div className="zdiv5">7</div>
              </div>
              <div className="znext-week">
                <div className="znext-week-button">
                  <img
                    className="zchevron-down-icon"
                    loading="lazy"
                    alt=""
                    src="Images/ChevronDown.png"
                    onClick={onChevronDownIconClick}
                  />
                </div>
                <div className="zprevious-week">
                  <div className="zprevious-week-button">
                    <div className="zprevious-controls">
                      <div className="zchevron-container">
                        <img
                          className="zchevron-down-icon1"
                          loading="lazy"
                          alt=""
                          src="Images/ChevronDown.png"
                        />
                        <img
                          className="zchevron-down-icon2"
                          loading="lazy"
                          alt=""
                          src="Images/ChevronDown.png"
                        />
                      </div>
                    </div>
                    <div className="zcalendar-day-container">
                      <div className="zcalendar-day-container-child" />
                      <div className="zwed">Wed</div>
                      <div className="zday-placeholder-container">
                        <div className="zdiv6">8</div>
                      </div>
                    </div>
                  </div>
                  <div className="zcalendar-view-all">
                    <a href="/" className="zsee-all1">See all</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="zsubject-progress">
            <div className="zphysics-progress">
              <div className="zphysics-container">
                <div className="zphysics-container-child" />
                <div className="zphysics-details">
                  <div className="zprogress-placeholder">
                    <b className="zb">1</b>
                  </div>
                  <div className="zprogress-divider">
                    <div className="zhome" />
                  </div>
                  <div className="zphysics-details-container">
                    <div className="zphysics-name">
                      <div className="zsubject-name">
                        <b className="zphysics">Physics</b>
                      </div>
                      <div className="zof-20-chapters">6 of 20 chapters</div>
                    </div>
                  </div>
                </div>
                <div className="zplaceholder-container">
                  <div className="zservices">17.00 - 18.00</div>
                </div>
              </div>
              <div className="zchemistry-progress">
                <div className="zchemistry-container">
                  <div className="zchemistry-container-child" />
                  <div className="zchemistry-details">
                    <div className="zchemistry-placeholder">
                      <b className="zcareer">2</b>
                    </div>
                    <div className="zchemistry-divider">
                      <div className="zcta" />
                    </div>
                    <div className="zchemistry-details-container">
                      <div className="zchemistry-name">
                        <div className="zchemistry-subject">
                          <b className="zchemistry">Chemistry</b>
                        </div>
                        <div className="zof-20-chapters1">8 of 20 chapters</div>
                      </div>
                    </div>
                  </div>
                  <div className="zchemistry-placeholder-containe">
                    <div className="zdiv7">18.00 - 19.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="zbiology-progress">
            <div className="zbiology-container">
              <div className="zbio-tech-container">
                <div className="zbio-tech-container-child" />
                <div className="zbio-tech-parent">
                  <div className="zbio-tech-details">
                    <b className="zb1">3</b>
                  </div>
                  <div className="zbio-tech-parent-inner">
                    <div className="zline-div" />
                  </div>
                  <div className="zbio-tech-name-parent">
                    <div className="zbio-tech-name-container">
                      <div className="zbio-tech-name-details">
                        <b className="zbiotechnology">BioTechnology</b>
                      </div>
                      <div className="zof-20-chapters2">5 of 20 chapters</div>
                    </div>
                  </div>
                </div>
                <div className="zbio-tech-space">
                  <div className="zbio-tech-blank">19.00 - 20.00</div>
                </div>
              </div>
              <div className="zbiology-details">
                <div className="zbiology-subject-details">
                  <div className="zbiology-subject-details-child" />
                  <div className="zsubject-progress-container">
                    <div className="zsubject-placeholder">
                      <b className="zb2">4</b>
                    </div>
                    <div className="zsubject-divider">
                      <div className="zsubject-divider-child" />
                    </div>
                    <div className="zsubject-details-container">
                      <div className="zsubject-name-container">
                        <div className="zsubject-name-chapter-count">
                          <b className="zbiology">Biology</b>
                        </div>
                        <div className="zof-20-chapters3">4 of 20 chapters</div>
                      </div>
                    </div>
                  </div>
                  <div className="zplaceholder-container-biology">
                    <div className="zdiv8">21.00 - 22.00</div>
                  </div>
                </div>
              </div>
              <div className="zbiology-details1">
                <div className="zrectangle-parent3">
                  <div className="zframe-child6" />
                  <div className="zframe-container">
                    <div className="zframe">
                      <b className="zb3">5</b>
                    </div>
                    <div className="zline-wrapper">
                      <div className="zframe-child7" />
                    </div>
                    <div className="zframe-wrapper1">
                      <div className="zframe-parent1">
                        <div className="zagriculture-wrapper">
                          <b className="zagriculture">Agriculture</b>
                        </div>
                        <div className="zof-20-chapters4">7 of 20 chapters</div>
                      </div>
                    </div>
                  </div>
                  <div className="zwrapper1">
                    <div className="zdiv9">16.00 - 17.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="zevents-container1">
    <div className="zevents-parent">
        <div className="zevents-title-parent">
            <h2 className="zupcoming-events">Upcoming Events</h2>
        </div>
        <div className="zevents-details">
            <div className="zevents-list">
                <div className="zevents-name-container">
                    <div className="zevents-name-container-child" />
                    <img
                        className="zpresentation-icon"
                        loading="lazy"
                        alt=""
                        src="Images/Presentation.png"
                    />
                </div>
                <div className="zevents-status-container">
                    <div className="zcoming-soon">Coming soon</div>
                </div>
            </div>
            <div className="zevents-list1">
                <div className="zrectangle-parent4">
                    <div className="zframe-child8" />
                    <img
                        className="ztraining-icon"
                        loading="lazy"
                        alt=""
                        src="Images/Training.png"
                    />
                </div>
                <div className="zcoming-soon-wrapper">
                    <div className="zcoming-soon1">Coming soon</div>
                </div>
            </div>
            <div className="zevents-list2">
                <div className="zevents-list-child" />
                <img
                    className="znetworking-icon2"
                    loading="lazy"
                    alt=""
                    src="Images/Study.png" 
                />
                <div className="zcoming-soon-container">
                    <div className="zcoming-soon2">Coming soon</div>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
      </div>
      <div className="zdiv10">3</div>
      <div className="zdesktop-4-child1" />
      <div className="zdesktop-4-child2" />
      <div className="zdesktop-4-child3" />
    </div>
  );
};

export default Desktop20;