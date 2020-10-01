import React from 'react';

import Header from './Header';
import Sidebar from './SideBar';
import MainContent from './MainContent';

import {
  Container,
  Wrapper,
} from './styles';
import Footer from './Footer';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Sidebar />
          <MainContent />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
