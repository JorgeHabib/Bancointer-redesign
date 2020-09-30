import { ButtonHTMLAttributes } from 'react';

export type ButtonVariants = 'secondary' | 'transparent';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: ButtonVariants;
  type?: string;
  background?: string;
  color?: string;
}
