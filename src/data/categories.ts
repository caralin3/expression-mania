import { v4 as uuidv4 } from 'uuid';
import { Category } from '../types';

export const categories: Category[] = [
  {
    id: uuidv4(),
    name: 'Art',
  },
  {
    id: uuidv4(),
    name: 'History',
  },
  {
    id: uuidv4(),
    name: 'Movies',
  },
  {
    id: uuidv4(),
    name: 'Music',
  },
  {
    id: uuidv4(),
    name: 'TV',
  },
];
