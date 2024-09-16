import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';
import FeedbackContent from './FeedbackContent';
import './Feedback.css'
/** padding-bottom: 18px; */
const FeedbackFormWrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;
  
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 9px;
 
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 55%;
  height : 600px;
  margin-left: 200px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

function FeedbackForm() {
  return (
    <div className='feedback'>
    <FeedbackFormWrapper>
      <ContentWrapper>
        <Sidebar />
        <MainContent>
          <Header />
          <FeedbackContent />
        </MainContent>
      </ContentWrapper>
    </FeedbackFormWrapper>
    </div>
  );
}

export default FeedbackForm;