import React from 'react';

import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

import {
  Container,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <TopFooter />
      <BottomFooter />
    </Container>
  );
};

export default Footer;
