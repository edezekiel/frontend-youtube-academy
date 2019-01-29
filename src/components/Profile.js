import React, { Component } from 'react'

import RAILS_API from '../services/Backend'

class Profile extends Component {

  componentDidMount() {
    fetch(RAILS_API)
    .then(res => res.json())
    .then(console.log)
  }

  render() {
    return (
      <div>Profile Page</div>
    )
  }
}

export default Profile
