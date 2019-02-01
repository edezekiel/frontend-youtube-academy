import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from 'semantic-ui-react'

import CLIENT_ID from '../services/ClientId'
import API_KEY from '../services/Youtube'
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

class SearchContainer extends Component {

  // GoogleAuthContainer already signed user in
  // e.g., there is already a current user
  // BUT, still need to initClient on this page
  // otherwise, window.gapi will return undefined

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

  //---------------------SEARCH_YOUTUBE---------------------//

  search = () => {
    let request = window.gapi.client.youtube.channels.list({'part': 'snippet', 'mine': 'true'});
    request.execute(res => console.log(res))
  }

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
