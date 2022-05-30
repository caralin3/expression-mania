import React from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Timer } from '../Timer';

import './GuessForm.css';

export interface GuessFormProps {
  onChangeText: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  text: string;
}

export const GuessForm: React.FC<GuessFormProps> = ({
  onChangeText,
  onSubmit,
  text,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="flex flex-row" onSubmit={handleSubmit}>
      <div className="flex-1">
        <Input value={text} onChange={onChangeText} />
      </div>
      <div className="ml-4">
        <Button label="Submit" />
      </div>
      <div className="ml-4">
        <Timer />
      </div>
    </form>
  );
};
