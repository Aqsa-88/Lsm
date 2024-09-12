import React from 'react';
import styled from 'styled-components';
import CourseCard from './CourseCard';

const courses = [
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3dc03854335eb84a044a8f86811b5d5a5ba1bd225bc36af3f8438352e5f921?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2',
    likes: 982,
    title: 'title of course',
    description: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d4a19839fc3febe257f719ef09c4771f202ec636186a5866a60dd9f57ffb3561?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2',
    likes: 982,
    title: 'title of course',
    description: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

function TopCourses() {
  return (
    <TopCoursesContainer>
      <TopCoursesHeader>
        <TopCoursesTitle>your top courses</TopCoursesTitle>
        <MostViewed>most viewed</MostViewed>
      </TopCoursesHeader>
      <CoursesList>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </CoursesList>
    </TopCoursesContainer>
  );
}

const TopCoursesContainer = styled.section`
  align-self: end;
  display: flex;
  width: 100%;
  max-width: 1022px;
  flex-direction: column;
  margin: 24px 64px 0 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
  }
`;

const TopCoursesHeader = styled.div`
  display: flex;
  align-items: start;
  gap: 32px;
  color: #282c34;
  letter-spacing: 2.4px;
  justify-content: start;
  font: 24px Quicksand, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TopCoursesTitle = styled.h2`
  border-color: #282c34;
  border-bottom-width: 1px;
  min-height: 48px;
  font-weight: 700;
`;

const MostViewed = styled.span`
  min-height: 48px;
  font-weight: 400;
  padding: 9px 10px;
`;

const CoursesList = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

export default TopCourses;