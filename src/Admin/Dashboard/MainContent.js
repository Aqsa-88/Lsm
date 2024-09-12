import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import VisitingCourses from './VisitingCourses';
import EventsList from './EventsList';

function MainContent() {
  return (
    <MainContentContainer>
      <Header />
      <ContentWrapper>
        <VisitingCourses />
        <EventsList />
      </ContentWrapper>
    </MainContentContainer>
  );
}

const MainContentContainer = styled.section`
  display: flex;
  width: 76%;
  flex-direction: column;
  @media (max-width: 991px) {
    width: 100%;
    max-width: 100%;
    margin-top: 24px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 32px;
  justify-content: start;
  flex-wrap: wrap;
  margin: 8px 32px 0 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
  }
`;

export default MainContent;