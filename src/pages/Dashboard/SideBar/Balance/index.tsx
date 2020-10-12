import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import NumberFormat from 'react-number-format';

import { useAuth } from '../../../../contexts/userContext';
import Button from '../../../../components/Button';

import {
  Container,
  BalanceContainer,
} from './styles';

const hideBalanceAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const showBalanceAnimation = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: '100%' },
}

const Balance: React.FC = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const { balance } = useAuth();

  return (
    <Container>
      <BalanceContainer>
        <span>Saldo em Conta:</span>
        <AnimatePresence
          initial={false}
          exitBeforeEnter
        >
          {
            isBalanceVisible ?
              (
                <motion.div
                  layout
                  key="balance-shown"
                  layoutId="balance-shown"
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.1 }}
                  exit="hidden"
                  variants={hideBalanceAnimation}
                >
                  R$ <NumberFormat
                    value={balance}
                    displayType={'text'}
                    fixedDecimalScale={true}
                    decimalScale={2}
                    thousandSeparator={'.'}
                    decimalSeparator={','}
                    prefix={''}
                    renderText={value => <strong>{value}</strong>}
                  />
                </motion.div>
              ) :
              (
                <motion.span
                  layout
                  key="balance-secret"
                  layoutId="balance-secret"
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.15 }}
                  exit="hidden"
                  variants={showBalanceAnimation}
                />
              )
          }
        </AnimatePresence>
      </BalanceContainer>

      <Button revision="transparent" onClick={() => setIsBalanceVisible(state => !state)}>
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
