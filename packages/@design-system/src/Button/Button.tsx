import React, { ButtonHTMLAttributes, ElementType, forwardRef, ReactNode } from 'react';

type As = 'button' | 'div' | 'a' | 'span';

type ComponentProps = {
  button: ButtonHTMLAttributes<HTMLButtonElement>;
  div: React.HTMLAttributes<HTMLDivElement>;
  a: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  span: React.HTMLAttributes<HTMLSpanElement>;
};

export type ButtonProps<T extends As = As> = {
  as?: T;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode | React.ReactElement;
} & ComponentProps[T];

const Button = <T extends As = As>(
{ variant = 'primary', as = 'button' as T, size = 'medium', children, ...props }: ButtonProps<T>,
  ref: React.ForwardedRef<any>
) => {
  const Component: React.ElementType = as || 'button';

  return React.createElement(Component, { ...props, ref }, children);
};

export const ForwardedButton = forwardRef(Button);