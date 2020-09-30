import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import Babi from '../../../../assets/images/illustrations/babi.png';

import {
  Container,
  Button,
} from './styles';

const HelpDesk: React.FC = () => {
  return (
    <Container>
      <img src={Babi} alt="Babi do Banco Inter" />
      <span>Olá, Jorge. <br /> Posso Ajudar?</span>

      <Button>
        <FiArrowRight size={24} />
      </Button>
    </Container>
  );
};

export default HelpDesk;
