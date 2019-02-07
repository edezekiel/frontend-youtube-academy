function checkUser() {
  return localStorage.user || null;
}

// had to stringify user object to save it in local localStorage
// thus, have to parse it to return POJO in initialState

export default function userReducer(state = JSON.parse(checkUser()), action){
  switch(action.type) {
    case 'LOGIN':
      return action.user
    case 'LOGOUT':
      return null
    case 'ADD_USER_OUTLINE':
      debugger
      return {...state, outlines: state.outlines.concat(action.outline)}
    default:
      return state
  }
}
