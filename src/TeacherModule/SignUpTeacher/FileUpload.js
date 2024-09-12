import React from "react";
import styled from "styled-components";

const FileUpload = ({ label, buttonText }) => {
  
  return (
    <UploadWrapper>
      <UploadLabel htmlFor={label.toLowerCase().replace(" ", "-")}>
        {label}
      </UploadLabel>
      <UploadButton>
        <UploadInput
          type="file"
          id={label.toLowerCase().replace(" ", "-")}
          name={label.toLowerCase().replace(" ", "-")}
        />
        {buttonText}
      </UploadButton>
    </UploadWrapper>
  );
};

const UploadWrapper = styled.div`
  margin-bottom: 20px;
`;

const UploadLabel = styled.label`
  display: block;
  color: rgba(0, 0, 0, 0.36);
  margin-bottom: 14px;
`;

const UploadButton = styled.div`
  border-radius: 10px;
  background-color: #fffafa;
  border: 1px solid rgba(0, 0, 0, 0.18);
  color: #2525ad;
  padding: 8px;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

const UploadInput = styled.input`
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  // opacity: 0;
  // cursor: pointer;
`;

export default FileUpload;