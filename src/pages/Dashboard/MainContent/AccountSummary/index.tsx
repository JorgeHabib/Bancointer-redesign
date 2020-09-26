import React, { useState } from 'react';

import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';

import { FiCreditCard, FiFileText, FiEyeOff, FiEye } from 'react-icons/fi';

import { PlataformaPaiIcon } from '../../../../assets/images/icons';
import CreditCardIllustration from '../../../../assets/images/illustrations/card-illustration.png';

import { barChartData } from '../../../../resources';

import Button from '../../../../components/Button';

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

const data = [
  {
    "id": "japan",
    "data": [
      {
        "x": "jan",
        "y": 26
      },
      {
        "x": "fev",
        "y": 55
      },
      {
        "x": "mar",
        "y": 35
      },
      {
        "x": "abr",
        "y": 67
      },
    ]
  },
]



const AccountSummary: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(true);
  const [displayInvestments, setDisplayInvestments] = useState(true);

  const { colors } = useTheme();

  return (
    <Container>
      <Card>
        <Header iconStroke>
          <FiFileText />
          <h3>Extrato</h3>
          <Button
            onClick={() => setDisplayStatement(prevState => !prevState)}
            variant="transparent"
          >
            {displayStatement ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>
        <DataWrapper>
          <LeftData>
            <ResponsiveBar
              data={barChartData}
              indexBy="month"
              keys={['income', 'outcome']}
              colors={({ id, data }) => data[`${id}Color`]}
              margin={{ top: 8, right: 0, bottom: 24, left: -8 }}
              padding={0.7}
              borderRadius={0}
              axisTop={null}
              axisRight={null}
              axisLeft={null}
              axisBottom={{
                tickSize: 0,
                tickPadding: 8,
                tickRotation: 0,
              }}
              animate
              tooltip={(chart) => {
                const label = chart.id === 'income' ? 'Receita' : 'Despesas';
                const value = chart.data[chart.id] < 0 ? Number(chart.data[chart.id]) * -1 : chart.data[chart.id];

                return (
                  <CustomTooltip
                    rightArrow
                  >{label}: R$ {value}</CustomTooltip>
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

      <Card>
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

      <Card>
        <Header>
          <PlataformaPaiIcon />
          <h3>Plataforma Aberta Inter</h3>
          <Button
            onClick={() => setDisplayInvestments(prevState => !prevState)}
            variant="transparent"
          >
            {
              displayInvestments ? <FiEyeOff /> : <FiEye />
            }
          </Button>
        </Header>
        <DataWrapper>
          <LeftData>
            <ResponsiveLine
              data={data}
              useMesh
              margin={{ top: 8, right: 8, bottom: 20, left: 8 }}
              xScale={{ type: 'point' }}
              yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
              }}
              tooltip={({ point }) => (
                <CustomTooltip>
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
