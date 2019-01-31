import { loginSuccess } from './actions/loginSuccess'

export default function checkLoggedIn(store){
  if (!store.user && localStorage.user) {
    console.log(store.user, localStorage.user)
    store.dispatch(loginSuccess(localStorage.user))
    console.log("localStorage dispatched to store")
  }
}
