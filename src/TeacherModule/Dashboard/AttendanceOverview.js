import React from 'react';
import styled from 'styled-components';
// import './dashboard.css'

const AttendanceContainer = styled.section`
  border-radius: 10px;
  background-color: #f9f5f5;
  padding: 6px;
  margin-top: 1px;
   height : 110px;
  font-family: Istok Web, sans-serif;
  @media (max-width: 991px) {
    padding: 6px 0px;
  }
`;

const Title = styled.h2`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 2px;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2px;
`;

const StatCard = styled.div`
  border-radius: 10px;
  background-color: #fffafa;
  padding: 14px 25px;
  border: 1px solid #d2cccc;
  text-align: center;
`;

const StatValue = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const StatLabel = styled.div`
  color: #5b5a5a;
  font-size: 14px;
  font-weight: 400;
`;

// const GroupLabel = styled.div`
//   color: #5b5a5a;
//   font-size: 14px;
//   font-weight: 400;
//   margin-top: 12px;
// `;

const attendanceData = [
  { label: 'Total no. of students purchase', value: 31 },
  { label: 'Saleout', value: 20 },
  { label: 'Recently View', value: 11 }
];

function AttendanceOverview() {
  return (
    <div className='attend'>
    <AttendanceContainer>
      <div className='title'>
      <Title>Sale Overview</Title></div>
      <StatsContainer>
        {attendanceData.map((stat, index) => (
          <StatCard key={index}>
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsContainer>
      {/* <GroupLabel>Group A</GroupLabel> */}
    </AttendanceContainer>
    </div>
  );
}

export default AttendanceOverview;