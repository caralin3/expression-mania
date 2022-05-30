import { v4 as uuidv4 } from 'uuid';
import { Sentence } from '../../types';
import { getSentenceValue } from '../../utils';
import { categories } from '../categories';

const categoryId = categories.filter((cat) => cat.name === 'TV')[0].id;

export const tv: Sentence[] = [
  {
    categoryId,
    id: uuidv4(),
    phrase: '',
    value: getSentenceValue(''),
  },
];
