import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 10.4rem;

  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled(motion.div)`
  max-width: 113rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const LeftNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > svg {
    max-width: 11.2rem;
    height: auto;

    margin-bottom: 0.4rem;
  }

  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 700;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;

  flex: 1;
  justify-content: flex-end;

  > button {
    font-size: ${({ theme }) => theme.fontSizes.default};
  }
`;
