export default function userReducer(state = null, action){
  switch(action.type) {
    case 'LOGIN':
      return action.googleID
    case 'LOGOUT':
      return null
    default:
      return state
  }
}
