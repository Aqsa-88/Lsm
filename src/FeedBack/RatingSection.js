import React from 'react';
import styled from 'styled-components';

const RatingWrapper = styled.div`
  align-self: start;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  justify-content: start;
`;

const RatingLabel = styled.label`
  color: #000;
  font: 700 12px Montserrat, sans-serif;
  margin-bottom: 5px;
`;

const StarContainer = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: start;
  gap: 10px;
  justify-content: start;
  padding: 10px 10px 10px 0;
`;

const StarIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 30px;
  cursor: pointer;
`;

function RatingSection() {
  return (
    <RatingWrapper>
      <RatingLabel htmlFor="rating">Share your experience for LMS</RatingLabel>
      <StarContainer>
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            src={`http://b.io/ext_${10 + star}-`}
            alt={`${star} star`}
            aria-label={`Rate ${star} stars`}
            role="button"
            tabIndex={0}
          />
        ))}
      </StarContainer>
    </RatingWrapper>
  );
}

export default RatingSection;