import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { Container, Grid, Header, Button, Segment, Image } from "semantic-ui-react";

import UserOutlinesContainer from "./UserOutlinesContainer";
import UserNotebooksContainer from "./UserNotebooksContainer";

class Profile extends Component {

  render() {
    return (
      <Container>
        <Segment>
          <Header>Welcome {this.props.user.name}!</Header>
          <Image src={this.props.user.image} />
        </Segment>
        <Grid columns={2}>
          <Grid.Column>
            <Header>Your Outlines:</Header>
              <UserOutlinesContainer />
            </Grid.Column>

          <Grid.Column>
            <Header>Your Notebooks:</Header>
              <UserNotebooksContainer />
            <Segment>
              <Link to="/notebooks/create">
                <Button inverted color="red">
                  Create Notebook
                </Button>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

let mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(Profile);
