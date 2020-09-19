import styled, { css } from 'styled-components';
import Button from '../../../../../components/Button';

export const Container = styled(Button)`
  && {
    ${({ theme }) => css`
    background: transparent;
    width: 100%;

    justify-content: flex-start;

    color: ${theme.colors.grey};
    font-size: ${theme.fontSizes.default};
    padding: 1.6rem 0;

    :not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGrey};
    }

    > div {
      :first-child {
        height: 3.2rem;
        width: 3.2rem;

        background: ${theme.colors.lightGrey};

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 1.2rem;
      }

      :last-child {
        margin-left: auto;
      }

      > svg {
        stroke: ${theme.colors.primary}
      }
    }

    > svg {
      margin-left: auto;
    }

  `}
  }
`;
