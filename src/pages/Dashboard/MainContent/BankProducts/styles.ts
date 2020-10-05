import styled, { css } from 'styled-components';
import { Container as ButtonContainer } from '../../../../components/Button/styles';

import { Navigation, Card } from '../NavigationCards/styles';

import { motion } from 'framer-motion';

import EquityButtonBackground from '../../../../assets/images/illustrations/button-background.svg';

export const Container = styled(motion.section)`
${({ theme }) => css`
  background: ${theme.colors.background};
  max-height: 34.2rem;
  height: 100%;

  border-radius: ${theme.radius.default};
  box-shadow: ${theme.shadows.default};

  padding: 2.4rem;

  > div {
    display: flex;
    justify-content: space-between;

    + div {
      margin-top: 2.4rem;
    }
  }
`}
`;

export const ShoppingButton = styled(ButtonContainer)`
${({ theme }) => css`
  display: flex;
  align-items: center;
  padding: 1.6rem 2.4rem;

  border-radius: ${theme.radius.default};

  max-width: 35.2rem;
  width: 100%;

  svg {
    stroke-width: 2;
  }

  > svg:first-child {
    height: 3.2rem;
    width: 3.2rem;

    margin-left: 1.6rem;
  }

  > svg:last-child {
    margin-left: auto;

    height: 2.4rem;
    width: 2.4rem;
  }

  > div {
    color: ${theme.colors.grey};
    font-size: ${theme.fontSizes.small};
    text-align: left;

    margin-left: 4rem;

    max-width: 11.7rem;
    width: 100%;

    > h3 {
      color: ${theme.colors.darkGrey};
      font-size: ${theme.fontSizes.large};

      margin-bottom: 4px;
    }
  }
`}
`;

export const EquitySection = styled.section`
${({ theme }) => css`
  display: flex;
  align-items: center;
  padding: 2.4rem;

  border-radius: ${theme.radius.default};

  max-width: 38.4rem;
  width: 100%;

  height: 18.4rem;

  color: ${theme.colors.yellow};
  background-image: url(${EquityButtonBackground});
  background-color: ${theme.colors.primaryDark};

  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > h3 {
    font-size: ${theme.fontSizes.large};
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-end;

    > div {
      > ul {
        color: ${theme.colors.background};

        li {
          display: flex;
          align-items: center;
          line-height: 2.4rem;

          svg {
            stroke-width: 1.5;
            vertical-align: -0.2rem;
          }
        }
      }
    }

    > button {
      font-size: ${theme.fontSizes.small};
      font-weight: bold;

      padding: 0.8rem 1.6rem;
    }
  }
`}
`;

export const LoanSection = styled(EquitySection)`
${({ theme }) => css`
  background-image: none;
  background: ${theme.colors.secondary};

  > div:first-child {
    flex-direction: column;
    align-items: flex-start;

    > h4 {
     font-weight: normal;
     color: ${theme.colors.background};
     line-height: 2.4rem;
    }

    > h3 {
      text-align: start;
      line-height: 2.4rem;

      font-size: ${theme.fontSizes.large};
    }
  }

  > div:last-child {
    > div {
      display: flex;

      > svg {
        height: 16px;
        width: 16px;
        margin-top: 0.5rem;
        margin-right: 0.8rem;
      }

      p {
        color: ${theme.colors.background};
        text-align: start;
        line-height: 2.4rem;

        max-width: 11.7rem;
      }
    }
  }
`}
`;

export const Products = styled(Navigation)`
  ${({ theme }) => css`
    flex-shrink: 1;
    grid-template-columns: repeat(5, 1fr);

    margin-left: 2.4rem;
    margin-right: -0.8rem;
`}
`;

export const ProductCard = styled(Card)`
${({ theme }) => css`
  padding: 0;

  box-shadow: none;
  background: none;

  font-size: ${theme.fontSizes.small};

  > div {
    margin-bottom: auto;
  }

  svg {
    stroke: none;
  }

  :nth-child(3) {
      svg {
        margin: -0.2rem 0 0 -0.4rem;
      }
  }
`}
`;
