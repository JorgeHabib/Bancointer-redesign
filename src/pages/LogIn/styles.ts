import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { Container as ButtonContainer } from '../../components/Button/styles';
import { motion } from 'framer-motion';

interface ContainerProps {
  filledPercentage: number;
}

export const Container = styled.div<ContainerProps>`
${({ theme, filledPercentage }) => css`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;

  align-items: center;
  justify-content: center;

  transition: background 0.5s;

  background: ${transparentize(0.92, theme.colors.grey)};

  ${filledPercentage && css`
    background: ${transparentize(1 - filledPercentage, theme.colors.primary)};
  `}
`}
`;

export const Wrapper = styled(motion.div)`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3.2rem;
  background: ${theme.colors.background};

  min-width: 38.8rem;

  box-shadow: ${theme.shadows.default};
  border-radius: ${theme.radius.default};

  svg {
    margin-bottom: 1.6rem;

    width: 12rem !important;
    height: auto !important;
  }

  span {
    text-align: center;
    margin-bottom: 4rem;
  }

  input {
    background: ${theme.colors.lightGrey};
    border: 0;
    padding: 0.8rem;
    width: 100%;

    height: 4rem;

    border-radius: ${theme.radius.small};
    color: ${theme.colors.darkGrey};
    margin-bottom: 1.6rem;

    ::placeholder {
      opacity: 0.6;
    }
  }
`}
`;

export const Button = styled(ButtonContainer) <{ disabled?: boolean }>`
${({ theme, disabled }) => css`
  background: ${`linear-gradient(90deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%)`};

  height: 4rem;
  width: 100%;
  color: ${theme.colors.background};
  border-radius: ${theme.radius.small};
  transition: 0.5s;

  :hover {
    opacity: 0.7;
  }

  ${disabled && css`
    opacity: 0.3;
    cursor: not-allowed;

    :hover {
      opacity: 0.3;
    }
  `}


`}
`;
