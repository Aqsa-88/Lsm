import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from './api'; 

function Sidebar() {
  const navigate = useNavigate();
  const onLogoutClick = () => {
    handleLogout(navigate);
  };

  return (
   
    <SidebarContainer>
      <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ff5da27f1418fae18436c30e9907beac890e1c025913a66d34989b1ed4b1b80?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Logo" />
      <NavItem active>
        <NavIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/cad9bf7e759addd4fa574d8cd4480338aa226c09af158a6b353387deab88202b?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Dashboard icon" />
        <NavText>Dashboard</NavText>
      </NavItem>
      <NavItem>
        <NavIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c523577d26237dbb620331438f0576b41f6b9c406828c4f14310d39338d1c7c?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Category icon" />
        <NavText>Category</NavText>
      </NavItem>
      <NavItem>
        <NavIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ead6676bed99ef0116f4b4e1ba6aa12c66433da3bf0888bcd0d0e75d612f327?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Courses icon" />
        <NavText>Courses</NavText>
      </NavItem>
      <NavItem>
      <NavIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/91918fbf50b7a2a82300262850ab6058e6c97cdb3672b8ac1fb3c7c1ee73b25e?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Help" />
       
        <NavText>Help</NavText>
      </NavItem>
      <NavItem>
        <NavIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/50972fc07dbb4d8135743744c711875340043ad494b28165ca290b33fed43254?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Setting icon" />
        <NavText>Setting</NavText>
      </NavItem>
      <NavItem>
      <NavIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d3e58c3a1d9c7ae0efe7f2db55273e6af72d74986d085378d02eaa225870bd4?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Log out" />
      <LogoutButton onClick={onLogoutClick}>Log out</LogoutButton>
      </NavItem>
    </SidebarContainer>
  );
}



const SidebarContainer = styled.nav`
  border-radius: 20px;
  background-color: #fffafa;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 24%;
  flex-direction: column;
  align-items: start;
  padding: 18px 0 48px;
  font: 700 16px Istok Web, sans-serif;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 24px;
  }
`;

const Logo = styled.img`
  aspect-ratio: 1.56;
  object-fit: contain;
  width: 136px;
  margin-left: 39px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${props => props.active ? '#2B59CE' : '#373739'};
  margin-top: 21px;
  padding: 0 42px;
  @media (max-width: 991px) {
    padding: 0 10px;
  }
`;

const NavIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 41px;
`;

const NavText = styled.span`
  white-space: nowrap;
`;

const LogoutButton = styled.button`
  align-self: end;
  margin: 28px 29px 0 0;
  background: none;
  border: none;
  color: #373739;
  font: inherit;
  cursor: pointer;
  @media (max-width: 991px) {
    margin: 28px 10px 0 0;
  }
`;

export default Sidebar;