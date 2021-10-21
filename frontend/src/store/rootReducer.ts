import { RootStateOrAny } from 'react-redux';
import { AnyAction, combineReducers } from 'redux';
import { bookReducer } from './reducers/book-reducer';
import { searchReducer } from './reducers/search-reducer';
import { userReducer } from './reducers/user-reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const appReducer = combineReducers({
  user: userReducer,
  recommendation: bookReducer,
  search: searchReducer,
});

const rootReducer = (state: RootStateOrAny | undefined, action: AnyAction) => {
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
