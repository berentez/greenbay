import { AnyAction } from 'redux';
import { SAVE_TOKEN } from '../actions/user-actions';

interface UserState {
  authorization: string;
}

const initialState: UserState = {
  authorization: '',
};

export const userReducer = (state = initialState, action: AnyAction) => {
  if (action.type === SAVE_TOKEN) {
    return action.payload;
  }
  return state;
};
