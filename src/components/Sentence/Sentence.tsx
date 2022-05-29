import React from 'react';
import { LetterSpace } from '../LetterSpace';

import './Sentence.css';

export interface SentenceProps {
  sentence: string;
}

export const Sentence: React.FC<SentenceProps> = ({ sentence }) => {
  const wordSpaces = sentence.split(' ').map((word) => word.split(''));

  return (
    <div className="flex flex-wrap items-center mb-8">
      {wordSpaces.map((word, i) => (
        <div className="flex flex-row mr-5 mb-5" key={i}>
          {word.map((letter, j) => (
            <div key={j}>
              <LetterSpace letter={letter === '.' ? '' : letter} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
