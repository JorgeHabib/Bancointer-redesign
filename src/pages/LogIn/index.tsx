import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { BancoInter } from '../../assets/images'
import { DEFAULT_TRANSITION } from '../../constants';
import { useAuth } from '../../contexts/userContext';

import {
  Container,
  Wrapper,
  Button,
} from './styles';

const NUMBER_OF_LETTERS_TO_FILL_BACKGROUND = 5;

const animation = {
  unMounted: {
    opacity: 0,
    y: 88,
  },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      ...DEFAULT_TRANSITION,
      mass: 2.3,
    }
  },
  exiting: {
    y: 58,
    opacity: 0,
  }
}

const LogIn: React.FC = () => {
  const [name, setName] = useState('');
  const { login } = useAuth();
  const history = useHistory();

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleLogin() {
    login({ name });
    setName('');
    history.push('/dashboard');
  }

  return (
    <Container
      filledPercentage={name.length / NUMBER_OF_LETTERS_TO_FILL_BACKGROUND}
    >
      <Wrapper
        variants={animation}
        initial="unMounted"
        animate="mounted"
        exit="exiting"
      >
        <BancoInter />
        <span>Bem-vindo ao redesign do Banco Inter</span>

        <input
          type="text"
          name="name"
          placeholder="Digite seu nome para entrar"
          value={name}
          onChange={handleChangeName}
        />
        <Button
          disabled={!name}
          onClick={handleLogin}
        >
          Entrar
        </Button>
      </Wrapper>
    </Container>
  );
};

export default LogIn;
