import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import Button from '../../../../../components/Button';

import {
  Container,
  BalanceContainer,
} from './styles';

const Balance: React.FC = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  return (
    <Container>
      <BalanceContainer>
        <span>Saldo em Conta:</span>
        {
          isBalanceVisible ? (
            <div>
              R$ <strong>289,53</strong>
            </div>
          ) : (
              <span />
            )
        }
      </BalanceContainer>

      <Button variant="transparent" onClick={() => setIsBalanceVisible(state => !state)}>
        {
          isBalanceVisible ? (
            <FiEye />
          ) : (
              <FiEyeOff />
            )
        }
      </Button>
    </Container>
  );
};

export default Balance;
