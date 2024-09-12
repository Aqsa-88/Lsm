import React from 'react';
import styled from 'styled-components';

function VisitingCourses() {
  return (
    <VisitingCoursesContainer>
      <ChartImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/bef10febfc08c8214363d2f1a161b3b83cb8d43dbc2111d766630bf0c81c7032?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Visiting courses chart" />
      <ChartContent>
        <ChartHeader>
          <ChartTitle>Visiting courses</ChartTitle>
          <DateSelector>
            <ArrowLeft src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae637d93f5a2f0c314e0b8f24bbab722ac5c2558a978dd73194d47bb43b340c3?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Previous" />
            <CurrentMonth>may</CurrentMonth>
            <ArrowRight src="https://cdn.builder.io/api/v1/image/assets/TEMP/f19fb725f1e0cf5a11fce4ead7b9ae6e1be0bcb71f953fc445f6cebc1addb65f?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Next" />
          </DateSelector>
        </ChartHeader>
        <ChartBody>
          {/* Chart content here */}
        </ChartBody>
      </ChartContent>
      <RegisteredUsers>
        <UserIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/33683069e4420f565d2b3c6d59576cd42e56b463fc54548ca6d3d8252283ea29?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="User icon" />
        <UserCount>1023</UserCount>
        <UserText>users have registered</UserText>
      </RegisteredUsers>
    </VisitingCoursesContainer>
  );
}

export default VisitingCourses;

const VisitingCoursesContainer = styled.div`
  box-shadow: 0px 4px 35px rgba(40, 44, 52, 0.25);
  display: flex;
  min-width: 240px;
  flex-direction: column;
  width: 485px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ChartImage = styled.img`
  aspect-ratio: 1.42;
  object-fit: contain;
  width: 473px;
  box-shadow: 0px 4px 35px rgba(40, 44, 52, 0.25);
  min-width: 240px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ChartContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  min-height: 233px;
  flex-direction: column;
  justify-content: start;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ChartHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 40px 100px;
  font-family: Quicksand, sans-serif;
  color: #282c34;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ChartTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 2.4px;
`;

const DateSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: 1.6px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ArrowLeft = styled.img`
  aspect-ratio: 0.63;
  object-fit: contain;
  width: 10px;
`;

const CurrentMonth = styled.span`
  align-self: stretch;
`;

const ArrowRight = styled.img`
  aspect-ratio: 0.63;
  object-fit: contain;
  width: 10px;
`;

const ChartBody = styled.div`
  /* Chart body styles here */
`;

const RegisteredUsers = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-family: Quicksand, sans-serif;
  color: #f5f5f5;
  font-weight: 700;
  padding: 22px 18px;
  background: linear-gradient(109deg, #007997 41.15%, #63638e 71.35%, #a75489 87.5%, #ff4081 100%);
  border-radius: 0 0 16px 16px;
`;

const UserIcon = styled.img`
  aspect-ratio: 1.08;
  object-fit: contain;
  width: 40px;
`;

const UserCount = styled.span`
  font-size: 32px;
  UserCount = styled.span;
  font-size: 32px;
  letter-spacing: 3.2px;
`;

const UserText = styled.span`
  font-size: 20px;
  letter-spacing: 2px;
`;

