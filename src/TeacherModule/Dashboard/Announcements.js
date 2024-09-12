import React from 'react';
import styled from 'styled-components';

const AnnouncementsContainer = styled.section`
  border-radius: 10px;
  background-color: #fffafa;
  padding: 17px 18px 17px 49px;
  margin-top: 27px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font: 700 20px Istok Web, sans-serif;
  color: #000;
`;

const AddButton = styled.button`
  border-radius: 10px;
  background-color: #fffafa;
  font: 700 16px Istok Web, sans-serif;
  color: #000;
  padding: 5px 17px;
  border: 1px solid #978d8d;
  cursor: pointer;
`;

const AnnouncementList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AnnouncementItem = styled.li`
  border-radius: 20px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 28px;
`;

const AnnouncementContent = styled.div`
  display: flex;
  gap: 27px;
`;

const Avatar = styled.img`
  aspect-ratio: 0.93;
  width: 66px;
  border-radius: 50%;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font: 700 16px Istok Web, sans-serif;
  color: #000;
`;

const Message = styled.p`
  font: 400 14px Istok Web, sans-serif;
  color: #000;
  margin-top: 19px;
`;

const Time = styled.span`
  font: 700 20px Istok Web, sans-serif;
  color: #000;
`;

const announcements = [
  {
    avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/781b1cfe4549b6e4d11290f7afbe7d146df8490f6690844fd7333dfa901f74b5?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2',
    name: 'Sherin jackson /Admin Massage',
    message: 'Hello, you have to complete your Course',
    time: '3.30 pm'
  },
  {
    avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/781b1cfe4549b6e4d11290f7afbe7d146df8490f6690844fd7333dfa901f74b5?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2',
    name: 'Sherin jackson /Admin Massage',
    message: 'Hello, you have to complete your Course',
    time: '5.30 pm'
  },
];

function Announcements() {
  return (
    <div className='addannounce'>
    <AnnouncementsContainer>
      <Header>
        <Title>Announcements</Title>
        <AddButton>Add Announcements</AddButton>
      </Header>
      <AnnouncementList>
        {announcements.map((announcement, index) => (
          <AnnouncementItem key={index}>
            <AnnouncementContent>
              <Avatar src={announcement.avatar} alt={announcement.name} loading="lazy" />
              <TextContent>
                <Name>{announcement.name}</Name>
                <Message>{announcement.message}</Message>
              </TextContent>
            </AnnouncementContent>
            <Time>{announcement.time}</Time>
          </AnnouncementItem>
        ))}
      </AnnouncementList>
    </AnnouncementsContainer>
    </div>
  );
}

export default Announcements;