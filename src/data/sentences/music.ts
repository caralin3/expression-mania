import { v4 as uuidv4 } from 'uuid';
import { Sentence } from '../../types';
import { getSentenceValue } from '../../utils';
import { categories } from '../categories';

const categoryId = categories.filter((cat) => cat.name === 'Music')[0].id;

export const music: Sentence[] = [
  {
    categoryId,
    id: uuidv4(),
    phrase: '',
    value: getSentenceValue(''),
  },
];
