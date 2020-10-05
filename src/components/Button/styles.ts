import styled, { css } from 'styled-components';

import { ButtonProps } from './Button.d';

const revisions = {
  secondary: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.secondary};
  `,
  transparent: css`
    background: transparent;
  `,
}

export const Container = styled.button<ButtonProps>`
  ${({ theme, revision, color, background }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${background || theme.colors.background};

    border: 0;
    padding: 0.8rem 2.4rem;
    border-radius: 0.4rem;
    color: ${color || theme.colors.secondary};

    ${revision && revisions[revision]}
  `}
`;
