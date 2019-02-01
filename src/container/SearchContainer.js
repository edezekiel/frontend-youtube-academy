import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from 'semantic-ui-react'

class SearchContainer extends Component {


  // setSignInStatus = () => {
  //   let GoogleAuth = window.gapi.auth2.getAuthInstance()
  //   let user = GoogleAuth.currentUser.get();
  //   let isAuthorized = user.hasGrantedScopes('https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner');
  //   return isAuthorized
  // }

  // After the API loads, call a function to enable the search box.
  // function handleAPILoaded() {
  //   $('#search-button').attr('disabled', false);
  // }

  // Search for a specified string.
  // function search() {
  //   var q = $('#query').val();
  //   var request = gapi.client.youtube.search.list({
  //     q: q,
  //     part: 'snippet'
  //   });
  //
  //   request.execute(function(response) {
  //     var str = JSON.stringify(response.result);
  //     $('#search-container').html('<pre>' + str + '</pre>');
  //   });
  // }

  render() {
    return(
      <Button onClick={() => this.search()}>Search Youtube</Button>
    )
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(SearchContainer)
