import React from "react";
import styled from "styled-components";

const FormInput = ({ label, type }) => {
  return (
    <InputWrapper>
      <Label htmlFor={label.toLowerCase()}>{label}</Label>
      {type === "select" ? (
        <Select id={label.toLowerCase()} name={label.toLowerCase()}>
          <option value="">Select {label}</option>
          <option value="">Male</option>
          <option value="">Female</option>
        </Select>
      ) : (
        <Input
          type={type}
          id={label.toLowerCase()}
          name={label.toLowerCase()}
          placeholder={`Type ${label.toLowerCase()} here`}
        />
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  // align-items: start;
  // justify-items : start;
`;

const Input = styled.input`
  width: 300px;
  padding: 8px 10px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  background-color: #fffafa;
  font-size: 14px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.36);
  }
`;

const Select = styled.select`
   width: 320px;
  padding: 8px 10px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  background-color: #fffafa;
  font-size: 14px;
  appearance: none;
`;

export default FormInput;