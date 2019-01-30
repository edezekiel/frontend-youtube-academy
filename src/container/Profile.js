import React, { Component } from 'react'
import { connect } from 'react-redux'

import RAILS_API from '../services/Backend'

class Profile extends Component {

  componentDidMount() {
    fetch(RAILS_API)
    .then(res => res.json())
    .then(console.log)
  }

  render() {
    return (
      <div>Profile Page
        <img src={this.props.user ? JSON.parse(localStorage.getItem('user')).w3.Paa : null}/>
      </div>
    )
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(Profile)
