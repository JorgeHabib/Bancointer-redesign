import styled, { css } from 'styled-components';
import { Container as Button } from '../../../../components/Button/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGrey};
    border-radius: ${theme.radius.small};

    width: 100%;
    height: 7.2rem;
    padding: 1.6rem 0 1.6rem 2.4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      stroke-width: 1.5;
    };

    ${Button} {
      :hover {
        svg {
          stroke-width: 2;
          transform: scale(1.05)
        }
      }
    }
  `};
`;

export const BalanceContainer = styled.div`
  ${({ theme }) => css`
    > span {
      font-size: ${theme.fontSizes.small};
      display: block;

      :last-child {
        max-width: 10.5rem;

        margin: 0.2rem 0;

        height: 2rem;
        background: ${theme.colors.darkGrey}b3;
        border-radius: 0.1rem;
      }
    }

    > div {
      margin: 0.2rem 0;
    }

    strong {
      color: ${theme.colors.darkGrey};
    }}
  `};
`;
