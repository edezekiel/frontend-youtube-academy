export function loginSuccess(user){
  return { type: 'LOGIN', user: user}
}

export function logout(){
  localStorage.clear()
  return { type: 'LOGOUT'}
}
