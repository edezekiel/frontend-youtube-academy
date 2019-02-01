import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { loginSuccess } from '../actions/loginSuccess'
import { logout } from '../actions/logout'

import { Button, Container } from 'semantic-ui-react'

import RAILS_API from '../services/Backend'
import CLIENT_ID from '../services/ClientId'
import API_KEY from '../services/Youtube'
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

class GoogleAuthContainer extends Component {

  //---------------------INIT_CLIENT---------------------//

  componentDidMount(){
    this.handleClientLoad()
  }

  handleClientLoad = () => {
    window.gapi.load('client:auth2', this.initClient)
  }

  initClient = () => {
    window.gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    })
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
    this.fetchUser(user)
    .then(railsUser => {
      // save response from rails in localStorage
      localStorage.setItem('user', JSON.stringify(user))
      // dispatch response to Redux store
      this.props.dispatch(loginSuccess(user))
      this.props.history.push('/')
      }
    )
  }

  fetchUser = (user) => {
    return fetch(`${RAILS_API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user.w3.ig,
        googleID: user.El,
        image: user.w3.Paa,
      })
    })
    .then(res => res.json())
  }

  //---------------------LOGOUT---------------------//

  logoutUser = () => {
    this.props.dispatch(logout())
    localStorage.clear()
  }

  handleLogoutClick = (event) => {
    window.gapi.auth2.getAuthInstance().signOut()
    .then(this.logoutUser()
    )
  }

  //---------------------BUTTONS---------------------//

  render() {
    return(
      <Container textAlign="center">
        {this.props.user ?
          <Button
            onClick={this.handleLogoutClick}>Log Out</Button> :
          <Button
            onClick={this.handleLoginClick}>Log In With Google
          </Button>
        }
      </Container>
    )
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default withRouter(connect(mapStateToProps, null)(GoogleAuthContainer))
