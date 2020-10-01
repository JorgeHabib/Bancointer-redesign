import styled, { css } from 'styled-components';

import { Wrapper as WrapperContainer } from '../../styles';
import { Container as FooterContainer } from '../styles';

export const Container = styled(FooterContainer)`
${({ theme }) => css`
  background: ${theme.colors.background};
  margin-top: 0;

  padding: 2.4rem 0;
`}
`;

export const Wrapper = styled(WrapperContainer)`
${({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;

    font-size: ${theme.fontSizes.small};

    > h4 {
      color: ${theme.colors.darkGrey};
      margin-bottom: 0.8rem;
    }
  }

`}
`;
