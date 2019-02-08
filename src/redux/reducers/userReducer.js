export default function userReducer(state = null, action){
  switch(action.type) {
    case 'LOGIN':
      return action.user
    case 'LOGOUT':
      return null
    case 'ADD_USER_OUTLINE':
      return {...state, outlines: state.outlines.concat(action.outline)}
    case 'ADD_USER_NOTEBOOK':
      return {...state, notebooks: state.notebooks.concat(action.notebook)}
    case 'CREATE_OUTLINE_NOTE':
      return action.user
    default:
      return state
  }
}
