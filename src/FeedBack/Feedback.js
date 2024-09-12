import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';
import FeedbackContent from './FeedbackContent';

const FeedbackFormWrapper = styled.div`
  border-radius: 20px;
  padding-bottom: 18px;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 76%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

function FeedbackForm() {
  return (
    <FeedbackFormWrapper>
      <ContentWrapper>
        <Sidebar />
        <MainContent>
          <Header />
          <FeedbackContent />
        </MainContent>
      </ContentWrapper>
    </FeedbackFormWrapper>
  );
}

export default FeedbackForm;