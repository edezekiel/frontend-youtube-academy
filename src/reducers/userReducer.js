export default function userReducer(state = localStorage.getItem('name'), action){
  switch(action.type) {
    case 'LOGIN':
      return action.user
    case 'LOGOUT':
      return null
    default:
      return state
  }
}
