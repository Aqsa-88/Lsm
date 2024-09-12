import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px 20px 9px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Title = styled.h1`
  color: #000;
  font: 700 34px Istok Web, sans-serif;
`;

// const SearchBar = styled.div`
//   display: flex;
//   align-items: center;
//   border-radius: 10px;
//   background-color: #fffafa;
//   padding: 13px 23px;
//   @media (max-width: 991px) {
//     padding: 13px 20px;
//   }
// `;

// const SearchIcon = styled.img`
//   aspect-ratio: 0.94;
//   width: 16px;
//   margin-right: 10px;
// `;

// const SearchInput = styled.input`
//   border: none;
//   background: transparent;
//   color: rgba(0, 0, 0, 0.36);
//   font: 700 12px Istok Web, sans-serif;
//   &::placeholder {
//     color: rgba(0, 0, 0, 0.36);
//   }
// `;

const IconGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const Icon = styled.img`
  aspect-ratio: ${props => props.ratio || 1};
  width: ${props => props.width || '24px'};
`;

function Header() {
  return (
    <div className='Dashboard'>
    <HeaderContainer>
      <Title>Dashboard<br></br></Title>
      {/* <SearchBar>
        <SearchIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/29cf1a3f21b2d9ba50c490911b46614cb51c42ac55c5e83b35df7d53b77f17d3?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Search" loading="lazy" />
        <SearchInput type="text" placeholder="Search" aria-label="Search courses" />
      </SearchBar> */}
      <IconGroup>
        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/f57a5dc8003c9c737db1c6682769deda863ee06dcf69ce76b254aecf94996135?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Notification" ratio="0.79" width="19px" loading="lazy" />
        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/42f709f16d2b6f67facac920c93cfd0118d4afa5f3e0968bd2c849b5d574b64f?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Settings" loading="lazy" />
      </IconGroup>
    </HeaderContainer>
    </div>
  );
}

export default Header;