import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from 'semantic-ui-react'

class SearchContainer extends Component {

  search = () => {
    console.log(window.gapi.auth2.getAuthInstance())
    // let request = window.gapi.client.youtube.channels.list({'part': 'snippet', 'mine': 'true'});
    // request.execute(res => console.log(res))
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
