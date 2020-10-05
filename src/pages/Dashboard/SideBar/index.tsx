import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';

import Dropdown from './Dropdown';
import HelpDesk from './HelpDesk';

import { sidebarNavigation } from '../../../resources';
import { DEFAULT_TRANSITION } from '../../../constants';

import {
  Container,
  AmountInvested,
  Wrapper,
} from './styles';
import Balance from './Balance';

const animation = {
  unMounted: { opacity: 0, y: 50 },
  mounted: { opacity: 1, y: 0 },
}

const SideBar: React.FC = () => {
  return (
    <Wrapper>
      <Container
        layout
        variants={animation}
        initial="unMounted"
        animate="mounted"
        transition={{ ...DEFAULT_TRANSITION }}
      >
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
