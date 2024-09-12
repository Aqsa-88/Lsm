import React from 'react';
import styled from 'styled-components';

function EventItem({ type, time, userId, userName, icon, amount, content }) {
  return (
    <EventItemContainer>
      <EventTypeAndTime>
        <EventType>
          <EventIcon src={icon} alt={type} />
          <span>{type}</span>
        </EventType>
        <EventTime>{time}</EventTime>
      </EventTypeAndTime>
      <EventUserInfo>
        <UserAvatar src={`http://b.io/ext_${type === 'paid' ? '20' : type === 'message' ? '25' : '23'}-`} alt="User avatar" />
        <UserId>{userId}</UserId>
        <UserName>{userName}</UserName>
      </EventUserInfo>
      {amount && <EventAmount>{amount}</EventAmount>}
      {content && <EventContent dangerouslySetInnerHTML={{ __html: content }} />}
    </EventItemContainer>
  );
}

const EventItemContainer = styled.div`
  display: flex;
  width: 690px;
  max-width: 100%;
  align-items: center;
  gap: 40px 74px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

const EventTypeAndTime = styled.div`
  display: flex;
  min-width: 240px;
  align-items: center;
  gap: 40px;
  justify-content: space-between;
  width: 253px;
  margin: auto 0;
`;

const EventType = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #007997;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const EventIcon = styled.img`
  aspect-ratio: 1.2;
  object-fit: contain;
  width: 24px;
`;

const EventTime = styled.span`
  color: #282c34;
`;

const EventUserInfo = styled.div`
  display: flex;
  min-width: 240px;
  align-items: center;
  gap: 24px;
  justify-content: start;
  margin: auto 0;
`;

const UserAvatar = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 40px;
  box-shadow: 0px 0px 10px rgba(40, 44, 52, 0.5);
  border-radius: 50%;
`;

const UserId = styled.span`
  color: #ff4081;
`;

const UserName = styled.span`
  color: #282c34;
`;

const EventAmount = styled.span`
  color: #282c34;
`;

const EventContent = styled.div`
  color: #282c34;
  span {
    text-decoration: underline;
    color: #ff4081;
  }
`;

export default EventItem;