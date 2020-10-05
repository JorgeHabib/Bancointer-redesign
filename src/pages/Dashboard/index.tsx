import React from 'react';

import Header from './Header';
import Sidebar from './SideBar';
import MainContent from './MainContent';

import {
  Container,
  Wrapper,
} from './styles';
import Footer from './Footer';

const animation = {
  unMounted: { opacity: 0 },
  mounted: {
    opacity: 1,
    // transition: {
    //   when: 'beforeChildren',
    //   staggerChildren: 0.2,
    // }
  },
}

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper
          layout
          variants={animation}
          initial="unMounted"
          animate="mounted"
          transition={{ duration: 1 }}
        >
          <Sidebar />
          <MainContent />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
