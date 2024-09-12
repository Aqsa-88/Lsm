import React from 'react';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';

const SidebarContainer = styled.aside`
  border-radius: 20px;
  background-color: #fffafa;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 24%;
  flex-direction: column;
  padding: 31px 0 16px;
  font: 700 16px Istok Web, sans-serif;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 21px;
  }
`;

const Logo = styled.img`
  aspect-ratio: 1.36;
  object-fit: contain;
  width: 143px;
  align-self: center;
`;

const SidebarContent = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 23px;
`;

const sidebarItems = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cad9bf7e759addd4fa574d8cd4480338aa226c09af158a6b353387deab88202b?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', label: 'Dashboard', active: true },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0c523577d26237dbb620331438f0576b41f6b9c406828c4f14310d39338d1c7c?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', label: 'Category' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7ead6676bed99ef0116f4b4e1ba6aa12c66433da3bf0888bcd0d0e75d612f327?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', label: 'Courses' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/91918fbf50b7a2a82300262850ab6058e6c97cdb3672b8ac1fb3c7c1ee73b25e?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', label: 'Help' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/50972fc07dbb4d8135743744c711875340043ad494b28165ca290b33fed43254?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', label: 'Settings' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1d3e58c3a1d9c7ae0efe7f2db55273e6af72d74986d085378d02eaa225870bd4?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', label: 'Log out' }
];

function Sidebar() {
  return (
    <SidebarContainer>
      <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0c0b94c929011ba873c63c91dc5fbf6bc720310c63738dc0a15198ceada0202?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Logo" loading="lazy" />
      <SidebarContent>
        {sidebarItems.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </SidebarContent>
    </SidebarContainer>
  );
}

export default Sidebar;