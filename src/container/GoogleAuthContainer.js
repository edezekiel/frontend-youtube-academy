import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { loginSuccess, logout } from '../redux/actions'
import fetchUser from '../utils/fetchUser'
import handleClientLoad from '../utils/handleClientLoad'
import GoogleAuth from '../presentational/GoogleAuth'
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

class GoogleAuthContainer extends Component {

  componentDidMount(){
    handleClientLoad()
  }

  //---------------------LOGIN---------------------//

  handleLoginClick = (event) => {
    // sign user in to Google
    window.gapi.auth2.getAuthInstance().signIn()
    .then(res => res.error ?
      // TODO: display error message to user if login fails
      console.log(res) :
      // if sign in successful (no error returned), ensure that
      // user has properly granted scope access
      this.checkUserAuth(res)
    )
  }

  checkUserAuth = (res) => {
    // ensure that signed in user has access to youtube scopes (defined above)
    let isAuthorized = window.gapi.auth2.getAuthInstance().currentUser.get().hasGrantedScopes(SCOPES)
    // if user is signed in and authorized, log user in to my app
    if (isAuthorized) {
      this.loginUser(res)
    } else {
      console.log('not authorized')
    }
  }

  loginUser = (user) => {
    // this will find_or_create user based on googleID
    // TODO - encode the googleID
    fetchUser(user)
    .then(railsUser => {
      // save response from rails in localStorage
      localStorage.setItem('user', JSON.stringify(user))
      // dispatch response to Redux store
      this.props.dispatch(loginSuccess(user))
      this.props.history.push('/')
      }
    )
  }

  //---------------------LOGOUT---------------------//

  handleLogoutClick = (event) => {
    window.gapi.auth2.getAuthInstance().signOut()
    .then(this.logoutUser()
    )
  }

  logoutUser = () => {
    this.props.dispatch(logout())
    localStorage.clear()
  }

  //---------------------RENDER/REDUX---------------------//

  render() {
    return (
      <GoogleAuth
        authHandler={this.props.user? this.handleLogoutClick : this.handleLoginClick }
        message={this.props.user? "Log Out" : "Login With Google" }/>
    )
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default withRouter(connect(mapStateToProps, null)(GoogleAuthContainer))
