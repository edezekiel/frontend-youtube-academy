import React, { Component } from 'react'

const CLIENT_ID = '369548765069-mof01apa10i4vj53dk7g327j8oh91te7.apps.googleusercontent.com'
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const API_KEY = 'AIzaSyDadIIN_F6iRgWfuLEFxYQ3fn1Pj8Ai2EU'

export default class GoogleLogin extends Component {

  componentDidMount(){
    this.handleClientLoad()
  }

  handleClientLoad = () => {
    window.gapi.load('client:auth2', this.initClient)
  }

  initClient = () => {
    console.log('init client')
    window.gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    }).then(function () {
      window.gapi.auth2.getAuthInstance().isSignedIn.get() ?
      // TODO: use redux to update state at this point
      // default should be false
        console.log("is already signed in")
        : console.log('is not signed in')

    });
  }

  handleAuthorize = () => {

  }

  render() {
    return(
      <div>
        {false ? "is logged in" : "is not logged in"}
      </div>
    )
  }
}
