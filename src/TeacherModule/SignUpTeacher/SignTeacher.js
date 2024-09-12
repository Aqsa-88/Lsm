import React from "react";
import styled from "styled-components";
import FormInput from "./FormInput";
import FileUpload from "./FileUpload";
import Button from "./Button.js";
import './SignupTeacher.css'
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const formInputs = [
    { label: "Name", type: "text" },
    { label: "Email", type: "email" },
    { label: "Phone No", type: "tel" },
    { label: "Gender", type: "select" },
  ];

  const fileUploads = [
    { label: "", buttonText: "Upload CV" },
    { label: "", buttonText: " UploadDocument" },
  ];

  return (
    <div className="main">
    <StyledForm>
      <FormLogo src="https://cdn.builder.io/api/v1/image/assets/TEMP/03c92f758d82633438adb9faf06c086c0fe2378c19390c045a3b4620ffed0530?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Form Logo" />
      <FormContainer>
        {formInputs.map((input, index) => (
          <FormInput key={index} {...input} />
        ))}
        {fileUploads.map((upload, index) => (
          <FileUpload key={index} {...upload} />
        ))}
      <Link to="/8">  <Button text="SignUp" /> </Link> 
      </FormContainer>
    </StyledForm>
    <section className="b1vector-parent2">
        <img className="b1frame-child2" alt="" src="/Images/Ellipse.png" />
        <div className="b1illustration-content2">
          <div className="b1group32">
            <img className="b1group-icon132" alt="" src="/Images/Frame.png" />
          </div>
        </div>
      </section>
    </div>
  );
}; 




const StyledForm = styled.form`
  
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 28px 0;
  color: black;
  font: 500 9px Istok Web, sans-serif;
`;

const FormLogo = styled.img`
  aspect-ratio: 1.36;
  object-fit: contain;
  width: 190px;
  margin-bottom: 30px;
`;

const FormContainer = styled.div`
  width: 320px;
  padding: 2px 10px;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  max-width: 400px;

  @media (max-width: 991px) {
    padding: 20px;
  }
`;

export default SignUpForm;