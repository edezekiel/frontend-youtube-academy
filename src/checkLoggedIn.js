import { loginSuccess } from './actions/loginSuccess'

export default function checkLoggedIn(props, component){
  if (props.user) {
    return component
  } else if (!props.user && localStorage.user) {
    props.dispatch(loginSuccess(localStorage.user))
    return component
  }
  return null
}
