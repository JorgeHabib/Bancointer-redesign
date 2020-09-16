import React from 'react';

import Header from './Header';
import Sidebar from './Header/SideBar';

import {
  Container,
  Wrapper,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Sidebar />
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
