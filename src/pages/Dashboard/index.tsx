import React from 'react';

import Header from './Header';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Dashboard</h1>
      </Container>
    </>
  );
};

export default Dashboard;
