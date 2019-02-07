import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { loginSuccess, logout } from '../redux/actions'
import handleClientLoad from '../utils/handleClientLoad'
import GoogleAuth from '../presentational/GoogleAuth'
import RAILS_API from '../services/Backend'

const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

class GoogleAuthContainer extends Component {
  state = {
    email: "",
    name: "",
    image: "",
    access_token: "",
    id_token: ""
  }

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
    // this will find_or_create user based on googleID
    // TODO - encode the googleID
    this.setState({
      email: googleUser.w3.U3,
      name: googleUser.w3.ig,
      image: googleUser.w3.Paa,
      access_token: googleUser.Zi.access_token,
      id_token: googleUser.Zi.id_token
    })
    fetch(`${RAILS_API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(railsUser => {
      // save response from rails in localStorage
      localStorage.setItem('user', JSON.stringify(railsUser))
      // dispatch response to Redux store
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

export default withRouter(connect(mapStateToProps, null)(GoogleAuthContainer))
