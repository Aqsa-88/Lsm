import React from 'react';
import styled from 'styled-components';

const ScheduleContainer = styled.section`
  margin-top: 38px;
`;

const ScheduleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;
`;

const Title = styled.h2`
  color: #000;
  font-size: 16px;
  font-weight: 700;
`;

const SeeAllLink = styled.a`
  color: #2B59CE;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`;

const ScheduleContent = styled.div`
  display: flex;
  gap: 20px;
`;

const TimeSlots = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const TimeSlot = styled.span`
  color: #7F7F7F;
  font-size: 12px;
  font-weight: 400;
`;

const Courses = styled.div`
  flex-grow: 1;
`;

const CourseItem = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  margin-bottom: 35px;
`;

const CourseNumber = styled.span`
  color: #000;
  font-size: 20px;
  font-weight: 700;
`;

const CourseLine = styled.div`
  width: 1px;
  height: 39px;
  border: 1px solid #8F8D8D;
`;

const CourseDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CourseName = styled.span`
  color: #000;
  font-size: 12px;
  font-weight: 700;
   align-items: start;

    padding-right:20px;
`;

const CourseProgress = styled.span`
  color: #7F7F7F;
  font-size: 12px;
  font-weight: 400;
  margin-top: 6px;
`;

const scheduleData = [
  { course:'Chemistry', progress: '6 of 20 Chapters', time: '15.00 - 16.00' },
  { course:'Computer', progress: '11 of 20 Chapters', time: '16.00 - 17.00' },
  { course:'Mathematics', progress: '5 of 20 Chapters',time: '17.00 - 18.00', }
];

function Schedule() {
  return (
    <ScheduleContainer>
      <ScheduleHeader>
        <Title>Schedule</Title>
        <SeeAllLink>See all</SeeAllLink>
      </ScheduleHeader>
      <ScheduleContent>
        
        <Courses>
          {scheduleData.map((item, index) => (
            <CourseItem key={index}>
              <CourseNumber>{index + 1}</CourseNumber>
              <CourseLine />
              <CourseDetails>
                <CourseName>{item.course}</CourseName>
                <CourseProgress>{item.progress}</CourseProgress>
              </CourseDetails>
            </CourseItem>
          ))}
        </Courses>
        <TimeSlots>
          {scheduleData.map((item, index) => (
            <TimeSlot key={index}>{item.time}</TimeSlot>
          ))}
        </TimeSlots>
      </ScheduleContent>
    </ScheduleContainer>
  );
}

export default Schedule;