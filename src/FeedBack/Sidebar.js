import React from 'react';
import styled from 'styled-components';
import SidebarItem from './Sidebaritem1';

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 20%;
  margin-left: 0;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SidebarContent = styled.nav`
  border-radius: 20px;
  background-color: #fffafa;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 300;
  height:600px;
  flex-direction: column;
  align-items: start;
  color: #2b59ce;
 
  font: 700 16px Istok Web, sans-serif;
 
`;
/** margin: 0 auto;
  padding: 25px 0 41px;  @media (max-width: 991px) {
    margin-top: 15px;
  }*/

const SidebarItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
/* max-width: 100%;
  margin: 394px 0 0 60px;
  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
  } */
const FooterItems = styled.div`
  display: flex;
  width: 125px;
  height :600px
 margin: 4px 9px 9px 0px;
  flex-direction: column;
  align-items: end;
  color: #373739;
  
`;

const sidebarData = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cad9bf7e759addd4fa574d8cd4480338aa226c09af158a6b353387deab88202b?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', text: 'Dashboard' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0c523577d26237dbb620331438f0576b41f6b9c406828c4f14310d39338d1c7c?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', text: 'Category' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7ead6676bed99ef0116f4b4e1ba6aa12c66433da3bf0888bcd0d0e75d612f327?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', text: 'Courses' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9fa3a651017721db6d6bf749b66b660560ca6da7c6e4067040521b8c7e026662?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2', text: 'Feedback' },
  {icon:"https://cdn.builder.io/api/v1/image/assets/TEMP/91918fbf50b7a2a82300262850ab6058e6c97cdb3672b8ac1fb3c7c1ee73b25e?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2", text:"Help"},
  { icon:"https://cdn.builder.io/api/v1/image/assets/TEMP/50972fc07dbb4d8135743744c711875340043ad494b28165ca290b33fed43254?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" ,text:"Setting"},
  {icon:"https://cdn.builder.io/api/v1/image/assets/TEMP/1d3e58c3a1d9c7ae0efe7f2db55273e6af72d74986d085378d02eaa225870bd4?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" ,text:"Log out"}
];

function Sidebar() {
  return (
    <SidebarWrapper>
       <div className='navbar'>
      <SidebarContent>
        <div className='logo'>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ff5da27f1418fae18436c30e9907beac890e1c025913a66d34989b1ed4b1b80?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" alt="Logo" style={{ width: '100%', marginBottom: '64px' }} />
        </div>
       <div className='item'>
        <SidebarItems>
          {sidebarData.map((item, index) => (
            <SidebarItem key={index} icon={item.icon} text={item.text} />
          ))}
        </SidebarItems>
        </div>
        <div className='nav'>
        <FooterItems>
        {/* <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/91918fbf50b7a2a82300262850ab6058e6c97cdb3672b8ac1fb3c7c1ee73b25e?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" text="Help" />
          <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/50972fc07dbb4d8135743744c711875340043ad494b28165ca290b33fed43254?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" text="Setting" />
          <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1d3e58c3a1d9c7ae0efe7f2db55273e6af72d74986d085378d02eaa225870bd4?placeholderIfAbsent=true&apiKey=be915012f8d44929bde1a27e7557fcc2" text="Log out" />
      */}
        </FooterItems>
        </div>
      </SidebarContent>
      </div>
    </SidebarWrapper>
  );
}

export default Sidebar;