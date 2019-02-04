import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container } from 'semantic-ui-react'

import Profile from '../presentational/Profile'
import IndexOutlines from '../presentational/IndexOutlines'
import RAILS_API from '../services/Backend'

class ProfileContainer extends Component {

  componentDidMount(){
    this.fetchOutlines()
  }

  fetchOutlines = () => {
    return fetch(`${RAILS_API}/useroutlines`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        googleID: this.props.user.El,
      })
    })
    .then(res => res.json())
    .then(console.log)
  }

  render(){
    return (
      <Container>
        <Profile />
        <IndexOutlines />
      </Container>
    )
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(ProfileContainer)
