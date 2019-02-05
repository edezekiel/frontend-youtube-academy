import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Header, List } from 'semantic-ui-react'

import { addUserOutline } from '../actions/addUserOutline'
import { clearOutlines } from '../actions/clearOutlines'
import fetchOutlines from '../utils/fetchOutlines'

import OutlineLink from '../presentational/OutlineLink'
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
          <List divided animated relaxed verticalAlign="middle">
            {this.props.outline.map((outline, i) =>
              <OutlineLink key={outline.id} outline={outline}/>
            )}
          </List>
      </Container>
    )
  }
}

let mapStateToProps = ({user, outline}) => {
  return {user, outline}
}

export default connect(mapStateToProps)(ProfileContainer)
