import React from "react";

import { Segment, Grid, Header, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Video from "./Video";

const Outline = props => {
  return (
    <Container>
      <Segment>
        <Header>Outline: {props.outline.videoTitle}</Header>
        <Link to={"/outlines/outlinenote/create/" + props.outline.id}>
          <Button inverted color="red">
            Add Outline To Notebook
          </Button>
        </Link>
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
