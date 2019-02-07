export default function searchReducer(state = [], action){
  switch(action.type) {
    case 'ADD_SEARCH_RESULT':
      return [...state, action.video]
    default:
      return state
  }
}
