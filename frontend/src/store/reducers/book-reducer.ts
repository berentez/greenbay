import { AnyAction } from 'redux';
import { BookData } from '../../interfaces';
import { SET_BOOK_DATA } from '../actions';

export const bookReducer = (state = [], action: AnyAction) => {
  switch (action.type) {
    case SET_BOOK_DATA:
      return [(state = action.payload)];
    default:
      return state;
  }
};
