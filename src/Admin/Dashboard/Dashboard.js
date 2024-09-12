import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import TopCourses from './TopCourses';
import GlobalStyles from './GlobalStyles';

function Dashboard() {
  return (
    <DashboardContainer>
       <GlobalStyles />
      <DashboardWrapper>
        <DashboardContent>
          <Sidebar />
          <MainContent />
        </DashboardContent>
        <TopCourses />
      </DashboardWrapper>
      <Footer />
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DashboardWrapper = styled.div`
  margin-left: 10px;
  width: 100%;
  max-width: 1366px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const DashboardContent = styled.main`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const Footer = styled.footer`
  background-color: #007997;
  min-height: 32px;
  margin-top: 264px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default Dashboard;