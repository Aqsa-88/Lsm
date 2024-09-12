import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'
import MainContent from './MainContent';


const DashboardContainer = styled.div`
  padding: 0 1px;
`;

const DashboardLayout = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardLayout>
        <Sidebar />
        <MainContent />
      </DashboardLayout>
    </DashboardContainer>
  );
}

export default Dashboard;