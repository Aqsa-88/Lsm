import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${props => props.active ? '#2B59CE' : '#373539'};
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 28px;
`;

const Label = styled.span`
  font-size: 16px;
`;

function SidebarItem({ icon, label, active }) {
  return (
    <ItemContainer active={active}>
      <Icon src={icon} alt={label} loading="lazy" />
      <Label>{label}</Label>
    </ItemContainer>
  );
}

export default SidebarItem;