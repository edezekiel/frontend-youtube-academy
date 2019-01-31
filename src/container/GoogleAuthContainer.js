import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { loginSuccess } from '../actions/loginSuccess'
import { logout } from '../actions/logout'

import { Button, Container } from 'semantic-ui-react'

import RAILS_API from '../services/Backend'
import CLIENT_ID from '../services/ClientId'

const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

class GoogleAuthContainer extends Component {

  componentDidMount(){
    this.handleClientLoad()
    // window.addEventListener('onbeforeunload', localStorage.clear())
  }

  handleClientLoad = () => {
    window.gapi.load('client:auth2', this.initClient)
  }

  initClient = () => {
    window.gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    })
  }

  handleAuthClick = (event) => {
    window.gapi.auth2.getAuthInstance().signIn()
    .then(res => res.error ?
      // TODO: display error message to user if login fails
      console.log(res) :
      this.loginUser(res)
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

  loginUser = (user) => {
    this.fetchUser(user)
    .then(railsUser => {
      localStorage.setItem('user', railsUser.googleID)
      this.props.dispatch(loginSuccess(railsUser.googleID))
      this.props.history.push('/')
      }
    )
  }

  handleSignoutClick = (event) => {
    window.gapi.auth2.getAuthInstance().signOut()
    .then(this.logoutUser()
    )
  }

  logoutUser = () => {
    this.props.dispatch(logout())
    localStorage.clear()
  }

  render() {
    return(
      <Container textAlign="center">
        {this.props.user ?
          <Button
            onClick={this.handleSignoutClick}>Log Out</Button> :
          <Button
            onClick={this.handleAuthClick}>Log In With Google
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
