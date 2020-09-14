import styled, { css } from 'styled-components';

import { ButtonProps } from './Button.d';

const variants = {
  secondary: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.secondary};
  `,
  transparent: css`
    background: transparent;
  `,
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.background};
  border: 0;
  padding: 0.8rem 2.4rem;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.secondary};

  ${({ variant }) => variant && variants[variant]}
`;
