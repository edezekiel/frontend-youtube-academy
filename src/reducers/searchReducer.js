export default function searchReducer(state = [], action){
  switch(action.type) {
    case 'CLEAR_SEARCH_RESULTS':
      return []
    case 'ADD_SEARCH_RESULT':
      return [...state, action.video]
    default:
      return state
  }
}
