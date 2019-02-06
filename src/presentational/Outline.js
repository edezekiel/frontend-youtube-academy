import React from "react";

import Video from "./Video";

import { Segment, Header, Container } from "semantic-ui-react";

const Outline = props => {
  return (
    <Container>
      <Segment>
        <Header>Outline for "{props.outline.videoTitle}"</Header>
      </Segment>
      <Segment>
        <Video videoId={props.outline.videoId} />
      </Segment>
      <Segment>
        <Header>Your Notes:</Header>
        {props.outline.notes}
      </Segment>
    </Container>
  );
};

export default Outline;
