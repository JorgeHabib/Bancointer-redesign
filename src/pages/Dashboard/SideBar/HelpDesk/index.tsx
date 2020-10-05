import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { DEFAULT_TRANSITION } from '../../../../constants';

import Babi from '../../../../assets/images/illustrations/babi.png';

import {
  Container,
  Button,
} from './styles';

const animation = {
  unMounted: { x: -50, opacity: 0 },
  mounted: { x: 0, opacity: 1 },
}

const HelpDesk: React.FC = () => {
  return (
    <Container
      layout
      variants={animation}
      transition={DEFAULT_TRANSITION}
      whileHover={{ x: 5 }}
      whileTap={{ x: -3 }}
    >
      <img src={Babi} alt="Babi do Banco Inter" />
      <span>Olá, Jorge. <br /> Posso Ajudar?</span>

      <Button>
        <FiArrowRight size={24} />
      </Button>
    </Container>
  );
};

export default HelpDesk;
