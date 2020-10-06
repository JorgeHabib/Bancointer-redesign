import React, { useState, useEffect } from 'react';

import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';

import { FiCreditCard, FiFileText, FiEyeOff, FiEye } from 'react-icons/fi';

import { PlataformaPaiIcon } from '../../../../assets/images/icons';
import CreditCardIllustration from '../../../../assets/images/illustrations/card-illustration.png';

import { barChartData, lineChartData, hiddenInvestments, hiddenBalance } from '../../../../resources';

import Button from '../../../../components/Button';

import { DEFAULT_TRANSITION } from '../../../../constants';

import { useTheme } from 'styled-components';

import {
  Container,
  Card,
  Header,
  LeftData,
  RightData,
  DataValue,
  DataWrapper,
  CustomTooltip,
} from './styles';


const containerAnimation = {
  unMounted: {
    y: 50,
    opacity: 0,
  },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    }
  },
}

const cardsAnimation = {
  unMounted: {
    y: 50,
    opacity: 0,
  },
  mounted: {
    y: 0,
    opacity: 1,
  },
}

const AccountSummary: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(false);
  const [displayInvestments, setDisplayInvestments] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplayStatement(true);
      setDisplayInvestments(true);
    }, 1750)
  }, []);

  const { colors } = useTheme();

  return (
    <Container
      layout
      variants={containerAnimation}
      transition={DEFAULT_TRANSITION}
    >
      <Card
        layout
        key="extrato"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
        <Header iconStroke>
          <FiFileText />
          <h3>Extrato</h3>
          <Button
            onClick={() => setDisplayStatement(prevState => !prevState)}
            revision="transparent"
          >
            {displayStatement ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>
        <DataWrapper>
          <LeftData>
            <ResponsiveBar
              animate={true}
              data={displayStatement ? barChartData : hiddenBalance}
              indexBy="month"
              keys={['income', 'outcome']}
              colors={({ id, data }) => data[`${id}Color`]}
              margin={{ top: 8, right: -4, bottom: 24, left: -8 }}
              padding={0.8}
              borderRadius={2}
              axisTop={null}
              axisRight={null}
              axisLeft={null}
              axisBottom={{
                tickSize: 0,
                tickPadding: 8,
                tickRotation: 0,
              }}
              tooltip={(chart) => {
                const label = chart.id === 'income' ? 'Receita' : 'Despesas';
                const value = chart.data[chart.id] < 0 ? Number(chart.data[chart.id]) * -1 : chart.data[chart.id];

                return (
                  <CustomTooltip
                    rightArrow
                  >
                    <p>{label}:</p>
                    R$ {value}
                  </CustomTooltip>
                )
              }}
              theme={{
                tooltip: {
                  container: {
                    background: 'transparent',
                    border: 0,
                    boxShadow: 'none',
                    padding: 0,
                  },
                  tableCell: {
                    padding: 0,
                  },
                }
              }}
              motionStiffness={90}
              motionDamping={15}
              enableLabel={false}
              enableGridY={false}
            />
          </LeftData>
          <RightData>
            <span>Receitas - Maio</span>
            <DataValue income>
              {displayStatement ? 'R$ 1.985,44' : '---'}
            </DataValue>
            <span>Despesas - Maio</span>
            <DataValue outcome>
              {displayStatement ? 'R$ 2.539,33' : '---'}
            </DataValue>
          </RightData>
        </DataWrapper>
      </Card>

      <Card
        layout
        key="credit-card"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
        <Header iconStroke>
          <FiCreditCard />
          <h3>MasterCard 8430</h3>
        </Header>
        <DataWrapper>
          <LeftData>
            <img src={CreditCardIllustration} alt="Cartão de Crédito sem anuidade" />
          </LeftData>
          <RightData>
            <span>Seu cartão Mastercard sem anuidade!</span>
          </RightData>
        </DataWrapper>
      </Card>

      <Card
        layout
        key="plataforma-pai"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
        <Header>
          <PlataformaPaiIcon />
          <h3>Plataforma Aberta Inter</h3>
          <Button
            onClick={() => setDisplayInvestments(prevState => !prevState)}
            revision="transparent"
          >
            {
              displayInvestments ? <FiEyeOff /> : <FiEye />
            }
          </Button>
        </Header>
        <DataWrapper>
          <LeftData>
            <ResponsiveLine
              data={displayInvestments ? lineChartData : hiddenInvestments}
              useMesh
              margin={{ top: 8, right: 16, bottom: 20, left: 8 }}
              xScale={{ type: 'point' }}
              yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
              }}
              tooltip={({ point }) => (
                <CustomTooltip
                  before
                >
                  {point.data.yFormatted}%
                </CustomTooltip>
              )}
              enableCrosshair={false}
              axisLeft={null}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: 'bottom',
                tickSize: 0,
                tickPadding: 8,
                tickRotation: 0,
              }}
              curve="cardinal"
              colors={colors.success}
              lineWidth={1.5}
              pointSize={8}
              pointColor={colors.success}
              pointLabel="y"
              pointLabelYOffset={-12}
              enableGridY={false}
            />
          </LeftData>
          <RightData>
            <span>Total investido</span>
            <DataValue>
              {displayInvestments ? 'R$ 120,00' : '---'}
            </DataValue>
            <span>Evolução no mês</span>
            <DataValue>
              {displayInvestments ? '20%' : '---'}
            </DataValue>
          </RightData>
        </DataWrapper>
      </Card>
    </Container>
  );
};

export default AccountSummary;
