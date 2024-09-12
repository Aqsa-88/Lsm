import React from "react";
import styled from "styled-components";

const Button = ({ text }) => {
  return( 
    <>
  <StyledButton>{text}</StyledButton> 
  </>
  )
};

const StyledButton = styled.button`
  border-radius: 10px;
  background-color: #2b59ce;
  color: #fff;
  padding: 13px 65px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e3f9a;
  }

  @media (max-width: 991px) {
    padding: 13px 20px;
    width: 100%;
  }
`;

export default Button;