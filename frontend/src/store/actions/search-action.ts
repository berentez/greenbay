import { BookInterface } from '../../interfaces';

export const SET_SEARCH = 'SET_SEARCH';

export const setSearchedBook = (book: BookInterface) => ({
  type: SET_SEARCH,
  payload: book,
});
