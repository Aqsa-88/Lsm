import React from 'react';
import styled from 'styled-components';

const PublishedCoursesContainer = styled.section`
  border-radius: 10px;
  background-color: #f9f5f5;
  padding: 10px;
  margin-top: 9px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

const Title = styled.h2`
  font: 700 20px Istok Web, sans-serif;
  color: #000;
`;

const SeeAllLink = styled.a`
  font: 700 14px Istok Web, sans-serif;
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;

const CourseList = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const CourseCard = styled.div`
  border-radius: 20px;
  background-color: #fffafa;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  width: 50%;
  @media (max-width: 991px) {
    width: 10%;
  }
`;

const CourseImage = styled.div`
  position: relative;
  border-radius: 20px 20px 0 0;
  aspect-ratio: 1.587;
  overflow: hidden;
`;

const CourseBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CourseTitle = styled.h3`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #3d3c3c;
  font: 700 16px Istok Web, sans-serif;
`;

const CourseInfo = styled.div`
  padding: 4px;
`;

const EnrollmentStatus = styled.p`
  color: #5b5a5a;
  font: 400 14px Istok Web, sans-serif;
  margin-bottom: 10px;
`;

const StudentAvatars = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: -10px;
`;

const MoreStudents = styled.span`
  color: #5e5959;
  font: 400 14px Istok Web, sans-serif;
  margin-left: 10px;
`;

const courses = [
  {
    title: 'Maths Department',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e6824e87a7a4e262e59b6ed9a4240d3dff6288aacdf00dfe484efadafbfcb13c?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2',
    enrollmentStatus: 'Continuous enrollment',
    avatars: ['https://cdn.builder.io/api/v1/image/assets/TEMP/8a1356b8f99a708fa5b97b96f19ba0a84f6704253b32f6845aed3a23b179fb72?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e176c14f8f6aba20d95cf4912a5b4f923b01b0a76f08f6a67cfe8b504fb8e3?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', 'https://cdn.builder.io/api/v1/image/assets/TEMP/b61fbb16578f454293a6b0b2d80bc5fc6fd486dcbb77bc55913c216e375e5ad8?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2']
  },
  {
    title: 'Chemistry Department',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/341288610627f32d1a0c727f3ce9b6e15b2e22f7e21b9d31ea04dca8bf33304b?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2',
    enrollmentStatus: 'Continuous enrollment',
    avatars: ['https://cdn.builder.io/api/v1/image/assets/TEMP/8a1356b8f99a708fa5b97b96f19ba0a84f6704253b32f6845aed3a23b179fb72?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e176c14f8f6aba20d95cf4912a5b4f923b01b0a76f08f6a67cfe8b504fb8e3?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', 'https://cdn.builder.io/api/v1/image/assets/TEMP/b61fbb16578f454293a6b0b2d80bc5fc6fd486dcbb77bc55913c216e375e5ad8?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2']
  }
];
function PublishedCourses() {
  return (
    <div className='cources'>
    <PublishedCoursesContainer>
      <Header>
        <Title>Published courses</Title>
        <SeeAllLink>See all</SeeAllLink>
      </Header>
      <CourseList>
        {courses.map((course, index) => (
          <CourseCard key={index}>
            <CourseImage>
              <CourseBg src={course.image} alt={course.title} loading="lazy" />
              <CourseTitle>{}</CourseTitle>
            </CourseImage>
            <CourseInfo>
              <div className='enrollment'>
              <EnrollmentStatus>{course.enrollmentStatus}</EnrollmentStatus></div>
              <div className='avatar'>
              <StudentAvatars>
                {course.avatars.map((avatar, idx) => (
                  <Avatar key={idx} src={avatar} alt="Student avatar" loading="lazy" />
                ))}
                <MoreStudents>+27 more</MoreStudents>
              </StudentAvatars>
              </div>
            </CourseInfo>
          </CourseCard>
        ))}
      </CourseList>
    </PublishedCoursesContainer>
    </div>
  );
}

export default PublishedCourses;