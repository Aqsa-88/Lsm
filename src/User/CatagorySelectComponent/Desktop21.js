import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { Link } from "react-router-dom";
import "./Desktop21.css";

const Desktop21 = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/DashboardComponent");
  }, [navigate]);

  const onCoursesTextClick = useCallback(() => {
    navigate("/CourseComponent");
  }, [navigate]);

  const onUserNameTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="k1s1desktop-5">
      <div className="k1s1desktop-5-child" />
      <div className="k1s1desktop-5-item" />
      <img className="k1s1desktop-5-inner" alt="" src="/rectangle-387.svg" />
      <div className="k1s1desktop-5-child1" />
      <div className="k1s1rectangle-parent6">
        <div className="k1s1frame-child10" />
        <div className="k1s1content-area">
          <div className="k1s1group-wrapper">
            <img
              className="k1s1group-icon2"
              loading="lazy"
              alt=""
              src="Images/Group.png"
            />
          </div>
          <div className="k1s1right-sidebar1">
            <div className="k1s1sidebar-content1">
              <div className="k1s1sidebar-items">
                <img
                  className="k1s1home-icon"
                  loading="lazy"
                  alt=""
                  src="Images/dash.png"
                />
              </div>
              <div className="k1s1sidebar-items1">
                <img
                  className="k1s1icon"
                  loading="lazy"
                  alt=""
                  src="Images/Vector11.png"
                />
              </div>
              
              <div className="k1s1sidebar-items2">
                <div className="k1s1sidebar-items3">
                  <div className="k1s1inner-items">
                    <img
                      className="k1s1query-inner-join5"
                      loading="lazy"
                      alt=""
                      src="Images/QueryInnerJoin.png"
                    />
                  </div>
                  <div className="k1s1inner-icon">
                      <div className="k1s1icon-parent">
                         <div className="k1s1vector-parent1">
                        
                          <img
                            className="k1s1vector-icon14"
                            loading="lazy"
                            alt=""
                            src="Images/Massege.png"
                          />
                        </div>
                      </div>
                    </div>
                  <div className="k1s1inner-icon1">
                      <img
                        className="k1s1help-icon"
                        loading="lazy"
                        alt=""
                        src="Images/help.png"
                      />
                    </div>
                    <div className="k1s1action-icons2">
                      <div className="k1s1inner-icon2">
                        <img
                          className="k1s1icon3"
                          loading="lazy"
                          alt=""
                          src="Images/12vv.png"
                        />
                      </div>
                      <img
                        className="k1s1logout-icon"
                        loading="lazy"
                        alt=""
                        src="Images/Logout.png"
                      />
                    </div>
                  <div className="k1s1google-classroom" />
                </div>
              </div>
            </div>
            <div className="k1s1sidebar-items4">
              <div className="k1s1inner-items1">
                <div className="k1s1dashboard-parent">
                  <b className="k1s1dashboard3" onClick={onDashboardTextClick}>
                    Dashboard
                  </b>
                  <Link to="/CatgoryAfterPaid">
                  <b className="k1s1category1">Category</b>
                  </Link>
                </div>
                <div className="k1s1inner-items2">
                  <b className="k1s1courses4" onClick={onCoursesTextClick}>
                    Courses
                  </b>
                </div>
                <div className="k1s1action-items1">
                  <b className="k1s1feedback4">FeedBack</b>
                  <div className="k1s1action-sub-items">
                    <div className="k1s1inner-items3">
                      <b className="k1s1help2">Help</b>
                      <div className="k1s1inner-items4">
                        <div className="k1s1setting-parent">
                          <b className="k1s1setting2">Setting</b>
                          <b className="k1s1log-out2">Log out</b>
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
      <main className="k1s1right-sidebar2">
        <section className="k1s1sidebar-content2">
          <div className="k1s1sidebar-items5">
            <div className="k1s1category-parent">
              <div className="k1s1category2">
                <a href = "/" className="k1s1categoryscience-chemistry">
                  Category/Science/ Chemistry
                </a>
              </div>
              <div className="k1s1search-bar">
                <div className="k1s1rectangle-parent7">
                  <div className="k1s1frame-child11" />
                  <img className="k1s1search-icon1" alt="" src="Images/Search.png" />
                  <div className="k1s1search-frame">
                    <a href = "/" className="k1s1search1">Search</a>
                  </div>
                </div>
                <div className="k1s1icons1">
                  <div className="k1s1inner-icons">
                    <img
                      className="k1s1next-icon"
                      loading="lazy"
                      alt=""
                      src="Images/Vector.png"
                    />
                    <div className="k1s1inner-icons1">
                      <img
                        className="k1s1vector-icon15"
                        loading="lazy"
                        alt=""
                        src="Images/Vector1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scrollable-container">
            <div className="k1s1sidebar-items6">
              <div className="k1s1content-details">
                <div className="k1s1title-parent">
                  <div className="k1s1title">
                    <div className="k1s1header1">
                      <div className="k1s1subject">
                        <h3 className="k1s1matter">Matter</h3>
                      </div>
                      <div className="k1s1matter-is-one">
                        Matter is one of the very important topic in Chemistry.
                        Matter is anything that takes up space and can be
                        weighed. In other words, matter has volume and mass.
                        There are many different substances, or types of matter,
                        in the universe.
                      </div>
                    </div>
                  </div>
                  <div className="k1s1author">
                    <b className="k1s1shyam-nithin1">Shyam Nithin</b>
                  </div>
                  <div className="k1s1content2">
                    <div className="k1s1body">
                      <div className="k1s1content-type">
                        <h3 className="k1s1content3">Content</h3>
                      </div>
                      <div className="k1s1rectangle-parent8">
                        <div className="k1s1frame-child12" />
                        <div className="k1s1question">
                          <div className="k1s1question-child" />
                          <b className="k1s1what-is-matter">What is matter?</b>
                        </div>
                        <div className="k1s1answer">
                          <div className="k1s1a-common-or">{`A common or traditional definition of matter is "anything that has mass and volume (occupies space)". `}</div>
                        </div>
                        <div className="k1s1download-button">
                          <div className="k1s1download-link">
                            <div className="k1s1download-link-child" />
                            <b className="k1s1download">Download</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="k1s1images">
                    <div className="k1s1images-child" />
                    <img
                      className="k1s1image-15-icon"
                      loading="lazy"
                      alt=""
                      src="Images/AfterCreatepic.png"
                    />
                    <div className="k1s1rectangle-parent9">
                      <div className="k1s1frame-child13" />
                      <div className="k1s1frame-child14" />
                    </div>
                    <img
                      className="k1s1image-44-icon"
                      loading="lazy"
                      alt=""
                      src="Images/images.png"
                    />
                  </div>
                  <div className="k1s1frame-parent2">
                    <div className="k1s1frame-parent3">
                      <div className="k1s1rectangle-parent10">
                        <div className="k1s1frame-child15" />
                        <div className="k1s1elements">
                          <div className="k1s1elements-child" />
                          <b className="k1s1chemical-element">Chemical Element</b>
                        </div>
                        <div className="k1s1description">
                          <div className="k1s1a-chemical-element">
                            A chemical element is a pure substance that consists
                            of atoms with the same number of protons in the
                            nucleus.
                          </div>
                        </div>
                        <div className="k1s1downloads">
                          <div className="k1s1rectangle-parent11">
                            <div className="k1s1frame-child16" />
                            <b className="k1s1download1">Download</b>
                          </div>
                        </div>
                      </div>
                      <div className="k1s1rectangle-parent12">
                        <div className="k1s1frame-child17" />
                        <div className="k1s1rectangle-parent13">
                          <div className="k1s1frame-child18" />
                          <b className="k1s1phase-changes">Phase Changes</b>
                        </div>
                        <div className="k1s1heat-decides-the-state-of-matt-wrapper">
                          <div className="k1s1heat-decides-the">
                            Heat decides the state of matter. Heat plays an
                            important role in converting one state of matter to
                            another. Adding heat or taking off heat brings in
                            change of state/ phase.
                          </div>
                        </div>
                        <div className="k1s1frame-wrapper2">
                          <div className="k1s1rectangle-parent14">
                            <div className="k1s1frame-child19" />
                            <b className="k1s1download2">Download</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="k1s1separation">
                      <div className="k1s1separation-child" />
                      <div className="k1s1rectangle-parent15">
                        <div className="k1s1frame-child20" />
                        <b className="k1s1separating-mixtures">
                          Separating Mixtures
                        </b>
                      </div>
                      <div className="k1s1mixtures-can-be-separated-usin-wrapper">
                        <div className="k1s1mixtures-can-be">
                          Mixtures can be separated using various separation
                          methods such filtration,separating
                          funnel,sublimation,simple distillation and paper
                          chromatography.
                        </div>
                      </div>
                      <div className="k1s1separation-download">
                        <div className="k1s1rectangle-parent16">
                          <div className="k1s1frame-child21" />
                          <b className="k1s1download3">Download</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="k1s1changes">
                  <div className="k1s1rectangle-parent17">
                    <div className="k1s1frame-child22" />
                    <div className="k1s1rectangle-parent18">
                      <div className="k1s1frame-child23" />
                      <b className="k1s1physical-and-chemical">
                        Physical and chemical changes
                      </b>
                    </div>
                    <div className="k1s1a-chemical-change-is-any-chang-wrapper">
                      <div className="k1s1a-chemical-change">
                        A chemical change is any change that results in the
                        formation of new chemical substances with new
                        properties.
                      </div>
                    </div>
                    <div className="k1s1changes-download">
                      <div className="k1s1rectangle-parent19">
                        <div className="k1s1frame-child24" />
                        <b className="k1s1download4">Download</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
       
        <div className="k1s1profile-image">
          <div className="k1s1profile-image-inner">
            <div className="k1s1frame-parent4">
              <div className="k1s1image-9-group">
                <img
                  className="k1s1image-9-icon2"
                  loading="lazy"
                  alt=""
                  src="Images/image41.png"
                />
                <div className="k1s1frame-wrapper3">
                  <div className="k1s1user-name-parent">
                    <a href = "/" className="k1s1user-name2" onClick={onUserNameTextClick}>
                      User Name
                    </a>
                    <div className="k1s1user-wrapper">
                      <a href = "/" className="k1s1user2">User</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="k1s1chevron-down-wrapper">
                <img
                  className="k1s1chevron-down-icon4"
                  alt=""
                  src="Images/ChevronDown.png"
                />
              </div>
            </div>
          </div>
          <div className="scrollable">
          <div className="k1s1rectangle-parent20">
            <div className="k1s1frame-child25" />
            <div className="k1s1buy-vedios-coures-parent">
              <h3 className="k1s1buy-vedios-coures">Buy Vedios Coures</h3>
              <div className="k1s1see-all-wrapper">
                <div className="k1s1see-all2">See all</div>
              </div>
            </div>
            <div className="k1s1chemistry-course">
              <div className="k1s1indroduction-of-chemistry-and-parent">
                <b className="k1s1indroduction-of-chemistry">{`Indroduction of Chemistry and Details of Types `}</b>
                <div className="k1s1chemistry-parent">
                  <b className="k1s1chemistry1">Chemistry</b>
                  <div className="k1s1paid-parent">
                    <b className="k1s1paid">Paid</b>
                    <div className="k1s1wrapper2">
                      <b className="k1s1b4">$12</b>
                    </div>
                  </div>
                  <div className="k1s1frame-parent5">
                    <div className="k1s1m-wrapper">
                      <b className="k1s1m">12M</b>
                    </div>
                    <b className="k1s1discription">Discription</b>
                  </div>
                  <img
                    className="k1s1rectangle-icon"
                    loading="lazy"
                    alt=""
                    src="Images/Play.png"
                  />
                </div>
                <div className="k1s1course-images">
                  <div className="k1s1course-images-child" />
                  <img
                    className="k1s1course-images-item"
                    alt=""
                    src="Images/Eye.png"
                  />
                  <img
                    className="k1s1eng-1-icon"
                    loading="lazy"
                    alt=""
                    src="Images/Eng.png"
                  />
                </div>
              </div>
              <div className="k1s1indroduction-of-chemistry-and-parent">
                <b className="k1s1indroduction-of-chemistry">{`Indroduction of Chemistry and Details of Types `}</b>
                <div className="k1s1chemistry-parent">
                  <b className="k1s1chemistry1">Chemistry</b>
                  <div className="k1s1paid-parent">
                    <b className="k1s1paid">Paid</b>
                    <div className="k1s1wrapper2">
                      <b className="k1s1b4">$12</b>
                    </div>
                  </div>
                  <div className="k1s1frame-parent5">
                    <div className="k1s1m-wrapper">
                      <b className="k1s1m">12M</b>
                    </div>
                    <b className="k1s1discription">Discription</b>
                  </div>
                  <img
                    className="k1s1rectangle-icon"
                    loading="lazy"
                    alt=""
                    src="Images/Play.png"
                  />
                </div>
                <div className="k1s1course-images">
                  <div className="k1s1course-images-child" />
                  <img
                    className="k1s1course-images-item"
                    alt=""
                    src="Images/Eye.png"
                  />
                  <img
                    className="k1s1eng-1-icon"
                    loading="lazy"
                    alt=""
                    src="Images/Eng.png"
                  />
                </div>
              </div>
              <div className="k1s1indroduction-of-chemistry-and-parent">
                <b className="k1s1indroduction-of-chemistry">{`Indroduction of Chemistry and Details of Types `}</b>
                <div className="k1s1chemistry-parent">
                  <b className="k1s1chemistry1">Chemistry</b>
                  <div className="k1s1paid-parent">
                    <b className="k1s1paid">Paid</b>
                    <div className="k1s1wrapper2">
                      <b className="k1s1b4">$12</b>
                    </div>
                  </div>
                  <div className="k1s1frame-parent5">
                    <div className="k1s1m-wrapper">
                      <b className="k1s1m">12M</b>
                    </div>
                    <b className="k1s1discription">Discription</b>
                  </div>
                  <img
                    className="k1s1rectangle-icon"
                    loading="lazy"
                    alt=""
                    src="Images/Play.png"
                  />
                </div>
                <div className="k1s1course-images">
                  <div className="k1s1course-images-child" />
                  <img
                    className="k1s1course-images-item"
                    alt=""
                    src="Images/Eye.png"
                  />
                  <img
                    className="k1s1eng-1-icon"
                    loading="lazy"
                    alt=""
                    src="Images/Eng.png"
                  />
                </div>
              </div>
              <div className="k1s1indroduction-of-chemistry-and-parent">
                <b className="k1s1indroduction-of-chemistry">{`Indroduction of Chemistry and Details of Types `}</b>
                <div className="k1s1chemistry-parent">
                  <b className="k1s1chemistry1">Chemistry</b>
                  <div className="k1s1paid-parent">
                    <b className="k1s1paid">Paid</b>
                    <div className="k1s1wrapper2">
                      <b className="k1s1b4">$12</b>
                    </div>
                  </div>
                  <div className="k1s1frame-parent5">
                    <div className="k1s1m-wrapper">
                      <b className="k1s1m">12M</b>
                    </div>
                    <b className="k1s1discription">Discription</b>
                  </div>
                  <img
                    className="k1s1rectangle-icon"
                    loading="lazy"
                    alt=""
                    src="Images/Play.png"
                  />
                </div>
                <div className="k1s1course-images">
                  <div className="k1s1course-images-child" />
                  <img
                    className="k1s1course-images-item"
                    alt=""
                    src="Images/Eye.png"
                  />
                  <img
                    className="k1s1eng-1-icon"
                    loading="lazy"
                    alt=""
                    src="Images/Eng.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default Desktop21;