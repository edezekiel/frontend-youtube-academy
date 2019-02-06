import React from "react";

import { Segment, Grid, Header, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Video from "./Video";

const Outline = props => {
  return (
    <Container>
      <Segment>
        <Segment textAlign='center' size="huge" basic>
          <Header>Outline for "{props.outline.videoTitle}"</Header>
        </Segment>

        <Segment basic>
          <Grid columns={3} centered>
            <Grid.Column textAlign='center'>
              <Link to="/notebooks/create">
                <Button inverted color="red">
                  Add Outline To Notebook
                </Button>
              </Link>
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment>

      <Segment>
        <Segment basic>
          <Video videoId={props.outline.videoId} />
        </Segment>
        <Segment basic>
          <Header>Your Notes:</Header>
          {props.outline.notes}
        </Segment>
      </Segment>
    </Container>
  );
};

export default Outline;
