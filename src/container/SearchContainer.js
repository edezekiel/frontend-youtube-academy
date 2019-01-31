import React, { Component } from 'react'
import { connect } from 'react-redux'

import API_KEY from '../services/Youtube'

class SearchContainer extends Component {

  setSignInStatus = () => {
    let GoogleAuth = window.gapi.auth2.getAuthInstance()
    let user = GoogleAuth.currentUser.get();
    let isAuthorized = user.hasGrantedScopes('https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner');
    return isAuthorized
  }

  render() {
    return(
      <div>{this.props.user ? this.setSignInStatus() : null}</div>
    )
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(SearchContainer)
