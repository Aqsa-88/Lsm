import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #000;
  font-weight: 700;
  font-size: 12px;
  font-family: Montserrat, sans-serif;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  border-radius: 9px;
  border: 1px solid #0096ff;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.18);
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Icon = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 5px;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  &:focus {
    outline: none;
  }
`;

function InputField({ label, type, placeholder, icon }) {
  return (
    <InputWrapper>
      <Label htmlFor={label.toLowerCase().replace(' ', '-')}>{label}</Label>
      <InputContainer>
        <Icon src={icon} alt="" />
        <Input
          type={type}
          id={label.toLowerCase().replace(' ', '-')}
          placeholder={placeholder}
          aria-label={label}
        />
      </InputContainer>
    </InputWrapper>
  );
}

export default InputField;