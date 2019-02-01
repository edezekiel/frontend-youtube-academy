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
    default:
      return state
  }
}
