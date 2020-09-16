import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';

import Dropdown from './Dropdown';

import { dashboardNavigation } from '../../../../resources';

import {
  Container,
  AmountInvested,
} from './styles';
import Balance from './Balance';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Balance />
      <AmountInvested>Ver Total Investido <FiBarChart2 size={"1.6rem"} /></AmountInvested>
      {
        Object.entries(dashboardNavigation).map(([key, value]) => (
          <Dropdown
            key={key}
            icon={value.icon}
            sectionName={key}
          />
        ))
      }
    </Container>
  );
};

export default SideBar;
