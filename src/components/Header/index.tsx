import React, { memo } from 'react';

import { BancoInter } from '../../assets/images';
import Button from '../Button';
import AccountDropDown from './AccountDropDown';

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
    <Container>
      <Wrapper>
        <LeftNav>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav>
          <Button>Simulador Renda Fixa</Button>
          <AccountDropDown user={user} />
        </RightNav>
      </Wrapper>
    </Container>
  );
};

export default memo(Header);
