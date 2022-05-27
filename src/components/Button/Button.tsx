import React from 'react';

import './Button.css';

export interface ButtonProps {
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ label, size }) => (
  <button className={`btn btn-primary btn-${size}`}>{label}</button>
);
