import React from 'react';

import {
  Container,
  Wrapper,
} from './styles';

const TopFooter: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <h4>Fale conosco</h4>
          Ligue 3003 4070 (Regiões Metropolitanas) ou 0800 940 0007 (Demais Regiões) | Horário de Atendimento: 08:00h às 20:00h.
        </div>
        <p>® Todos os direitos reservados</p>
      </Wrapper>
    </Container>
  );
};

export default TopFooter;
