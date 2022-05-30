import React from 'react';

import './Input.css';

export interface InputProps {
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  onChange,
  placeholder = 'Enter word or phrase...',
  value,
}) => (
  <input
    className="input bg-blue-cadet border-2 border-blue-columbia p-2 
    placeholder-white focus:placeholder-opacity-75 
    focus:placeholder-white shadow-md text-white w-full"
    defaultValue={value}
    placeholder={placeholder}
    onChange={onChange}
    id={id}
  />
);
