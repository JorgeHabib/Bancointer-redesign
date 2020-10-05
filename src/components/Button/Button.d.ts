import { ButtonHTMLAttributes } from 'react';

export type ButtonRevisions = 'secondary' | 'transparent';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  revision?: ButtonRevisions;
  type?: string;
  background?: string;
  color?: string;
}
