import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { loginSuccess, logout } from '../redux/actions'
import handleClientLoad from '../utils/handleClientLoad'
import GoogleAuth from '../presentational/GoogleAuth'
import RAILS_API from '../services/Backend'

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

  loginUser = (googleUser) => {
    // client sends id_token to rails for validation
    // once token is validated, rails will find or create user based on email
    let transmitUser = {
      email: googleUser.w3.U3,
      name: googleUser.w3.ig,
      image: googleUser.w3.Paa,
      id_token: googleUser.Zi.id_token
    }

    console.log(transmitUser)
    
    fetch(`${RAILS_API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transmitUser)
    })
    .then(res => res.json())
    .then(railsUser => {
      // save transmitUser in localStorage
      // localStorage doesn't need to persist anything in addition to transmitUser object
      localStorage.setItem('user', JSON.stringify(transmitUser))
      // rails sends back user with all their associated data
      // all of this needs to be dispatched to Redux store
      // TODO: persist railsUser through hard refresh w/out using localStorage
        // two options: nest switches, or make new fetch on component load
      this.props.dispatch(loginSuccess(railsUser))
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
        authHandler={this.props.user ? this.handleLogoutClick : this.handleLoginClick }
        message={this.props.user ? "Log Out" : "Login With Google" }/>
    )
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default withRouter(connect(mapStateToProps)(GoogleAuthContainer))
