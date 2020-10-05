import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  flex: 1;

  display: flex;
  justify-content: center;
  z-index: 2;

  margin-top: -2.8rem;
`;

export const Wrapper = styled(motion.div)`
  max-width: 113rem;
  width: 100%;

  display: flex;
`;
