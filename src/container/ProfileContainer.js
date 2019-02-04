import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Header } from 'semantic-ui-react'

import { addUserOutline } from '../actions/addUserOutline'
import { clearOutlines } from '../actions/clearOutlines'

import Profile from '../presentational/Profile'
import Outline from '../presentational/Outline'
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
    .then(response => this.updateOutlineState(response))
  }

  updateOutlineState = (response) => {
    response.map(outline => {
      this.props.dispatch(clearOutlines())
      this.props.dispatch(addUserOutline(outline))
    })
  }

  render(){
    return (
      <Container>
        <Profile />
        <Header>Here are your saved outlines:</Header>
        {this.props.outline.map((outline, i) =>
          <Outline
            key={i}
            video={outline.video}
            notes={outline.notes}
          />
        )}
      </Container>
    )
  }
}

let mapStateToProps = ({user, outline}) => {
  return {user, outline}
}

export default connect(mapStateToProps)(ProfileContainer)
