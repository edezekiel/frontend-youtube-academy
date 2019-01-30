import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginSuccess } from '../actions/loginSuccess'
import { logout } from '../actions/logout'

import CLIENT_ID from '../services/ClientId'
import API_KEY from '../services/Youtube'

const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

class GoogleLogin extends Component {

  componentDidMount(){
    this.handleClientLoad()
    window.addEventListener('onbeforeunload', localStorage.clear())
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
      // dispatch login failure
      console.log(res) :
      this.loginUser(res)
    )
  }

  loginUser = (res) => {
    localStorage.setItem('user', JSON.stringify(res))
    this.props.dispatch(loginSuccess(res))
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
      <div>
        {this.props.user || localStorage.user ?
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
