import React, { memo } from 'react';

import { Container } from './styles';

const animation = {
  unMounted: { width: '0%' },
  mounted: {
    width: '100%',
  }
}

const Gradient: React.FC = () => {
  return (
    <Container
      layout
      variants={animation}
      initial="unMounted"
      animate="mounted"
      transition={{ duration: 1.8, delay: 0.5, ease: 'easeInOut' }}
    />
  );
};

export default memo(Gradient);
