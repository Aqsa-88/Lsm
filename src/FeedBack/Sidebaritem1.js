import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 41px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const Text = styled.span`
  white-space: nowrap;
`;

function SidebarItem({ icon, text }) {
  return (
    <ItemWrapper>
      <Icon src={icon} alt={text} />
      <Text>{text}</Text>
    </ItemWrapper>
  );
}

export default SidebarItem;