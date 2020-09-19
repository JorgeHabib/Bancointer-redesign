import React from 'react';

import { BoletoIcon } from '../assets/images/icons';

import { FiBarChart2, FiCreditCard, FiUmbrella, FiRepeat, FiGift } from 'react-icons/fi';

export default {
  Transferência: {
    icon: <FiRepeat />,
  },
  Pagamentos: {
    icon: <BoletoIcon />,
  },
  Investimentos: {
    icon: <FiBarChart2 />,
  },
  Cartões: {
    icon: <FiCreditCard />,
  },
  'Gift Card': {
    icon: <FiGift />,
  },
  Seguros: {
    icon: <FiUmbrella />,
  },
}
