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

const Header: React.FC = () => {
  const user: User = { name: 'Jorge Habib' };

  return (
    <>
      <Container>
        <Wrapper>
          <LeftNav>
            <BancoInter />
          Internet Banking
        </LeftNav>
          <RightNav>
            <Button variant="secondary">Simulador Renda Fixa</Button>
            <AccountDropDown user={user} />
          </RightNav>
        </Wrapper>
      </Container>
      <Gradient />
    </>
  );
};

export default memo(Header);
