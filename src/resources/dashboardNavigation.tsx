import React from 'react';

import {
  BasketballIcon,
  BoletoIcon,
  CarIcon,
  HomeIcon,
  PlataformaPaiIcon,
  SmartphoneIcon,
  TicketIcon,
} from '../assets/images/icons';

export default {
  'Conta Digital': {
    icon: <SmartphoneIcon />,
  },
  'Créditos': {
    icon: <TicketIcon />,
  },
  'Investimentos': {
    icon: <BoletoIcon />,
  },
  'IDTVM': {
    icon: <CarIcon />,
  },
  'Seguros': {
    icon: <BoletoIcon />,
  },
  'Recarga de Celular': {
    icon: <BasketballIcon />,
  },
  'Sua Segurança': {
    icon: <BoletoIcon />,
  },
} as const;
