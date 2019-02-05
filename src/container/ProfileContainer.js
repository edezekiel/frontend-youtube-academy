import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Header, List, Grid } from 'semantic-ui-react'

import { addUserOutline } from '../actions/addUserOutline'
import { clearOutlines } from '../actions/clearOutlines'
import fetchUserOutlines from '../utils/fetchUserOutlines'

import OutlineLink from '../presentational/OutlineLink'
import ProfileCard from '../presentational/ProfileCard'
import Outline from '../presentational/Outline'

class ProfileContainer extends Component {

  componentDidMount(){
    fetchUserOutlines(this.props)
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
              {this.props.outlines.map((outline, i) =>
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

let mapStateToProps = ({user, outlines}) => {
  return {user, outlines}
}

export default connect(mapStateToProps)(ProfileContainer)
