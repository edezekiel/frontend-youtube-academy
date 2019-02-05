import { combineReducers } from 'redux';

import userReducer from './userReducer';
import searchReducer from './searchReducer'
import outlineReducer from './outlineReducer'

export default combineReducers({
  user: userReducer,
  search: searchReducer,
  outlines: outlineReducer
})
