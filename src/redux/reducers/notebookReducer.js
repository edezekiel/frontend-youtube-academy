export default function notebookReducer(state = [], action) {
  switch (action.type) {
    case "ADD_USER_NOTEBOOK":
      return [...state, action.notebook];
    case 'SHOW_NOTEBOOK':
      return [action.notebook]
    default:
      return state;
  }
}
