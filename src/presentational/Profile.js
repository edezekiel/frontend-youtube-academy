import React from 'react'

import { Container, Header, List, Grid } from 'semantic-ui-react'

import OutlineLink from './/OutlineLink'
import ProfileCard from './/ProfileCard'
import Outline from './/Outline'

const Profile = (props) => {
  return (
    <Container>
      <ProfileCard />
      <Grid columns={2}>
        <Grid.Column>
          <Header>Outlines:</Header>
          <List divided animated relaxed verticalAlign="middle">
            {props.outline.map((outline, i) =>
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

export default Profile
