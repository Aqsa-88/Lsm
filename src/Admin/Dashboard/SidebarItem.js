import React from 'react';
import styled from 'styled-components';

function SidebarItem({ icon, text, active }) {
  return (
    <ItemContainer active={active}>
      <ItemIcon src={icon} alt={`${text} icon`} />
      <ItemText>{text}</ItemText>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${props => props.active ? '#2B59CE' : 'inherit'};
  margin-top: ${props => props.active ? '40px' : '21px'};
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
    margin: ${props => props.active ? '40px 0 0 9px' : '0 4px 0 9px'};
  }
`;

const ItemIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 40px;
`;

const ItemText = styled.span`
  margin: auto 0;
`;

export default SidebarItem;