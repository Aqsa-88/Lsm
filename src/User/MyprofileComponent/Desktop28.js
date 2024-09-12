import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop28.css";

const Desktop28 = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onCoursesTextClick = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  return (
    <div className="h1desktop-3">
      <div className="h1calendar-13" />
      <div className="h1rectangle-parent43">
        <div className="h1frame-child50" />
        <div className="h1frame-parent42">
          <div className="h1group-wrapper2">
            <img
              className="h1group-icon6"
              loading="lazy"
              alt=""
              src="Images/Group.png"
            />
          </div>
          <div className="h1frame-parent43">
            <div className="h1frame-parent44">
              <div className="h1details-wrapper">
                <img
                  className="h1details-icon"
                  loading="lazy"
                  alt=""
                  src="Images/dash.png"
                />
              </div>
              <img
                className="h1beximco-pharma-ltd"
                loading="lazy"
                alt=""
                src="Images/Vector11.png"
              />
              <div className="h1query-inner-join-container">
                <img
                  className="h1query-inner-join8"
                  loading="lazy"
                  alt=""
                  src="Images/QueryInnerJoin.png"
                />
              </div>
            </div>
            <div className="h1frame-wrapper30">
              <div className="h1dashboard-container">
                <b className="h1dashboard6" onClick={onDashboardTextClick}>
                  Dashboard
                </b>
                <b className="h1category4">Category</b>
                <div className="h1courses-frame">
                  <b className="h1courses6" onClick={onCoursesTextClick}>
                    Courses
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h1google-classroom2" />
        <div className="h1frame-wrapper31">
          <div className="h1checked-user-male-parent">
            <div className="h1checked-user-male3" />
            <div className="h1frame-wrapper32">
              <div className="h1frame-parent45">
                <div className="h1frame-wrapper33">
                  <div className="h1frame-parent46">
                    <div className="h1feedback-container-wrapper">
                      <div className="h1feedback-container">
                        <img
                          className="h1feedback-icon"
                          loading="lazy"
                          alt=""
                          src="Images/Massege.png"
                        />
                        <div className="h1feedback-wrapper">
                          <b className="h1feedback5">FeedBack</b>
                        </div>
                      </div>
                    </div>
                    <div className="h1help-parent1">
                      <img
                        className="h1help-icon3"
                        loading="lazy"
                        alt=""
                        src="Images/help.png"
                      />
                      <div className="h1help-wrapper1">
                        <b className="h1help5">Help</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h1setting-container-parent">
                  <div className="h1setting-container1">
                    <img
                      className="h1setting-icon"
                      loading="lazy"
                      alt=""
                      src="Images/12vv.png"
                    />
                    <div className="h1setting-wrapper">
                      <b className="h1setting5">Setting</b>
                    </div>
                  </div>
                  <div className="h1logout-parent">
                    <img
                      className="h1logout-icon4"
                      loading="lazy"
                      alt=""
                      src="Images/Logout.png"
                    />
                    <div className="h1log-out-wrapper">
                      <b className="h1log-out5">Log out</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="h1desktop-3-inner">
        <section className="h1frame-parent47">
          <header className="h1frame-parent48">
            <div className="h1my-profile-wrapper">
              <h1 className="h1my-profile">My profile</h1>
            </div>
            <div className="h1frame-parent49">
              <div className="h1frame-wrapper34">
                <div className="h1profile-icon-parent">
                  <img
                    className="h1profile-icon"
                    loading="lazy"
                    alt=""
                    src="Images/Vector.png"
                  />
                  <div className="h1image-placeholder-wrapper">
                    <img
                      className="h1image-placeholder-icon"
                      loading="lazy"
                      alt=""
                      src="Images/Vector1.png"
                    />
                  </div>
                </div>
              </div>
              <div className="h1image-9-parent1">
                <img
                  className="h1image-9-icon4"
                  loading="lazy"
                  alt=""
                  src="Images/image57.png"
                />
                <div className="h1name-container-wrapper">
                  <div className="h1name-container">
                    <div className="h1user-name-parent1">
                      <b className="h1user-name4">User Name</b>
                      <div className="h1student-wrapper">
                        <a href = "/" className="h1student">Student</a>
                      </div>
                    </div>
                    <img
                      className="h1chevron-down-icon8"
                      loading="lazy"
                      alt=""
                      src="Images/ChevronDown.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="h1information-content-wrapper">
            <div className="h1information-content">
              <img
                className="h1image-56-icon"
                loading="lazy"
                alt=""
                src="/image-94@2x.png"
              />
              <div className="h1information-details">
                <div className="h1information-details-child" />
                <div className="h1details-container">
                  <div className="h1information-header">
                    <div className="h1header-content">
                      <b className="h1user-information1">USER INFORMATION</b>
                      <div className="h1napa-syrup-parent">
                        <div className="h1napa-syrup" />
                        <a href = "/" className="h1edit">Edit</a>
                      </div>
                    </div>
                    <div className="h1information-fields">
                      <div className="h1field-labels">
                        <b className="h1username">Username</b>
                        <input className="h1input-fields" />
                      </div>
                      <div className="h1field-labels1">
                        <b className="h1email-address1">Email address</b>
                        <input className="h1field-labels-child" />
                      </div>
                    </div>
                  </div>
                  <div className="h1upload-content-wrapper">
                    <div className="h1upload-content">
                      <div className="h1image-preview">
                        <img
                          className="h1image-57-icon"
                          alt=""
                          src="Images/image9.png"
                        />
                      </div>
                      <div className="h1change-image-button-parent">
                        <div className="h1change-image-button" />
                        <div className="h1change-image">Change Image</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h1first-name-parent">
                  <b className="h1first-name">First name</b>
                  <input className="h1div11" />
                </div>
                <div className="h1last-name-content-parent">
                  <div className="h1last-name-content">
                    <b className="h1last-name">Last name</b>
                  </div>
                  <input className="h1box" />
                </div>
                <div className="h1frame-parent50">
                  <div className="h1address-content-parent">
                    <div className="h1address-content">
                      <div className="h1address-header">
                        <div className="h1address-title-wrapper">
                          <div className="h1address-title">
                            <b className="h1contact-information">
                              CONTACT INFORMATION
                            </b>
                            <b className="h1address">Address</b>
                          </div>
                        </div>
                        <div className="h1medicine-type-parent">
                          <div className="h1medicine-type" />
                          <div className="h1edit1">Edit</div>
                        </div>
                      </div>
                    </div>
                    <input className="h1image" />
                  </div>
                  <div className="h1phone-number-parent">
                    <div className="h1phone-number">
                      <b className="h1phone-no">Phone No</b>
                    </div>
                    <input className="h1frame-child51" />
                  </div>
                </div>
                <div className="h1gender-parent">
                  <b className="h1gender">Gender</b>
                  <input className="h1gender-field" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="h1profile-footer">
        <div className="h1addcirclefillwghtgradopsz" />
      </div>
    </div>
  );
};

export default Desktop28;