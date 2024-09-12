import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop22.css";

const Desktop22 = () => {
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
    <div className="d1desktop-9">
      <div className="d1desktop-9-child" />
      <div className="d1desktop-9-item" />
      <div className="d1desktop-9-inner" />
      <div className="d1rectangle-parent24">
        <div className="d1frame-child31" />
        <div className="d1frame-parent10">
          <div className="d1group-container">
            <img
              className="d1group-icon3"
              loading="lazy"
              alt=""
              src="Images/Group.png"
            />
          </div>
          <div className="d1frame-parent11">
            <div className="d1frame-parent12">
              <div className="d1star-wrapper">
                <img
                  className="d1star-icon5"
                  loading="lazy"
                  alt=""
                  src="Images/dash.png"
                />
              </div>
              <div className="d1rating-circles-wrapper">
                <img
                  className="d1rating-circles-icon"
                  loading="lazy"
                  alt=""
                  src="Images/Vector11.png"
                />
              </div>
              <div className="d1frame-wrapper6">
                <div className="d1frame-parent13">
                  <div className="d1query-inner-join-wrapper">
                    <img
                      className="d1query-inner-join6"
                      loading="lazy"
                      alt=""
                      src="Images/QueryInnerJoin.png"
                    />
                  </div>
                  <div className="d1google-classroom1" />
                </div>
              </div>
            </div>
            <div className="d1frame-wrapper7">
              <div className="d1frame-parent14">
                <div className="d1dashboard-group">
                  <b className="d1dashboard4" onClick={onDashboardTextClick}>
                    Dashboard
                  </b>
                  <b className="d1category3">Category</b>
                </div>
                <div className="d1courses-wrapper">
                  <b className="d1courses5" onClick={onCoursesTextClick}>
                    Courses
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d1frame-wrapper8">
          <div className="d1task-parent">
            <div className="d1task1" />
            <div className="d1frame-wrapper9">
              <div className="d1frame-parent15">
                <div className="d1frame-parent16">
                  <div className="d1frame-wrapper10">
                    <div className="d1star-parent">
                      <img className="d1star-icon6" alt="" src="Images/Massege.png" />
                      <div className="d1star-group">
                        {/* <img
                          className="d1star-icon7"
                          alt=""
                          src="/vector-33.svg"
                        /> */}
                        <div className="d1star-container">
                          {/* <img
                            className="d1star-icon8"
                            alt=""
                            src="/vector-43.svg"
                          /> */}
                          {/* <img
                            className="d1vector-icon16"
                            loading="lazy"
                            alt=""
                            src="Images/Massege.png"
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d1frame-parent17">
                    <div className="d1help-wrapper">
                      <img
                        className="d1help-icon1"
                        loading="lazy"
                        alt=""
                        src="Images/help.png"
                      />
                    </div>
                    <div className="d1frame-parent18">
                      <div className="d1jack-obeng-wrapper">
                        <img
                          className="d1jack-obeng-icon"
                          loading="lazy"
                          alt=""
                          src="Images/12vv.png"
                        />
                      </div>
                      <img
                        className="d1logout-icon1"
                        loading="lazy"
                        alt=""
                        src="Images/Logout.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="d1messages-parent">
                  <b className="d1messages">FeedBack</b>
                  <div className="d1frame-wrapper11">
                    <div className="d1help-parent">
                      <b className="d1help3">Help</b>
                      <div className="d1frame-wrapper12">
                        <div className="d1setting-group">
                          <b className="d1setting3">Setting</b>
                          <b className="d1log-out3">Log out</b>
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
      <main className="d1frame-main">
        <section className="d1frame-section">
          <header className="d1frame-header">
            <div className="d1frame-parent19">
              <div className="d1categoryscience-chemistry-wrapper">
                <a href = "/" className="d1categoryscience-chemistry1">
                  Category/Science/ Chemistry
                </a>
              </div>
              <div className="d1rectangle-parent25">
                <div className="d1frame-child32" />
                <img className="d1search-icon2" alt="" src="Images/Search.png" />
                <div className="d1search-wrapper1">
                  <a href = "/" className="d1search2">Search</a>
                </div>
              </div>
            </div>
            <div className="d1frame-wrapper13">
              <div className="d1frame-parent20">
                <div className="d1robert-mawuli-senyo-parent">
                  <img
                    className="d1robert-mawuli-senyo"
                    loading="lazy"
                    alt=""
                    src="Images/Vector.png"
                  />
                  <div className="d1vector-wrapper2">
                    <img
                      className="d1vector-icon17"
                      loading="lazy"
                      alt=""
                      src="Images/Vector1.png"
                    />
                  </div>
                </div>
                <div className="d1frame-wrapper14">
                  <div className="d1image-9-container">
                    <img
                      className="d1image-9-icon3"
                      loading="lazy"
                      alt=""
                      src="Images/image41.png"
                    />
                    <div className="d1frame-wrapper15">
                      <div className="d1frame-parent21">
                        <div className="d1user-name-group">
                          <a href = "/"
                            className="d1user-name3"
                            onClick={onUserNameTextClick}
                          >
                            User Name
                          </a>
                          <div className="d1user-container">
                            <a href = "/" className="d1user3">User</a>
                          </div>
                        </div>
                        <img
                          className="d1chevron-down-icon5"
                          alt=""
                          src="Images/ChevronDown@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="d1frame-wrapper16">
            <div className="d1frame-parent22">
              <div className="d1rectangle-parent26">
                <div className="d1frame-child33" />
                <div className="d1frame-wrapper17">
                  <div className="d1image-15-parent">
                    <img
                      className="d1image-15-icon1"
                      loading="lazy"
                      alt=""
                      src="Images/AfterCreatepic.png"
                    />
                    <div className="d1frame-wrapper18">
                      <div className="d1frame-parent23">
                        <div className="d1matter-wrapper">
                          <h3 className="d1matter1">Matter</h3>
                        </div>
                        <div className="d1matter-is-one-of-the-very-impo-parent">
                          <div className="d1matter-is-one1">
                            Matter is one of the very important topic in
                            Chemistry. Matter is anything that takes up space
                            and can be weighed. In other words, matter has
                            volume and mass. There are many different
                            substances, or types of matter, in the universe.
                          </div>
                          <div className="d1image-44-parent">
                            <img
                              className="d1image-44-icon1"
                              loading="lazy"
                              alt=""
                              src="Images/images.png"
                            />
                            <div className="d1shyam-nithin-wrapper">
                              <b className="d1shyam-nithin2">Shyam Nithin</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d1content4">
                  <h3 className="d1content5">Content</h3>
                </div>
                <div className="d1frame-parent24">
                  <div className="d1frame-wrapper19">
                    <div className="d1frame-parent25">
                      <div className="d1article-header-parent">
                        <div className="d1article-header">
                          <div className="d1article-header-child" />
                          <div className="d1article-titles">
                            <div className="d1rectangle-parent27">
                              <div className="d1frame-child34" />
                              <b className="d1what-is-matter1">What is matter?</b>
                            </div>
                            <div className="d1matter-definitions">
                              <div className="d1a-common-or1">{`A common or traditional definition of matter is "anything that has mass and volume (occupies space)". `}</div>
                            </div>
                          </div>
                          <div className="d1downloads1">
                            <div className="d1download-buttons">
                              <div className="d1download-buttons-child" />
                              <b className="d1download5">Download</b>
                            </div>
                          </div>
                        </div>
                        <div className="d1article-header1">
                          <div className="d1article-header-item" />
                          <div className="d1frame-parent26">
                            <div className="d1rectangle-parent28">
                              <div className="d1frame-child35" />
                              <b className="d1chemical-element1">
                                Chemical Element
                              </b>
                            </div>
                            <div className="d1a-chemical-element-is-a-pure-s-wrapper">
                              <div className="d1a-chemical-element1">
                                A chemical element is a pure substance that
                                consists of atoms with the same number of
                                protons in the nucleus.
                              </div>
                            </div>
                          </div>
                          <div className="d1article-header-inner">
                            <div className="d1rectangle-parent29">
                              <div className="d1frame-child36" />
                              <b className="d1download6">Download</b>
                            </div>
                          </div>
                        </div>
                        <div className="d1article-header2">
                          <div className="d1article-header-child1" />
                          <div className="d1frame-parent27">
                            <div className="d1rectangle-parent30">
                              <div className="d1frame-child37" />
                              <b className="d1phase-changes1">Phase Changes</b>
                            </div>
                            <div className="d1heat-decides-the-state-of-matt-container">
                              <div className="d1heat-decides-the1">
                                Heat decides the state of matter. Heat plays an
                                important role in converting one state of matter
                                to another. Adding heat or taking off heat
                                brings in change of state/ phase.
                              </div>
                            </div>
                          </div>
                          <div className="d1article-header-inner1">
                            <div className="d1rectangle-parent31">
                              <div className="d1frame-child38" />
                              <b className="d1download7">Download</b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d1separating-mixtures1">
                        <div className="d1separating-mixtures-child" />
                        <div className="d1mixture-content">
                          <div className="d1mixtures-heading">
                            <div className="d1mixtures-heading-child" />
                            <b className="d1separating-mixtures2">
                              Separating Mixtures
                            </b>
                          </div>
                          <div className="d1mixtures-description">
                            <div className="d1mixtures-can-be1">
                              Mixtures can be separated using various separation
                              methods such filtration,separating
                              funnel,sublimation,simple distillation and paper
                              chromatography.
                            </div>
                          </div>
                        </div>
                        <div className="d1mixture-download">
                          <div className="d1download-button1">
                            <div className="d1download-button-child" />
                            <b className="d1download8">Download</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d1changes-navigation">
                    <img
                      className="d1changes-navigation-child"
                      loading="lazy"
                      alt=""
                      src="/rectangle-360.svg"
                    />
                    <img
                      className="d1changes-navigation-item"
                      alt=""
                      src="/rectangle-360-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="d1chemical-changes1">
                <div className="d1change-content">
                  <div className="d1change-content-child" />
                  <div className="d1change-description">
                    <div className="d1change-heading">
                      <div className="d1change-heading-child" />
                      <b className="d1physical-and-chemical1">
                        Physical and chemical changes
                      </b>
                    </div>
                    <div className="d1change-explanation">
                      <div className="d1a-chemical-change1">
                        A chemical change is any change that results in the
                        formation of new chemical substances with new
                        properties.
                      </div>
                    </div>
                  </div>
                  <div className="d1change-download">
                    <div className="d1rectangle-parent32">
                      <div className="d1frame-child39" />
                      <b className="d1download9">Download</b>
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

export default Desktop22;