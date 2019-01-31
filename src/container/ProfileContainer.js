import React, { Component } from 'react'
import { connect } from 'react-redux'

import checkLoggedIn from '../checkLoggedIn'
import Profile from '../presentational/Profile'
import RAILS_API from '../services/Backend'

class ProfileContainer extends Component {
  componentDidMount(){
  }

  render() {
    return (
      <div>{checkLoggedIn(this.props, <Profile />)}</div>
    )
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(ProfileContainer)
