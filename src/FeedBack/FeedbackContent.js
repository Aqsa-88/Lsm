import React from 'react';
import styled from 'styled-components';
import FeedbackFormComponent from './FeedbackFormComponent';
/**padding: 3px 80px 118px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px 100px;
  } */
const ContentWrapper = styled.section`

 
  
`;

const FormContainer = styled.div`
  border-radius: 50px;
  align-self: center;
  display: flex;
  width: 500px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`;
/** margin: 91px 0 0 21px;
  padding: 35px 80px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  } */

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
   <div className='content'>
    <ContentWrapper>
      <FormContainer>
      <div className='feedback1'> <FormTitle>Feedback Form</FormTitle> </div>
       <div className='main'> <FeedbackFormComponent /></div>
      </FormContainer>
    </ContentWrapper>
    </div>
  );
}

export default FeedbackContent;