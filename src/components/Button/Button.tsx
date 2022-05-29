import React from 'react';

import './Button.css';

export interface ButtonProps {
  label: string;
  onClick?: VoidFunction;
  size?: 'sm' | 'md' | 'lg';
  type?: 'reset' | 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  size,
  type,
}) => (
  <button
    className={`btn btn-primary btn-${size}`}
    type={type}
    onClick={onClick}
  >
    {label}
  </button>
);
