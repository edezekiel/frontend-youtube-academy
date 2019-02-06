export default function displayNotebookReducer(state = [], action) {
  switch (action.type) {
    case "GET_USER_NOTEBOOK":
      return [action.notebook];
    default:
      return state;
  }
}
