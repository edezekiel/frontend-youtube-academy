export default function outlineReducer(state = [], action){
  switch(action.type) {
    case 'CLEAR_OUTLINES':
      return []
    case 'ADD_USER_OUTLINE':
      return [...state, action.outline]
    default:
      return state
  }
}
