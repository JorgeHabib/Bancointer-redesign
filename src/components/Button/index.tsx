import React, { memo } from 'react';

import { Container } from './styles';

import { ButtonProps } from './Button.d';

const Button: React.FC<ButtonProps> = ({
  loading,
  type,
  variant = 'secondary',
  children,
  ...rest
}) => {
  return (
    <Container
      type={type || 'button'}
      variant={variant}
      {...rest}
    >
      {loading ? 'Carregando' : children}
    </Container>
  );
};

export default memo(Button);
