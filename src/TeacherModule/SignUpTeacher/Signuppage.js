import React from "react";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {



  return (
    <PageContainer>
      <FormSection>
        <SignUpForm />
      </FormSection>
      <ImageSection>
        <BackgroundImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8a0ff8206ce388d032aaeee8115027d10831247158b3177b30c6fd14a229a52?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Background" />
      </ImageSection>
    </PageContainer>
  );
};

const PageContainer = styled.main`
  display: flex;
  border-radius: 20px;
  overflow: hidden;
 
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const FormSection = styled.section`
  flex: 0 0 36%;
  padding: 20px;

  @media (max-width: 991px) {
    flex: 1;
    order: 2;
  }
`;

const ImageSection = styled.section`
  flex: 0 0 64%;

  @media (max-width: 991px) {
    flex: 1;
    order: 1;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default SignUpPage;