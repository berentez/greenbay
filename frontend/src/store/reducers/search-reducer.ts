import { AnyAction } from 'redux';
import { BookInterface } from '../../interfaces';
import { SET_SEARCH } from '../actions';

const initialState: BookInterface = {
  id: 0,
  title: '',
  author: '',
  genre: '',
  page: 0,
  color: '',
  status: '',
};

export const searchReducer = (
  state: BookInterface = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_SEARCH:
      return (state = action.payload);
    default:
      return state;
  }
};
