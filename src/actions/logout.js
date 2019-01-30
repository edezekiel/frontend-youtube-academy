export function logout(){
  localStorage.clear()
  return { type: 'LOGOUT'}
}
