import { RootStateOrAny } from 'react-redux';
import { AnyAction, combineReducers } from 'redux';
import { userReducer } from './reducers/user-reducer';

const appReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (state: RootStateOrAny | undefined, action: AnyAction) => {
  return appReducer(state, action);
};

export default rootReducer;
