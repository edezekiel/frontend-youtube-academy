import React from "react";
import { Link } from "react-router-dom";

import { Container, Grid, Header, Button, Segment } from "semantic-ui-react";

import OutlinesContainer from "../container/OutlinesContainer";
import NotebooksContainer from "../container/NotebooksContainer";

import ProfileCard from "./ProfileCard";

const Profile = props => {
  return (
    <Container>
      <ProfileCard />
      <Grid columns={2}>
        <Grid.Column>
          <Header>Your Outlines:</Header>
            <OutlinesContainer />
          </Grid.Column>

        <Grid.Column>
          <Header>Your Notebooks:</Header>
            <NotebooksContainer />
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
