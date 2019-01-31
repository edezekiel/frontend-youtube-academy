import React, { Component } from 'react'
import { connect } from 'react-redux'

class NavBarContainer extends Component {
  render(){
    return(
      <div>NavBar</div>
    )
  }
}

export default connect()(NavBarContainer)
