export default function notebooksReducer(state = [], action) {
  switch (action.type) {
    case "ADD_USER_NOTEBOOK":
      return [...state, action.notebook];
    default:
      return state;
  }
}
