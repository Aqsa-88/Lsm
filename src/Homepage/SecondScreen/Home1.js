import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./Home1.css";

const Home1 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  return (
    <div className="m1homee1">
      <div className="m1calendar-13e1" />
      <div className="m1query-inner-joine1" />
      <div className="m1navigatione1">
        <header className="m1frame-parente1">
          <div className="m1catagroy-parente1">
            <h1 className="m1catagroye1">Catagroy</h1>
            <div className="m1frame-groupe1">
              <div className="m1rectangle-parente1">
                <div className="m1frame-childe1" />
                <img className="m1search-icone1" alt="" src="/Images/Search.png" />
                <div className="m1search-wrappere1">
                  <a  href ="/" className="m1searche1">Search</a>
                </div>
              </div>
              <div className="m1frame-wrappere1">
                <div className="m1watches-parente1">
                  <img
                    className="m1watches-icone1"
                    loading="lazy"
                    alt=""
                    src="/Images/Vector.png"
                  />
                  <div className="m1navigation-icon-wrappere1">
                    <img
                      className="m1navigation-icone1"
                      alt=""
                      src="/Images/Vector1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m1auth-wrappere1">
            <div className="m1authe1">
              <div className="m1auth-buttonse1">
                <Link to ="/" className="m1home1e1">Home</Link>
              </div>
              <div className="m1auth-buttons1e1">
                <Link  className="m1sign-ine1" to="/signin">Sign in</Link>
              </div>
              <div className="m1signupe1">
                <img
                  className="m1signup-childe1"
                  alt=""
                  src="/Images/Rectangle540.png"
                  onClick={onRectangleClick}
                />
                <Link  to="/Signup" className="m1sign-upe1">Sign Up</Link>
              </div>
            </div>
          </div>
        </header>
      </div>
      <main className="m1contente1">
        <div className="m1content-childe1" />
        <div className="m1frame-containere1">
          <div className="m1top-categories-parente1">
            <div className="m1top-categoriese1">
              <h3 className="m1top-catagorye1">Top Catagory</h3>
            </div>
            <div className="m1categoriese1">
              <b className="m1mathse1">{`Maths `}</b>
              <div className="m1maths-imagese1">
                <div className="m1maths-image-placeholdere1" />
                <div className="m1maths-images-rowe1">
                  <img
                    className="m1image-35-icone1"
                    alt=""
                    src="/Images/imgh.png"
                  />
                  <img
                    className="m1image-411-icone1"
                    loading="lazy"
                    alt=""
                    src="/Images/image41.png"
                  />
                </div>
                <img
                  className="m1image-46-icone1"
                  loading="lazy"
                  alt=""
                  src="/Images/image47.png"
                />
                <img className="m1image-47-icone1" alt="" src="/Images/image49.png" />
                <img className="m1image-45-icone1" alt="" src="/Images/image48.png" />
              </div>
              <div className="m1maths-enrollmente1">
                <div className="m1maths-enrollment-label-parente1">
                  <div className="m1maths-enrollment-labele1">
                    <div className="m1continous-enrollemente1">
                      Continous enrollement
                    </div>
                  </div>
                  <div className="m1moree1"> +27 more</div>
                </div>
              </div>
            </div>
          </div>
          <div className="m1computer-sciencee1">
            <div className="m1product-containere1">
              <b className="m1computer-science1e1">{`Computer science `}</b>
            </div>
            <div className="m1computer-science-imagese1">
              <div className="m1computer-science-image-placehoe1">
                <div className="m1wrapper-rectangle-438e1">
                  {/* <img
                    className="m1wrapper-rectangle-438-childe1"
                    alt=""
                    src="/Images/image40.png"
                  /> */}
                  <img
                    className="m1image-41-icone1"
                    loading="lazy"
                    alt=""
                    src="/Images/image4.png"
                  />
                </div>
                {/* <img className="m1image-40-icone1" alt="" src="/Images/image40.png" /> */}
              </div>
              <img
                className="m1image-44-icone1e1"
                loading="lazy"
                alt=""
                src="/Images/image40.png"
              />
              
              <img className="m1image-47-icon1e1" alt="" src="/Images/image47.png" />
              <img className="m1image-48-icone1" alt="" src="/Images/image49.png" />
              <img className="m1image-49-icone1" alt="" src="/Images/image48.png" />
            </div>
            <div className="m1computer-science-enrollmente1">
              <div className="m1continous-enrollement1e1">
                Continous enrollement
              </div>
              <div className="m1more1e1"> +27 more</div>
            </div>
          </div>
        </div>
        <div className="m1sciencee1">
          <div className="m1science-labele1">
            <div className="m1science-parente1">
              <b className="m1science1e1">Science</b>
              <div className="m1science-imagese1">
                <div className="m1ringse1" />
                <div className="m1science-images-rowe1">
                  <img
                    className="m1image-36-icone1"
                    alt=""
                    src="/Images/img.png"
                  />
                  <img
                    className="m1image-42-icone1"
                    loading="lazy"
                    alt=""
                    src="/Images/image45.png"
                  />
                </div>
                <img
                  className="m1image-47-icon2e1"
                  alt=""
                  src="/Images/image47.png"
                />
                <img
                  className="m1image-48-icon1e1"
                  alt=""
                  src="/Images/image49.png"
                />
                <img
                  className="m1image-49-icon1e1"
                  alt=""
                  src="/Images/image48.png"
                />
              </div>
              <div className="m1science-enrollmente1">
                <div className="m1continous-enrollement2e1">
                  Continous enrollement
                </div>
                <div className="m1pagination-containere1">
                  <div className="m1more2e1"> +27 more</div>
                </div>
              </div>
            </div>
            <div className="m1englishe1">
            
              <div className="m1english-labele1">
                <div className="m1pagination-liste1">
                  <b className="m1english1e1">{`English `}</b>
                  {/* <img className="m1english-childe1" alt="" src="/Images/image37.png" /> */}
                  <img className="m1image-38-icone1" alt="" src="/Images/image38.png" />
                  <div className="m1english-enrollmente1">
                    <div className="m1continous-enrollement3e1">
                      Continous enrollement
                    </div>
                  </div>
                </div>
              </div>
              <div className="m1english-imagese1">
                <img
                  className="m1image-45-icon1e1"
                  alt=""
                  src="/Images/image42.png"
                />
                <div className="m1english-images-gride1">
                  <div className="m1english-images-rowe1">
                    <img
                      className="m1image-47-icon3e1"
                      alt=""
                      src="/Images/image47.png"
                    />
                    <img
                      className="m1image-48-icon2e1"
                      alt=""
                      src="/Images/image49.png"
                    />
                    <img
                      className="m1image-49-icon2e1"
                      alt=""
                      src="/Images/image48.png"
                    />
                  </div>
                </div>
              </div>
              <div className="m1more3e1"> +27 more</div>
            </div>
          </div>
        </div>
       
        <div className="m1technologye1">
          <div className="m1technology-labele1">
            <div className="m1technology-title-wrappere1">
              <div className="m1technology-titlee1">
                <b className="m1technology1e1">Technology</b>
                <div className="m1technology-imagese1">
                  <div className="m1technology-image-placeholdere1">
                    <div className="m1wrapper-rectangle-437e1">
                      {/* <img
                        className="m1wrapper-rectangle-437-childe1"
                        alt=""
                        src="/Images/image38.png"
                      /> */}
                    </div>
                    <img
                      className="m1image-37-icone1"
                      alt=""
                      src="/Images/image37.png"
                    />
                  </div>
                  <img
                    className="m1image-44-icon1e1"
                    alt=""
                    src="/Images/image44.png"
                  />
                  <img
                    className="m1image-47-icon4e1"
                    alt=""
                    src="/Images/image47.png"
                  />
                  <img
                    className="m1image-48-icon3e1"
                    alt=""
                    src="/Images/image49.png"
                  />
                  <img
                    className="m1image-49-icon3e1"
                    alt=""
                    src="/Images/image48.png"
                  />
                </div>
                <div className="m1technology-enrollmente1">
                  <div className="m1continous-enrollement4e1">
                    Continous enrollement
                  </div>
                  <div className="m1more-linke1">
                    <div className="m1more4e1"> +27 more</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m1social-science-title-parente1">
              <div className="m1social-science-titlee1">
                <b className="m1social-sciencee1">{`Social science `}</b>
              </div>
              <div className="m1social-science-imagese1">
                <div className="m1rings1e1" />
                <img className="m1image-39-icone1" alt="" src="/Images/image39.png" />
                <img
                  className="m1image-46-icon1e1"
                  alt=""
                  src="/Images/image46.png"
                />
                <img
                  className="m1image-47-icon5e1"
                  alt=""
                  src="/Images/image47.png"
                />
                <img
                  className="m1image-48-icon4e1"
                  alt=""
                  src="/Images/image49.png"
                />
                <img
                  className="m1image-49-icon4e1"
                  alt=""
                  src="/Images/image48.png"
                />
              </div>
              <div className="m1social-science-footere1">
                <div className="m1social-science-enrollmente1">
                  <div className="m1continous-enrollement5e1">
                    Continous enrollement
                  </div>
                </div>
                <div className="m1more5e1"> +27 more</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home1;