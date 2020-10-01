import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { Wrapper as WrapperContainer } from '../../styles';
import { Container as FooterContainer } from '../styles';

export const Container = styled(FooterContainer)`
${({ theme }) => css`
  background: ${transparentize(0.92, theme.colors.grey)};

  margin-top: 0;
`}
`;

export const Wrapper = styled(WrapperContainer)`
${({ theme }) => css`
  padding: 1.6rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    font-size: ${theme.fontSizes.small};

    > h4 {
      color: ${theme.colors.secondary};
      font-size: ${theme.fontSizes.large};
      line-height: 2.4rem;
    }
  }

  > p {
    font-size: 12px;
  }

`}
`;
