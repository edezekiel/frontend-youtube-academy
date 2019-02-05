import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Header } from 'semantic-ui-react'

import { addUserOutline } from '../actions/addUserOutline'
import { clearOutlines } from '../actions/clearOutlines'
import fetchOutlines from '../utils/fetchOutlines'

import ProfileCard from '../presentational/ProfileCard'
import Outline from '../presentational/Outline'

class ProfileContainer extends Component {

  componentDidMount(){
    fetchOutlines(this.props)
    .then(response => this.updateOutlineState(response))
  }

  updateOutlineState = (response) => {
    response.map(outline => {
      this.props.dispatch(addUserOutline(outline))
      return outline
    })
  }

  render(){
    return (
      <Container>
        <ProfileCard />
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
