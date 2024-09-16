import React from 'react';
import styled from 'styled-components';
import {  Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  font-family: Istok Web, sans-serif;
  padding-top: 5px ;
  padding-right :5%;
`;

const UserAvatar = styled.img`
  aspect-ratio: 0.93;
  object-fit: contain;
  width: 64px;
  border-radius: 100px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #000;
  font-weight: 700;
`;

const UserRole = styled.div`
  color: #3e3e3e;
  font-size: 12px;
  font-weight: 400;
`;

function Header() {
  return (
    <HeaderWrapper>
      <UserAvatar src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca514157da91af459c5550ec7b94a1a4b79d85c325c804b6769bad31f94c83?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="User Avatar" />
      <UserInfo>
        <UserName>
          User Name
         <Link to= "/MyprofileComponent"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba2513a1ae94aace3dd514e557f20b605c128bccdb8e38b5aab95c75927744f7?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="User Status" style={{ width: '15px' }} /></Link>
        </UserName>
        <div className='user'><UserRole>User</UserRole></div>
      </UserInfo>
    </HeaderWrapper>
  );
}

export default Header;