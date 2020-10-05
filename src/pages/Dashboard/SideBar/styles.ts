import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import Button from '../../../components/Button';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 100%;

  max-width: 26.4rem;
`;

export const Container = styled(motion.section)`
  ${({ theme }) => css`
    background: ${({ theme }) => theme.colors.background};
    max-height: 60rem;

    width: 100%;
    height: 100%;

    border-radius: ${theme.radius.default};
    box-shadow: ${theme.shadows.default};

    padding: 2.4rem;
  `}
`;

export const AmountInvested = styled(Button)`
  && {
    ${({ theme }) => css`
      display: flex;
      justify-content: space-between;

      color: ${theme.colors.lightGrey};
      font-size: ${theme.fontSizes.small};
      width: 100%;

      margin: 0.8rem 0;

      background: ${`linear-gradient(90deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%);`};

      transition: transform 0.5s, box-shadow 0.5s;

      :hover {
        transform: scale(1.008);
        box-shadow: 0px 0.2rem 0.2rem ${transparentize(0.72, theme.colors.secondary)};
      }
  `};
  }
`;

