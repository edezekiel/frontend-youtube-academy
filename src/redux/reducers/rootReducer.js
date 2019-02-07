import { combineReducers } from "redux";

import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import outlinesReducer from "./outlinesReducer";
import notebooksReducer from "./notebooksReducer";

export default combineReducers({
  user: userReducer,
  search: searchReducer,
  outlines: outlinesReducer,
  notebooks: notebooksReducer,
});
