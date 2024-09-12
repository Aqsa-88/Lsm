import React from 'react';
import styled from 'styled-components';
import EventItem from './EventItem';

const eventTypes = {
  paid: { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c9b3b6b7f7a29eb1fe3bd375a7fb2179c276d9285844e41f45a9fa15cf43388e?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', color: '#007997' },
  message: { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/94eae6ff9c3ab0e583375ae56c73a7fb1cb94432407d6533c8c25397e7d4047e?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', color: '#007997' },
  registered: { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/959d56a537576dcface001fcf70fa99995f1cc8f773dde459caf5167c448a050?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', color: '#007997' }
};

const events = [
  { type: 'paid', time: '19min ago', userId: '#445566', userName: 'user name', amount: '56.69$' },
  { type: 'paid', time: '24min ago', userId: '#445566', userName: 'user name', amount: '11.25$' },
  { type: 'message', time: '29min ago', userId: '#445566', userName: 'user name', content: 'Lorem ipsum dolor sit amet, consectetur .... see more >' },
  { type: 'registered', time: '29min ago', userId: '#445566', userName: 'user name' },
  { type: 'message', time: '29min ago', userId: '#445566', userName: 'user name', content: 'Lorem ipsum dolor sit amet, consectetur .... see more >' },
  { type: 'paid', time: '35min ago', userId: '#445566', userName: 'user name', amount: '11.25$' },
  { type: 'message', time: '42min ago', userId: '#445566', userName: 'user name', content: 'Lorem ipsum dolor sit amet, consectetur .... see more >' },
  { type: 'message', time: '42min ago', userId: '#445566', userName: 'user name', content: 'Lorem ipsum dolor sit amet, consectetur .... see more >' },
  { type: 'paid', time: '50min ago', userId: '#445566', userName: 'user name', amount: '11.25$' },
  { type: 'registered', time: '51min ago', userId: '#445566', userName: 'user name' }
];

function EventsList() {
  return (
    <EventsContainer>
      <EventsHeader>
        <EventsTitle>events</EventsTitle>
        <FilterSection>
          <FilterItem>
            <FilterLabel>time :</FilterLabel>
            <FilterValue>
              last hour
              <DropdownIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/272cb3d4a3b7e8261b9dd5c423803ad70ef14cc18dfa094e64f436860409cb60?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Dropdown" />
            </FilterValue>
          </FilterItem>
          <FilterItem>
            <FilterLabel>type :</FilterLabel>
            <FilterValue>
              all
              <DropdownIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/272cb3d4a3b7e8261b9dd5c423803ad70ef14cc18dfa094e64f436860409cb60?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Dropdown" />
            </FilterValue>
          </FilterItem>
        </FilterSection>
      </EventsHeader>
      <EventsListWrapper>
        {events.map((event, index) => (
          <EventItem key={index} {...event} icon={eventTypes[event.type].icon} />
        ))}
      </EventsListWrapper>
      <MoreButton>more</MoreButton>
    </EventsContainer>
  );
}

const EventsContainer = styled.section`
  background-color: #f5f5f5;
  border-color: #007997;
  border-top-width: 1px;
  border-bottom-width: 1px;
  display: flex;
  margin-top: 71px;
  width: 100%;
  flex-direction: column;
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  padding: 21px 0 40px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const EventsHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 40px 100px;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 8px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const EventsTitle = styled.h2`
  font-size: 24px;
  color: #282c34;
  letter-spacing: 2.4px;
  margin: auto 0;
`;

const FilterSection = styled.div`
  display: flex;
  min-width: 240px;
  align-items: start;
  gap: 40px;
  justify-content: start;
  margin: auto 0;
`;

const FilterItem = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
  justify-content: start;
`;

const FilterLabel = styled.span`
  font-size: 16px;
  color: #282c34;
  letter-spacing: 1.6px;
`;

const FilterValue = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: #007997;
  letter-spacing: 1.4px;
  justify-content: center;
`;

const DropdownIcon = styled.img`
  aspect-ratio: 1.6;
  object-fit: contain;
  width: 16px;
`;

const EventsListWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
  padding-left: 8px;
  flex-direction: column;
  align-items: start;
  font-size: 14px;
  letter-spacing: 1.4px;
  justify-content: start;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MoreButton = styled.button`
  align-self: stretch;
  border-radius: 20px;
  background: linear-gradient(109deg, #007997 41.15%, #63638e 71.35%, #a75489 87.5%, #ff4081 100%);
  margin-top: 32px;
  width: 154px;
  max-width: 100%;
  font-size: 16px;
  color: #f5f5f5;
  letter-spacing: 1.6px;
  padding: 10px 24px;
  border: none;
  cursor: pointer;
  @media (max-width: 991px) {
    padding: 10px 20px;
  }
`;

export default EventsList;