export interface Category {
  id: string;
  name: string;
}

export interface Sentence {
  categoryId: string;
  id: string;
  phrase: string;
  value: number;
}
