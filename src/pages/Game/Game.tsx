import React from 'react';
import { GameTitle } from '../../components/GameTitle';
import { GuessForm } from '../../components/GuessForm';
import { LetterSpace } from '../../components/LetterSpace';
import { Sentence } from '../../components/Sentence';
import { Timer } from '../../components/Timer';
import { movies } from '../../data/sentences';

import './Game.css';

export interface GameProps {
  round: number;
}

export const Game: React.FC<GameProps> = ({ round }) => {
  const sentences = movies.map((sentence) => ({
    ...sentence,
    phrase: sentence.phrase.replace(/\S/gi, '.'),
  }));

  const [text, setText] = React.useState('');

  const handleSubmit = () => {
    console.log('value', text);
  };

  return (
    <div className="text-white">
      <GameTitle />
      <div className="flex flex-col border-4 border-blue-blizzard mx-auto p-8">
        <p className="mb-5 text-2xl text-yellow-pale font-bold underline">
          Round {round}
        </p>
        <ol className="flex flex-col list-decimal ml-4">
          {sentences.map((sentence) => (
            <li key={sentence.id} className="pl-2 mb-8">
              <Sentence sentence={sentence.phrase} />
            </li>
          ))}
        </ol>
        <div>
          <GuessForm
            text={text}
            onChangeText={(e) => setText((e.target as HTMLInputElement).value)}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};
