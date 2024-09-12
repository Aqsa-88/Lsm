import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Announcements from './Announcements';
import PublishedCourses from './PublishedCourses';
import AttendanceOverview from './AttendanceOverview';
import Calendar from './Calendar';
import  './dashboard.css';
 /* display: flex; */
const MainContentContainer = styled.main`
 
  flex-direction: column;
  width: 76%;
  left:40%
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
    margin-top: 30px;
  }
`;

const ContentLayout = styled.div`
  display: flex;
  gap: 2%;
  
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.section`
  width: 60%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const RightColumn = styled.aside`
  width: 32%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

function MainContent() {
  return (
    <div className='move'>
    <MainContentContainer>
      <div className='Sidebar'>
         <div className="t1rectangle-parent5">
        <div className="t1frame-child6" />
        <div className="t1navigation-panel">
          <div className="t1group-container">
            <img
              className="t1group-icon2"
              loading="lazy"
              alt=""
              src="Images/Group.png"
            />
          </div>
          <div className="t1user-actions-parent">
            <div className="t1user-actions">
              <div className="t1logout-action">
                <div className="t1logout-icon-container">
                  <img
                    className="t1logout-icon3"
                    loading="lazy"
                    alt=""
                    src="Images/dash.png"
                  />
                </div>
                <img
                  className="t1logout-chevron-icon"
                  alt=""
                  src="Images/Vector11.png"
                />
              </div>
              <img
                className="t1query-inner-join2"
                loading="lazy"
                alt=""
                src="Images/QueryInnerJoin.png"
              />
            
            </div>
            <div className="t1dashboard-container-wrapper">
              <div className="t1dashboard-container">
                <b className="t1dashboard2">Dashboard</b>
                <div className="t1catagory-parent">
                  <b className="t1catagory">Catagory</b>
                  <div className="t1courses-title-container">
                    <b className="t1courses2">Courses</b>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="t1content-panel">
          <div className="t1content-container">
            <div className="t1content-header">
              <div className="t1help-frame">
                <img
                  className="t1help-icon2"
                  loading="lazy"
                  alt=""
                  src="Images/help.png"
                />
              </div>
              <div className="t1avatar-wrapper">
                <img className="t1avatar-icon" alt="" src="Images/12vv.png" />
              </div>
              <img
                className="t1logout-icon4"
                loading="lazy"
                alt=""
                src="Images/Logout.png"
              />
            </div>
            <div className="t1help-dropdown">
              <div className="t1help-dropdown-content">
                <b className="t1help2">Help</b>
                <div className="t1settings-logout-action-wrapper">
                  <div className="t1settings-logout-action">
                    <b className="t1setting2">Setting</b>
                    <b className="t1log-out2">Log out</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='Main'>
      <ContentLayout>
        <LeftColumn>
          <Header />
          <Announcements />
          <PublishedCourses />
          <AttendanceOverview />
        </LeftColumn>
        <RightColumn>
          <Calendar />
        </RightColumn>
      </ContentLayout>
      </div>
    </MainContentContainer>
    </div>
  );
}

export default MainContent;