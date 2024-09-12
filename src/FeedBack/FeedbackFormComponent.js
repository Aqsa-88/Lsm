import React from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import RatingSection from './RatingSection';

const FormWrapper = styled.form`
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  margin-top: 21px;
  width: 100%;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  padding: 30px 25px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Section = styled.div`
  display: flex;
  max-width: 100%;
  width: 350px;
  flex-direction: column;
  justify-content: start;
`;

const CommentsSection = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  flex-direction: column;
  color: #aaa;
  justify-content: start;
  font: 500 12px Montserrat, sans-serif;
`;

const CommentsInput = styled.textarea`
  border-radius: 9px;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.18);
  width: 100%;
  padding: 8px 10px;
  min-height: 100px;
  resize: vertical;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 60px;
  align-items: center;
  gap: 30px;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  @media (max-width: 991px) {
    margin-top: 40px;
    flex-wrap: wrap;
  }
`;

const CancelButton = styled.button`
  color: #0096ff;
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  border-radius: 8px;
  background: #0096ff;
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.4);
  color: #fff;
  border: none;
  padding: 14px 11px;
  min-width: 150px;
  cursor: pointer;
`;

function FeedbackFormComponent() {
  return (
    <FormWrapper>
      <Section>
        <InputField label="Name" type="text" placeholder="Enter username" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7adf0cdb2cf21deb97cee9a1888ab38139b0da9e33c434d81b6996a1caf0869d?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" />
        <InputField label="Email Address" type="email" placeholder="Enter your email" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7c686cdd62bf2c5156653b81e0cf0a068666e7b2f5dcafc9778af9fc9084e812?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" />
        <RatingSection />
        <CommentsSection>
          <label htmlFor="comments">Comments</label>
          <CommentsInput id="comments" placeholder="Add your comments..." />
        </CommentsSection>
      </Section>
      <ButtonGroup>
        <CancelButton type="button">Cancel</CancelButton>
        <SubmitButton type="submit">SUBMIT</SubmitButton>
      </ButtonGroup>
    </FormWrapper>
  );
}

export default FeedbackFormComponent;