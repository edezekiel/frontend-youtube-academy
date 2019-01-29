import React, { Component } from 'react'

const CLIENT_ID = '369548765069-mof01apa10i4vj53dk7g327j8oh91te7.apps.googleusercontent.com'
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

export default class GoogleLogin extends Component {

  componentDidMount(){
    this.handleClientLoad()
  }

  handleClientLoad = () => {
    console.log('handleclientload')
    // gapi.load('client:auth2', initClient)
  }

  render() {
    return(
      <div>
        <button>Authorize</button>
        <button>Sign Out</button>
      </div>
    )
  }
}
