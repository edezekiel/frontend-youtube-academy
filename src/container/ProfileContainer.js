import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Profile from '../presentational/Profile'
import RAILS_API from '../services/Backend'

class ProfileContainer extends Component {
  componentDidMount(){
    // if (!this.props.user) => Re
  }

  render() {
    return (
      <Profile />
    )
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default withRouter(connect(mapStateToProps)(ProfileContainer))
