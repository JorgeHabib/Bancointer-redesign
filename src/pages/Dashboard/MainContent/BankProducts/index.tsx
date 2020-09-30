import React from 'react';
import { FiShoppingCart, FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import { darken } from 'polished';

import Button from '../../../../components/Button';

import {
  Container,
  ShoppingButton,
  Products,
  LoanButton,
  EquityButton,
  ProductCard,
} from './styles';

import { bankProducts } from '../../../../resources';

const BankProducts: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <div>
        <ShoppingButton
          background={colors.lightGrey}
        >
          <FiShoppingCart />
          <div>
            <h3>Shopping</h3>
            Aproveito os produtos com cashback!
        </div>
          <FiArrowRight />
        </ShoppingButton>
        <Products>
          {
            Object.entries(bankProducts).map(([key, value]) => (
              <ProductCard key={`card-${key}`}>
                <div>
                  {value.icon}
                </div>
                {key}
              </ProductCard>
            ))
          }
        </Products>
      </div>
      <div>
        <EquityButton background={colors.primaryDark}>
          <h3>Home Equity Banco Inter</h3>

          <div>
            <div>
              <ul>
                <li>
                  <FiChevronRight color={colors.yellow} />
                  <span>Taxa Pré-Fixada 1%</span>
                </li>
                <li>
                  <FiChevronRight color={colors.yellow} />
                  <span>Até <strong>84 meses</strong> sem pagar</span>
                </li>
              </ul>
            </div>
            <Button background={colors.yellow} color={darken(0.25, colors.yellow)}>Solicitar agora</Button>
          </div>
        </EquityButton>
        <LoanButton background={colors.secondary}>
          <div>
            <h4>Quer ficar livre dos juros altos?</h4>
            <h3>Empréstimo Consignado, o crédito para o seu momento </h3>
          </div>

          <div>
            <div>
              <FiChevronRight color={colors.yellow} />
              <p>Taxas a partir de <strong>1,30%</strong> ao mês</p>
            </div>
            <Button background={colors.yellow} color={darken(0.25, colors.yellow)}>Solicitar agora</Button>
          </div>
        </LoanButton>
      </div>
    </Container>
  );
};

export default BankProducts;
