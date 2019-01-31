import React, { Component } from 'react'
import { connect } from 'react-redux'

import Profile from '../presentational/Profile'
import RAILS_API from '../services/Backend'

class ProfileContainer extends Component {

  componentDidMount() {
    fetch(RAILS_API)
    .then(res => res.json())
    .then(console.log)
  }

  render() {
    return (
      <div>{this.props.user ? <Profile /> : null}</div>
    )
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(ProfileContainer)
