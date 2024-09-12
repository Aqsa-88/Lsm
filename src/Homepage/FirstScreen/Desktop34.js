import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./Desktop34.css";

const Desktop34 = () => {
  const navigate = useNavigate();

  const onSignUpBackgroundClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);


  return (
    <div className="desktop-0">
      <section className="desktop-0-inner">
        <header className="frame-parent281">
          <div className="group-wrapper11">
            <img className="group-icon121" alt="" src="/Images/Group.png" />
             <div className="frame-parent291">
                  <div className="top-catagories-wrapper1">
                    <b className="top-catagories1">Top Catagories</b>
                    <b href ="/Home" className="see-all41">See All</b>
                  </div>
       
                <div className="frame-parent301">
                  <div className="vector-parent51">
                   <img className="Frame-child241" alt="" src="/Images/imgh.png" />
                   <b className="Math1">Math</b>
                 </div>
                  <div className="vector-parent51">
                    <img className="frame-child231" alt="" src="/Images/img.png" />
                    <b className="chemistry1">Chemistry</b>
                  </div>
          
                  </div>
               </div>
             </div>
          <nav className="frame-nav1">
            <nav className="home-parent1">
              <Link to="/" className="home1">Home</Link>
              <div className="catagory-frame">
                <Link to="/Home" className="catagory41">Catagory</Link>
              </div>
              <Link className="sign-in01" to="/signin">
              <b className="sign-in011">Sign in</b>
              </Link>
              <div className="vector-parent21">
            <div
              className="sign-up-background11"
              onClick={onSignUpBackgroundClick}
            />
             <Link className="sign-up1" to="/signup">
            <button className="sign-up01">Sign Up</button>
            </Link>
          </div> 
            </nav>
          </nav>         
         
         
        </header>
      </section>
      <section className="vector-parent1">
        <img className="frame-child1" alt="" src="/Images/Ep.png" />
        <div className="illustration-content1">
          <div className="group33">
            <img className="group-icon133" alt="" src="/Images/Frame.png" />
          </div>
        </div>
      </section> 
      
    </div>
  );
};

export default Desktop34;
