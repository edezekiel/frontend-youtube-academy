import { loginSuccess } from './actions/loginSuccess'

export default function checkLoggedIn(props){
  if (!props.user && localStorage.user) {
    console.log(props.user, localStorage.user)
    props.dispatch(loginSuccess(localStorage.user))
    console.log("localStorage dispatched to store")
  }
}
