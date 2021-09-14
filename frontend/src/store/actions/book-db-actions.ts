import { BookData } from '../../interfaces';

export const SET_BOOK_DATA = 'SET_BOOK_DATA';

export const displayBooks = (books: BookData) => ({
  type: SET_BOOK_DATA,
  payload: books,
});
