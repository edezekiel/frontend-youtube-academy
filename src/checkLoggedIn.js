import { loginSuccess } from './actions/loginSuccess'

export default function checkLoggedIn(props){
  if (!props.user && localStorage.user) {
    props.dispatch(loginSuccess(localStorage.user))
  }
}
