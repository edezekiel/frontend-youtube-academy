import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import loginSuccess from './actions/loginSuccess.js'
import logout from './actions/logout'

import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer
})

export default createStore(rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
