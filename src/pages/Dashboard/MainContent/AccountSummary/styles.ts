import styled, { css, DefaultTheme } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 2.4rem;

  max-height: 17.6rem;
  height: 100%;

  margin: 2.4rem 0;
`}
`;

export const Card = styled.article`
${({ theme }) => css`
  background: ${theme.colors.background};
  max-width: 26.4rem;
  max-height: 17.6rem;

  width: 100%;
  height: 100%;

  border-radius: ${theme.radius.default};

  padding: 1.6rem 2.4rem;

  box-shadow: ${theme.shadows.default};

  display: flex;
  flex-direction: column;
`}
`;

export const Header = styled.div<{ iconStroke?: boolean }>`
${({ theme, iconStroke }) => css`
  display: flex;
  align-items: center;

  margin-bottom: 0.8rem;

  > h3 {
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.darkGrey};
    font-weight: 500;
  }

  > svg {
    margin-right: 0.8rem;
    stroke: ${iconStroke && theme.colors.primary};

    width: auto;
    height: 1.6rem;
  }

  > button {
    margin: -0.8rem -1.6rem 0 auto;
    padding: 0.8rem 1.6rem;

    svg {
      stroke-width: 1.5;
      stroke: ${theme.colors.grey};
    }
  }
`}
`;

export const DataWrapper = styled.div`
${({ theme }) => css`
  display: flex;
  align-items: center;
  width: 100%;

  margin-top: auto;
  flex: 1;
`}
`;

export const LeftData = styled.div`
${({ theme }) => css`
  margin-right: 0.8rem;
  max-width: 55%;
  max-height: 9.6rem;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    height: 10.4rem;
    width: auto;
  }

  text {
    font-size: ${theme.fontSizes.tiny} !important;
    fill: ${theme.colors.grey} !important;
  }
`}
`;

export const RightData = styled.div`
${({ theme }) => css`
  font-size: ${theme.fontSizes.small};

  > span:not(:only-child):last-of-type {
    margin-top: 0.8rem;
    display: block;
  }
`}
`;

type DataValueType = {
  income?: boolean;
  outcome?: boolean;
}

const getDataColor = (theme: DefaultTheme, { income, outcome }: DataValueType): string => {
  if (income) {
    return theme.colors.success;
  }

  if (outcome) {
    return theme.colors.error;
  }

  return theme.colors.darkGrey;
}

export const DataValue = styled.div<DataValueType>`
${({ theme, income, outcome }) => css`
  color: ${getDataColor(theme, { income, outcome })};
  font-size: ${theme.fontSizes.default};
`}
`;

export const CustomTooltip = styled.div`
${({ theme }) => css`
  background: ${theme.colors.lightGrey};

  padding: 0.4rem 0.8rem;

  font-size: ${theme.fontSizes.default};
  border-radius: ${theme.radius.small};
  text-align: center;

  box-shadow: 0 0.5rem 0.8rem rgba(0, 0, 0, 0.28);

  :before{
    content: '';
    display: block;
    height: 0;
    left: 50%;
    bottom: -45%;
    transform: translate3d(-50%, 25%, 0);

    position: absolute;
    border-color: ${theme.colors.lightGrey}  transparent transparent transparent;
    border-style: solid;
    border-width: 0.8rem;
  }

`}
`;
