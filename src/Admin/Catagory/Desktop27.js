
import "./Desktop27.css";
import { Link } from 'react-router-dom';
const Desktop27 = () => {
  return (
    <>
    <div className="a1desktop-14">
      <div className="a1calendar-134" />
      <div className="a1navigation">
        <div className="a1navigation-child" />
        <div className="a1top-navigation">
          <img
            className="a1group-icon4"
            loading="lazy"
            alt=""
            src="../images/Group.png"
          />
        </div>
        <div className="a1content-navigation">
          <div className="a1left-content-navigation">
            <div className="a1left-navigation-items">
              <img
                className="a1analytics-icon"
                loading="lazy"
                alt=""
                src="../images/dash.png"
              />
              <div className="a1dashboard-navigation">
                <b className="a1dashboard4">Dashboard</b>
              </div>
            </div>
          </div>
          <div className="a1right-content-navigation">
            <div className="a1right-navigation-items">
              <div className="a1right-navigation-items-child" />
              <img
                className="a1right-navigation-icon"
                alt=""
                src="../images/vector11.png"
              />
              <div className="a1category-navigation">
                <b className="a1catagory3">Catagory</b>
              </div>
            </div>
            <div className="a1query-navigation">
              <div className="a1query-items">
                <img
                  className="a1query-inner-join4"
                  alt=""
                  src="../Images/QueryInnerJoin.png"
                />
                <div className="a1courses-navigation">
                  <b className="a1courses5">Courses</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="a1bottom-navigation">
          <div className="a1left-bottom-navigation">
            <div className="a1left-bottom-items">
              <div className="a1left-bottom-actions">
                <img
                  className="a1help-icon4"
                  loading="lazy"
                  alt=""
                  src="../Images/Help.png"
                />
              </div>
              <div className="a1logout-icon6">
                <img className="a1aoi-editor-icon" alt="" src="../Images/12vv.png" />
              </div>
              <img
                className="a1logout-icon7"
                loading="lazy"
                alt=""
                src="../Images/Logout.png"
              />
            </div>
            <div className="a1right-bottom-navigation">
              <div className="a1right-bottom-item">
                <b className="a1help4">Help</b>
                <div className="a1settings-navigation">
                  <div className="a1settings-action">
                    <b className="a1setting4">Setting</b>
                    <b className="a1log-out4">Log out</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="a1content">
        <section className="a1main-content2">
          <header className="a1top-main-content">
            <div className="a1left-filter-parent">
              <div className="a1left-filter">
                <div className="a1category-filter">
                  <a href = "/" className="a1catagroy">Catagroy</a>
                  <div className="a1search-filter">
                    <div className="a1search-bar">
                      <div className="a1search-input">
                        <div className="a1search-input-child" />
                        <img
                          className="a1search-icon4"
                          alt=""
                          src="../Images/Search.png"
                        />
                        <div className="a1instructions-setup">
                        <input href ="" className="a1search4"  type="email" placeholder="Search" required/>
                        </div>
                      </div>
                    </div>
                    <div className="a1create-category">
                      <div className="a1create-category-icon" />
                      <Link to="CreateCatagory"> 
                      <b className="a1creation-catagory">Creation Catagory</b>
                      </Link>
                    </div>
                    <div className="a1first-icon">
                      <img
                        className="a1zoom-media-icon"
                        alt=""
                        src="../Images/vector.png"
                      />
                    </div>
                    <div className="a1second-icon">
                      <img
                        className="a1zoom-media-icon1"
                        alt=""
                        src="../Images/vector1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="a1right-filter">
                <div className="a1profile-image">
                  <img
                    className="a1image-51-icon2"
                    alt=""
                    src=""
                  />
                  <img
                    className="a1image-52-icon2"
                    loading="lazy"
                    alt=""
                    src="../Images/Image41.png"
                  />
                </div>
                <div className="a1admin-info-wrapper">
                  <div className="a1admin-info">
                    <img
                      className="a1chevron-down-icon4"
                      loading="lazy"
                      alt=""
                      src="../Images/ChevronDown.png"
                    />
                    <div className="a1admin-details">
                      <b className="a1adminr-name">Admin name</b>
                      <a href = "/" className="a1admin">Admin</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="a1categories">
            <div className="a1categories-child" />
            <div className="a1published-catagory-wrapper">
              <h3 className="a1published-catagory">Published Catagory</h3>
            </div>
            <div className="a1published-categories">
              <div className="a1first-published-category">
                <div className="a1first-published-category-child" />
                <div className="a1first-category-details">
                  <div className="a1first-category-content">
                    <div className="a1first-category-items">
                      <img
                        className="a1image-35-icon4"
                        alt=""
                        src="../Images/imgh.png"
                      />
                      <img
                        className="a1image-41-icon4"
                        loading="lazy"
                        alt=""
                        src="../Images/image41.png"
                      />
                    </div>
                    <b className="a1maths2">{`Maths `}</b>
                  </div>
                </div>
                <div className="a1first-category-info">
                  <div className="a1enrollment-info1">
                    <div className="a1continous-enrollement12">
                      Continous enrollement
                    </div>
                  </div>
                  <div className="a1first-category-actions">
                    <div className="a1first-action-icons">
                      <div className="a1first-action-items">
                        <img
                          className="a1image-47-icon13"
                          alt=""
                          src="../Images/image47.png"
                        />
                        <img
                          className="a1image-45-icon6"
                          alt=""
                          src="../Images/image49.png"
                        />
                      </div>
                    </div>
                    <div className="a1third-item-first-icon">
                      <img
                        className="a1image-46-icon6"
                        loading="lazy"
                        alt=""
                        src="../Images/image48.png"
                      />
                    </div>
                    <div className="a1see-more">
                      <div className="a1more12"> +27 more</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="a1second-published-category">
                <div className="a1second-category-details">
                  <div className="a1second-category-details-child" />
                  <div className="a1second-category-content">
                    <div className="a1second-category-items">
                      <div className="a1second-category-title">
                        <b className="a1science">Science</b>
                        <img className="a1image-36-icon4" alt="" src="../Images/img.png" />
                      </div>
                      {/*------------------------------------------------ */}
                      <img
                        className="a1image-42-icon4"
                        loading="lazy"
                        alt=""
                        src="../Images/image42.png"
                      />
                    </div>
                  </div>
                  <div className="a1second-category-info">
                    <div className="a1enrollment-info2">
                      <div className="a1continous-enrollement13">
                        Continous enrollement
                      </div>
                    </div>
                    <div className="a1second-category-actions">
                      <div className="a1second-action-icons">
                        <div className="a1second-action-items">
                          <img
                            className="a1image-48-icon10"
                            alt=""
                            src="../Images/image48.png"
                          />
                          <img
                            className="a1image-49-icon10"
                            alt=""
                            src="../Images/image49.png"
                          />
                        </div>
                      </div>
                      <div className="a1icon">
                        <img
                          className="a1image-47-icon14"
                          alt=""
                          src="../Images/image47.png"
                        />
                      </div>
                      <div className="a1more-label">
                        <div className="a1more13"> +27 more</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="a1technology-category">
                <div className="a1technology-content">
                  <div className="a1technology-content-child" />
                  <div className="a1technology-header">
                    <b className="a1technology">Technology</b>
                    <div className="a1technology-icons">
                      <img
                        className="a1image-37-icon4"
                        alt=""
                        src="../Images/image37.png"
                      />
                      <img
                        className="a1image-44-icon7"
                        loading="lazy"
                        alt=""
                        src="../Images/image44.png"
                      />
                    </div>
                  </div>
                  <div className="a1technology-details">
                    <div className="a1technology-enrollment">
                      <div className="a1continous-enrollement-wrapper2">
                        <div className="a1continous-enrollement14">
                          Continous enrollement
                        </div>
                      </div>
                      <div className="a1technology-users">
                        <div className="a1technology-user-icons">
                          <img
                            className="a1image-48-icon11"
                            alt=""
                            src="../Images/image48.png"
                          />
                          <img
                            className="a1image-49-icon11"
                            alt=""
                            src="../Images/image49.png"
                          />
                        </div>
                      </div>
                      <div className="a1technology-user-icon">
                        <img
                          className="a1image-47-icon15"
                          alt=""
                          src="../Images/image47.png"
                        />
                      </div>
                      <div className="a1technology-more-label">
                        <div className="a1more14"> +27 more</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div> 
            {/* */}
          
           
            <div className="a1category-items-wrapper">
              <div className="a1category-items">
                <div className="a1english-category">
                  <div className="a1english-category-child" />
                  <div className="a1english-details">
                    <div className="a1english-header">
                      <img
                        className="a1image-40-icon4"
                        alt=""
                        src="../Images/image40.png"  /**/
                      />
                      <img
                        className="a1image-44-icon8"
                        alt=""
                        src="../Images/image4.png"
                      />
                    </div>
                    <b className="a1computer-science2">{`Computer science `}</b>
                  </div>
                  <div className="a1computer-science-content">
                    <div className="a1computer-science-enrollment">
                      <div className="a1continous-enrollement-wrapper3">
                        <div className="a1continous-enrollement15">
                          Continous enrollement
                        </div>
                      </div>
                      <div className="a1computer-science-users">
                        <div className="a1computer-science-user-icons">
                          <div className="a1computer-science-user-icon-pai">
                            <img
                              className="a1image-48-icon12"
                              alt=""
                              src="../Images/image48.png"
                            />
                            <img
                              className="a1image-49-icon12"
                              alt=""
                              src="../Images/image49.png"
                            />
                          </div>
                        </div>
                        <div className="a1computer-science-more-icon">
                          <img
                            className="a1image-47-icon16"
                            alt=""
                            src="../Images/image47.png"
                          />
                        </div>
                        <div className="a1computer-science-more-label">
                          <div className="a1more15"> +27 more</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="a1english-category1">
                  <div className="a1english-category-item" />
                  <div className="a1frame-parent38">
                    <div className="a1english-frame">
                      <b className="a1english2">{`English `}</b>
                      <img className="a1image-38-icon4" alt="" src="../Images/image38.png" />
                    </div>
                    {/*--------------------------------------- */}
                    <img
                      className="a1image-45-icon7"
                      alt=""
                      src="../Images/image45.png"
                    />
                  </div>
                  <div className="a1frame-parent39">
                    <div className="a1continous-enrollement-wrapper4">
                      <div className="a1continous-enrollement16">
                        Continous enrollement
                      </div>
                    </div>
                    <div className="a1computer-science-more">
                      <div className="a1computer-science-more-icons">
                        <div className="a1computer-science-more-icon-pai">
                          <img
                            className="a1image-48-icon13"
                            alt=""
                            src="../Images/image48.png"
                          />
                          <img
                            className="a1image-49-icon13"
                            alt=""
                            src="../Images/image49.png"
                          />
                        </div>
                      </div>
                      <div className="a1computer-science-more-icon1">
                        <img
                          className="a1image-47-icon17"
                          alt=""
                          src="../Images/image47.png"
                        />
                      </div>
                      <div className="a1computer-science-more-label1">
                        <div className="a1more16"> +27 more</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="a1social-science-category">
                  <div className="a1social-science-content">
                    <div className="a1social-science-content-child" />
                    <div className="a1social-science-header">
                      <div className="a1social-science-title1">
                        <div className="a1social-science-icons1">
                          <img
                            className="a1image-39-icon4"
                            alt=""
                            src="../Images/image39.png"
                          />
                          <img
                            className="a1image-46-icon7"
                            alt=""
                            src="../Images/image46.png"
                          />
                        </div>
                        <b className="a1social-science3">{`Social science `}</b>
                      </div>
                    </div>
                    <div className="a1social-science-details">
                      <div className="a1social-science-enrollment1">
                        <div className="a1continous-enrollement17">
                          Continous enrollement
                        </div>
                      </div>
                      <div className="a1social-science-users">
                        <div className="a1social-science-user-icons">
                          <div className="a1social-science-user-icon-pair">
                            <img
                              className="a1image-48-icon14"
                              alt=""
                              src="../Images/image48.png"
                            />
                            <img
                              className="a1image-49-icon14"
                              alt=""
                              src="../Images/image49.png"
                            />
                          </div>
                        </div>
                        <div className="a1social-science-more-icon">
                          <img
                            className="a1image-47-icon18"
                            alt=""
                            src="../Images/image47.png"
                          />
                        </div>
                        <div className="a1social-science-more-label">
                          <div className="a1more17"> +27 more</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <b className="a1see-all3">See all</b>
          </div>
        </section>
      </main>
    </div>
    </>
  );
};

export default Desktop27;