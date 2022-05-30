import React from 'react';

import './LetterSpace.css';

export interface LetterSpaceProps {
  letter: string;
  size?: 'sm' | 'lg';
  variant?: 'primary' | 'secondary';
}

export const LetterSpace: React.FC<LetterSpaceProps> = ({
  letter,
  size = 'sm',
  variant = 'primary',
}) => (
  <div className={`letter-space letter-space-${variant} letter-space-${size}`}>
    {letter}
  </div>
);
