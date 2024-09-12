import React from 'react';
import styled from 'styled-components';

function CourseCard({ image, likes, title, description }) {
  return (
    <CardContainer>
      <CardImageWrapper>
        <CardImage src={image} alt={title} />
        <LikesOverlay>
          <LikeIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/c38400965cd7d9c363c50c67690ef548a498417bb1a1976d36b617b8a454e345?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Like" />
          <LikesCount>{likes} <span>like</span></LikesCount>
        </LikesOverlay>
      </CardImageWrapper>
      <CardContent>
        <CourseTitle>{title}</CourseTitle>
        <CourseDescription>{description}</CourseDescription>
      </CardContent>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 472px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const CardImage = styled.img`
  aspect-ratio: 2;
  object-fit: cover;
  width: 100%;
  border-radius: 16px;
`;

const LikesOverlay = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  left: 24px;
  bottom: 16px;
  color: #f5f5f5;
  font-size: 24px;
  letter-spacing: 2.4px;
`;

const LikeIcon = styled.img`
  aspect-ratio: 1.13;
  object-fit: contain;
  width: 34px;
`;

const LikesCount = styled.div`
  span {
    font-size: 16px;
  }
`;

const CardContent = styled.div`
  display: flex;
  margin-top: 16px;
  width: 100%;
  flex-direction: column;
  color: #282c34;
  padding: 0 8px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const CourseTitle = styled.h3`
  font-size: 20px;
  letter-spacing: 2px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const CourseDescription = styled.p`
  font-size: 14px;
  letter-spacing: 1.4px;
  margin-top: 8px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default CourseCard;