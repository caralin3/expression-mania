import React from 'react';

import { LetterSpace } from '../LetterSpace';
import './GameTitle.css';

export interface GameTitleProps {}

export const GameTitle: React.FC<GameTitleProps> = () => (
  <div className="flex flex-row justify-center py-8">
    {'Expression'.split('').map((letter, i) => (
      <LetterSpace key={i} letter={letter} size="lg" variant="secondary" />
    ))}
    {'Mania'.split('').map((letter, i) => (
      <LetterSpace key={i} letter={letter} size="lg" />
    ))}
  </div>
);
