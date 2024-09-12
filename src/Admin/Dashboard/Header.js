import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>Dashboard</Title>
        <SearchBar>
          <SearchIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/29cf1a3f21b2d9ba50c490911b46614cb51c42ac55c5e83b35df7d53b77f17d3?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Search" />
          <SearchInput type="text" placeholder="Search" aria-label="Search" />
        </SearchBar>
      </HeaderContent>
      <UserSection>
        <NotificationIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/f57a5dc8003c9c737db1c6682769deda863ee06dcf69ce76b254aecf94996135?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Notifications" />
        <MessageIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/42f709f16d2b6f67facac920c93cfd0118d4afa5f3e0968bd2c849b5d574b64f?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Messages" />
        <UserInfo>
          <UserAvatar src="https://cdn.builder.io/api/v1/image/assets/TEMP/781b1cfe4549b6e4d11290f7afbe7d146df8490f6690844fd7333dfa901f74b5?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="User avatar" />
          <UserDetails>
            <UserName>Admin Name</UserName>
            <UserRole>Admin</UserRole>
          </UserDetails>
        </UserInfo>
        <DropdownIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba2513a1ae94aace3dd514e557f20b605c128bccdb8e38b5aab95c75927744f7?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Dropdown" />
      </UserSection>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  margin-left: 17px;
  width: 964px;
  max-width: 100%;
  align-items: start;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const HeaderContent = styled.div`
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  color: #000;
  align-self: start;
  font: 700 20px Istok Web, sans-serif;
`;

const SearchBar = styled.div`
  border-radius: 10px;
  background-color: #fffafa;
  display: flex;
  margin-top: 16px;
  gap: 3px;
  padding: 5px 23px 20px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SearchIcon = styled.img`
  aspect-ratio: 0.94;
  object-fit: contain;
  width: 16px;
`;

const SearchInput = styled.input`
  color: rgba(0, 0, 0, 0.36);
  flex-grow: 1;
  width: 399px;
  font: 700 12px Istok Web, sans-serif;
  border: none;
  background: transparent;
  &::placeholder {
    color: rgba(0, 0, 0, 0.36);
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 31px;
  font-family: Istok Web, sans-serif;
`;

const NotificationIcon = styled.img`
  aspect-ratio: 0.79;
  object-fit: contain;
  width: 19px;
`;

const MessageIcon = styled.img`
  aspect-ratio: 1.41;
  object-fit: contain;
  width: 24px;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 11px;
`;

const UserAvatar = styled.img`
  aspect-ratio: 0.93;
  object-fit: contain;
  width: 66px;
  border-radius: 100px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const UserName = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 700;
`;

const UserRole = styled.span`
  color: #3e3e3e;
  font-size: 12px;
  font-weight: 400;
  margin-top: 9px;
`;

const DropdownIcon = styled.img`
  aspect-ratio: 0.88;
  object-fit: contain;
  width: 15px;
`;

export default Header;