export default function notebookReducer(state = [], action) {
  switch (action.type) {
    case "CLEAR_NOTEBOOKS":
      return [];
    case "ADD_USER_NOTEBOOK":
      return [...state, action.notebook];
    case 'SHOW_NOTEBOOK':
      return [action.notebook]
    default:
      return state;
  }
}
