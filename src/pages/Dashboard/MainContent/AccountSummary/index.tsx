import React, { useState } from 'react';

import { FiCreditCard, FiFileText, FiEyeOff, FiEye } from 'react-icons/fi';
import { PlataformaPaiIcon } from '../../../../assets/images/icons';
import CreditCardIllustration from '../../../../assets/images/illustrations/card-illustration.png';

import Button from '../../../../components/Button';

import {
  Container,
  Card,
  Header,
  LeftData,
  RightData,
  DataValue,
  DataWrapper,
} from './styles';

const AccountSummary: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(true);
  const [displayInvestments, setDisplayInvestments] = useState(true);

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
            Grafico
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
          <LeftData>Grafico</LeftData>
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
