import React, { Component } from 'react'
import { connect } from 'react-redux'

import userReducer from '../reducers/userReducer'
import { loginSuccess } from '../actions/loginSuccess'
import { logout } from '../actions/logout'

import CLIENT_ID from '../services/ClientId'
import API_KEY from '../services/Youtube'

const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

class GoogleLogin extends Component {

  componentDidMount(){
    this.handleClientLoad()
  }

  handleClientLoad = () => {
    window.gapi.load('client:auth2', this.initClient)
  }

  initClient = () => {
    window.gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    }).then(function () {
      window.gapi.auth2.getAuthInstance().isSignedIn.get() ?
        // if logged in, dispatch user: true to state
        console.log("Welcome <user>") :
        console.log('Please Log In')
    });
  }

  handleAuthClick = (event) => {
    window.gapi.auth2.getAuthInstance().signIn()
    .then(res => res.error ?
      // dispatch login failure
      console.log(res) :
      // if successful login, dispatch user to redux
      this.props.dispatch(loginSuccess(res))
    )
  }

  handleSignoutClick = (event) => {
    window.gapi.auth2.getAuthInstance().signOut()
    .then(this.props.dispatch(logout()))
  }

  render() {
    return(
      <div>
        {this.props.user ?
          <button
            onClick={this.handleSignoutClick}>Log Out</button> :
          <button
            onClick={this.handleAuthClick}>Log In With Google
          </button>
        }
      </div>
    )
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps, null)(GoogleLogin)
