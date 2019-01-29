import React, { Component } from 'react'
import { connect } from 'react-redux'

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
      // TODO: use redux to update user state at this point

        // if logged in, dispatch user: true to state
        // also need another gapi.auth2 call?
        console.log("user is logged in", window.gapi.auth2.getAuthInstance())
        :

        // else ... ?
        console.log('user is not logged in', window.gapi.auth2.getAuthInstance())
    });
  }

    /**
   *  Sign in the user upon button click.
   *  Should this be a redux action?
   */
  handleAuthClick = (event) => {
    window.gapi.auth2.getAuthInstance().signIn();
  }

  /**
   *  Sign out the user upon button click.
   *  Should this be a redux action?
   */
  handleSignoutClick = (event) => {
    window.gapi.auth2.getAuthInstance().signOut();
  }

  render() {
    return(
      <div>
        {false ? "user is logged in" : "user is not logged in"}
      </div>
    )
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps, null)(GoogleLogin)
