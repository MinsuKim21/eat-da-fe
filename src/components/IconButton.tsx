'use client';
import React, { ReactElement, ReactNode } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function IconButton({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>;
}
