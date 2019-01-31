function checkUser() {
  return localStorage.user || null;
}

export default function userReducer(state = checkUser(), action){
  switch(action.type) {
    case 'LOGIN':
      return action.googleID
    case 'LOGOUT':
      return null
    default:
      return state
  }
}
