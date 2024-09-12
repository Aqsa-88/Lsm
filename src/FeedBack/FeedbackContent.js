import React from 'react';
import styled from 'styled-components';
import FeedbackFormComponent from './FeedbackFormComponent';

const ContentWrapper = styled.section`
  border-radius: 20px;
  background-color: #fffafa;
  box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 15px auto 0;
  padding: 3px 80px 118px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px 100px;
  }
`;

const FormContainer = styled.div`
  border-radius: 50px;
  align-self: center;
  display: flex;
  width: 800px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 91px 0 0 21px;
  padding: 35px 80px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const FormTitle = styled.h2`
  color: #555;
  align-self: start;
  margin-left: 30px;
  font: 700 32px Montserrat, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

function FeedbackContent() {
  return (
    <ContentWrapper>
      <FormContainer>
        <FormTitle>Feedback Form</FormTitle>
        <FeedbackFormComponent />
      </FormContainer>
    </ContentWrapper>
  );
}

export default FeedbackContent;