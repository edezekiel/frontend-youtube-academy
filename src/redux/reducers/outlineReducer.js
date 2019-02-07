export default function outlineReducer(state = [], action){
  switch(action.type) {
    case 'ADD_USER_OUTLINE':
      return [...state, action.outline]
    default:
      return state
  }
}
