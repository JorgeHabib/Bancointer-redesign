import React from 'react';

import NortonSecure from '../../../../assets/images/illustrations/norton-secured.svg';

import {
  Container,
  Wrapper,
} from './styles';

const BottomFooter: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <h4>Para reclamações, sugestões ou cancelamento de produtos e serviços</h4>

          <span>Central de Relacionamento: 3003 4070 / 0800 940 0007</span>
          <span>Deficiente de Fala e Audição: 0800 979 7099</span>
        </div>

        <div>
          <img src={NortonSecure} alt="NortonSecure" />
        </div>
      </Wrapper>
    </Container>
  );
};

export default BottomFooter;
