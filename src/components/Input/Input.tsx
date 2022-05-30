import React from 'react';

import './Input.css';

export interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input: React.FC<InputProps> = ({ onChange, value }) => (
  <input
    className="input bg-blue-cadet border-2 border-blue-columbia p-2 
    placeholder-white focus:placeholder-opacity-75 
    focus:placeholder-white shadow-md text-white w-full"
    defaultValue={value}
    placeholder="Enter word or phrase..."
    onChange={onChange}
  />
);
