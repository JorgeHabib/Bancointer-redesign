import React, { memo } from 'react';

import { BancoInter } from '../../../assets/images';

import Button from '../../../components/Button';

import AccountDropDown from './AccountDropDown';
import Gradient from './Gradient';

import { User } from './User.d';

import {
  Container,
  Wrapper,
  LeftNav,
  RightNav,
} from './styles';

const animation = {
  unMounted: { y: -150, scale: 0.95 },
  mounted: {
    y: 0,
    scale: 1,
  }
}

const Header: React.FC = () => {
  const user: User = { name: 'Jorge Habib' };

  return (
    <>
      <Container>
        <Wrapper
          layout
          variants={animation}
          initial="unMounted"
          animate="mounted"
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
        >
          <LeftNav>
            <BancoInter />
            Internet Banking
          </LeftNav>
          <RightNav>
            <Button revision="secondary">Simulador Renda Fixa</Button>
            <AccountDropDown user={user} />
          </RightNav>
        </Wrapper>
      </Container>
      <Gradient />
    </>
  );
};

export default memo(Header);
