import { v4 as uuidv4 } from 'uuid';
import { Sentence } from '../../types';
import { getSentenceValue } from '../../utils';
import { categories } from '../categories';

const categoryId = categories.filter((cat) => cat.name === 'Movies')[0].id;

export const movies: Sentence[] = [
  {
    categoryId,
    id: uuidv4(),
    phrase: 'Avengers Assemble',
    value: getSentenceValue('Avengers Assemble'),
  },
  {
    categoryId,
    id: uuidv4(),
    phrase: 'I can do this all day',
    value: getSentenceValue('I can do this all day'),
  },
  {
    categoryId,
    id: uuidv4(),
    phrase: 'Captain America',
    value: getSentenceValue('Captain America'),
  },
  {
    categoryId,
    id: uuidv4(),
    phrase: 'Chris Evans',
    value: getSentenceValue('Chris Evans'),
  },
  {
    categoryId,
    id: uuidv4(),
    phrase: 'Star spangled man with a plan',
    value: getSentenceValue('Star spangled man with a plan'),
  },
  {
    categoryId,
    id: uuidv4(),
    phrase: 'Agents of shield',
    value: getSentenceValue('Agents of shield'),
  },
  {
    categoryId,
    id: uuidv4(),
    phrase: 'Natasha Romanov',
    value: getSentenceValue('Natasha Romanov'),
  },
  {
    categoryId,
    id: uuidv4(),
    phrase: 'Howard Stark',
    value: getSentenceValue('Howard Stark'),
  },
  {
    categoryId,
    id: uuidv4(),
    phrase: 'Margaret Carter',
    value: getSentenceValue('Margaret Carter'),
  },
  {
    categoryId,
    id: uuidv4(),
    phrase: 'Dr Erksine',
    value: getSentenceValue('Dr Erksine'),
  },
];
