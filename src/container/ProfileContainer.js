import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Header, List, Grid } from 'semantic-ui-react'

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
        <Grid columns={2}>
          <Grid.Column>
            <Header>Outlines:</Header>
            <List divided animated relaxed verticalAlign="middle">
              {this.props.outline.map((outline, i) =>
                <OutlineLink key={outline.id} outline={outline}/>
              )}
            </List>
          </Grid.Column>

          <Grid.Column>
            <Header>Notebooks:</Header>
          </Grid.Column>
        </Grid>

      </Container>
    )
  }
}

let mapStateToProps = ({user, outline}) => {
  return {user, outline}
}

export default connect(mapStateToProps)(ProfileContainer)
