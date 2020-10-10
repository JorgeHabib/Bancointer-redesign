import React from 'react';

import { BoletoIcon, PixIcon } from '../assets/images/icons';

import { FiBarChart2, FiCreditCard, FiUmbrella, FiRepeat } from 'react-icons/fi';

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
  Pix: {
    icon: <PixIcon />,
  },
  Seguros: {
    icon: <FiUmbrella />,
  },
}
