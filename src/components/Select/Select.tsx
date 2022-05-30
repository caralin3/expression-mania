import React from 'react';

import './Select.css';

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  options: Option[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  placeholder,
}) => (
  <select
    className="select bg-blue-cadet border-2 border-blue-columbia p-2 
    shadow-md text-white w-full"
    onChange={onChange}
  >
    <option>{placeholder}</option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);
