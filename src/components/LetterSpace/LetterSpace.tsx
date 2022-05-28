import React from 'react';

import './LetterSpace.css';

export interface LetterSpaceProps {
  letter: string;
}

export const LetterSpace: React.FC<LetterSpaceProps> = ({ letter }) => (
  <div className="letter-space">{letter}</div>
);
