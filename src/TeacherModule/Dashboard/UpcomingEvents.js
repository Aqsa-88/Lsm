import React from 'react';
import styled from 'styled-components';

const EventsContainer = styled.section`
  margin-top: 7px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const EventsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
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

const EventList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const EventItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const EventContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const EventIcon = styled.div`
  border-radius: 10px;
  background-color: #d9d9d9;
  width: 61px;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EventImage = styled.img`
  width: 35px;
  height: 35px;
`;

const EventName = styled.span`
  color: #222121;
  font-size: 10.99px;
  font-weight: 700;
`;

const EventStatus = styled.span`
  color: #FF0000;
  font-size: 12px;
  font-weight: 400;
`;

const eventsData = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5d3043c4ea1edae9650cf20613599be5acbf03835d19c83e23b6030fe95ae6b0?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', name: 'Docoment Submited' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6df3d97f851799190e8b4ad085358baf867979ee254f8893fecbbd9eb886cc04?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', name: 'Innovation day' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/abed007f44f3ce72b054c453c7304f32096e11b10b39020b49c0dbf15a1b45ef?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', name: 'Signature Document' }
];

function UpcomingEvents() {
  return (
    <EventsContainer>
      <EventsHeader>
        <Title>Upcoming Events</Title>
        <SeeAllLink>See all</SeeAllLink>
      </EventsHeader>
      <EventList>
        {eventsData.map((event, index) => (
          <EventItem key={index}>
            <EventContent>
              <EventIcon>
                <EventImage src={event.icon} alt={event.name} loading="lazy" />
              </EventIcon>
              <EventName>{event.name}</EventName>
            </EventContent>
            <EventStatus>Due soon</EventStatus>
          </EventItem>
        ))}
      </EventList>
    </EventsContainer>
  );
}

export default UpcomingEvents;