import React, { Component } from 'react'
import { connect } from 'react-redux'

import Profile from '../presentational/Profile'
import RAILS_API from '../services/Backend'

class ProfileContainer extends Component {
  componentDidMount(){
    this.fetchUser()
  }

  fetchUser = () => {
    fetch(`${RAILS_API}/users/${this.props.user}`)
    .then(res => res.json())
    .then(console.log)
  }

  render(){
    return (
      <Profile />
    )
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(ProfileContainer)
