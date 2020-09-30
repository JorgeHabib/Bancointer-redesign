import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';

import Dropdown from './Dropdown';
import HelpDesk from './HelpDesk';

import { sidebarNavigation } from '../../../resources';

import {
  Container,
  AmountInvested,
  Wrapper,
} from './styles';
import Balance from './Balance';

const SideBar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Balance />
        <AmountInvested>Ver Total Investido <FiBarChart2 size={"1.6rem"} /></AmountInvested>
        {
          Object.entries(sidebarNavigation).map(([key, value]) => (
            <Dropdown
              key={key}
              icon={value.icon}
              sectionName={key}
            />
          ))
        }
      </Container>
      <HelpDesk />
    </Wrapper>
  );
};

export default SideBar;
