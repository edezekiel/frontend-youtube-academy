import { combineReducers } from "redux";

import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import outlineReducer from "./outlineReducer";
import notebookReducer from "./notebookReducer";

export default combineReducers({
  user: userReducer,
  search: searchReducer,
  outlines: outlineReducer,
  notebooks: notebookReducer
});
