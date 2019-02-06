import React from "react";
import { Link } from "react-router-dom";

import { Container, Grid, Header, Button, Segment } from "semantic-ui-react";

import Outlines from "./Outlines";
import Notebooks from "./Notebooks";
import ProfileCard from "./ProfileCard";

const Profile = props => {
  return (
    <Container>
      <ProfileCard />
      <Grid columns={2}>
        <Grid.Column>
          <Header>Your Outlines:</Header>
          {props.outlines ? <Outlines outlines={props.outlines} /> : null}
        </Grid.Column>

        <Grid.Column>
          <Header>Your Notebooks:</Header>
          {props.notebooks ? <Notebooks notebooks={props.notebooks} /> : null}
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
};

export default Profile;
