import React from 'react';
import styled from 'styled-components';
import Schedule from './Schedule';
import UpcomingEvents from './UpcomingEvents';

const CalendarContainer = styled.aside`
  border-radius: 20px;
  background-color: #fffafa;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 34px 25px;
  @media (max-width: 991px) {
    padding: 30px 20px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 73px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 50%;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 700;
`;

const UserRole = styled.span`
  color: #888787;
  font-size: 12px;
`;

const SettingsIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const MonthSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
`;

const Month = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 700;
`;

const ArrowContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Arrow = styled.img`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

const WeekDays = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const WeekDay = styled.div`
  color: #000;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  width: 12.28%;
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 17px;
  
`;

const DateCell = styled.div`
  border-radius: 10px;
  background-color: #d9d9d9;
  color: #000;
  width : 15px;
  height : 30px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  padding: 5px;
  cursor: pointer;
`;

const weekDays = ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'];
const dates = [3, 4, 5, 6, 7, 8];

function Calendar() {
  return (
    <div className='calender'>
    <CalendarContainer>
      <UserInfo>
        <UserProfile>
          <Avatar src="https://cdn.builder.io/api/v1/image/assets/TEMP/781b1cfe4549b6e4d11290f7afbe7d146df8490f6690844fd7333dfa901f74b5?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="User Avatar" loading="lazy" />
          <UserDetails>
            <UserName>Teacher Name</UserName>
            <UserRole>Teacher</UserRole>
          </UserDetails>
        </UserProfile>
        <SettingsIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba2513a1ae94aace3dd514e557f20b605c128bccdb8e38b5aab95c75927744f7?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Settings" loading="lazy" />
      </UserInfo>
      <MonthSelector>
        <Month>November 2023</Month>
        <ArrowContainer>
          <Arrow src="https://cdn.builder.io/api/v1/image/assets/TEMP/14385582b47be222266e2a3e6713ca746f4faf2cf64e60027291e370a6c7b205?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Previous" loading="lazy" />
          <Arrow src="https://cdn.builder.io/api/v1/image/assets/TEMP/a87133138c562291fa8070002de829d15f823aac909127db6a3ddc042b1cbc4e?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Next" loading="lazy" />
        </ArrowContainer>
      </MonthSelector>
      <div className='day'>
      <WeekDays>
        {weekDays.map(day => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
      </WeekDays>
      <DateGrid>
        {dates.map(date => (
          <DateCell key={date}>{date}</DateCell>
        ))}
      </DateGrid></div>
      <Schedule/>
      <UpcomingEvents/>
    </CalendarContainer>
    </div>
  );
}

export default Calendar;