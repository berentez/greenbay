import { AnyAction } from 'redux';
import { LOGOUT_USER, SAVE_TOKEN } from '../actions';

interface UserState {
  authorization: string;
}

const initialState: UserState = {
  authorization: '',
};

export const userReducer = (state = initialState, action: AnyAction) => {
  if (action.type === SAVE_TOKEN) {
    return action.payload;
  } else if (action.type === LOGOUT_USER) {
    return initialState;
  } else {
    return state;
  }
};
