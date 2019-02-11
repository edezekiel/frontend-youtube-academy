import React, { Component } from 'react'
import { Container, Grid, Header, Segment, Image, List } from "semantic-ui-react";
import RAILS_API from '../services/Backend'

class Community extends Component {
  state = {
    users: null
  }

  componentDidMount(){
    fetch(`${RAILS_API}/users`)
    .then(res => res.json())
    .then(users.setState({
      users: users
    }))
  }

  render(){
    return(
      <Container>
        <Segment>
          <Header>Community:</Header>
        </Segment>
        {this.state.users ?
          this.state.users.map(user =>

            <Segment>
              <Container>
                <Header>{user.name}'s Profile</Header>
                <Image src={user.image} />
              </Container>
              <Grid columns={2}>
                <Grid.Column>
                  <Container>
                    <Header>Outlines:</Header>
                    <List divided animated relaxed verticalAlign="middle">
                        {user.outlines.map(outline => (
                          <List.Header>
                            {outline.videoTitle}
                          </List.Header>
                        ))}
                    </List>
                  </Container>
                  </Grid.Column>

                <Grid.Column>
                  <Container>
                    <Header>Notebooks:</Header>
                    <List divided animated relaxed verticalAlign="middle">
                      {user.notebooks.map(notebook => (
                        <List.Header>
                          {notebook.title}
                        </List.Header>
                      ))}
                    </List>
                  </Container>
                </Grid.Column>
              </Grid>
            </Segment>)

          : null}
      </Container>
    )
  }
}

export default Community
