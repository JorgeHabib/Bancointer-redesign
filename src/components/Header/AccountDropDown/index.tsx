import React, { memo } from 'react';
import { useTheme } from 'styled-components';

import { Container } from './styles';

import { User } from '../User.d';

type AccountDropDownProps = {
  user: User
}

const removeHashFromColor = (color: string): string => color.slice(1);

const AccountDropDown: React.FC<AccountDropDownProps> = ({ user }) => {
  const { lightGrey, secondary } = useTheme().colors;

  return (
    <Container>
      <img src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=${removeHashFromColor(lightGrey)}&color=${removeHashFromColor(secondary)}&name=${user.name}`} alt="user" />
    </Container>
  );
};

export default memo(AccountDropDown);
