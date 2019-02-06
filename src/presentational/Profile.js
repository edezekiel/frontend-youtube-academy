import React from "react";
import { Link } from "react-router-dom";

import { Container, Header, List, Grid, Button } from "semantic-ui-react";

import Outlines from './Outlines'
import Notebooks from './Notebooks'
import ProfileCard from "./ProfileCard";

const Profile = props => {
  return (
    <Container>
      <ProfileCard />
      <Grid columns={2}>
        <Grid.Column>
          {props.outlines ?
            <Outlines outlines={props.outlines} />
            : null
          }
        </Grid.Column>

        <Grid.Column>
          {props.notebooks ? (
            <Notebooks notebooks={props.notebooks} />
          ) : null}
          <Link to="/notebooks/create">
            <Button as="a" inverted color="red">
              Create Notebook
            </Button>
          </Link>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Profile
