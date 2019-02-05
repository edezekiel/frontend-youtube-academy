import React from "react";
import { connect } from "react-redux";

import Video from "./Video";

import { Segment, Header, Container } from "semantic-ui-react";

const Outline = props => {
  return (
    <Container>
      <Segment>
        <Header>Outline for "{props.outline[0].videoTitle}"</Header>
      </Segment>
      <Segment>
        <Video videoId={props.outline[0].videoId} />
      </Segment>
      <Segment>
        <Header>Your Notes:</Header>
        {props.outline[0].notes}
      </Segment>
    </Container>
  );
};

let mapStateToProps = ({ user, search }) => {
  return { user, search };
};

export default connect(mapStateToProps)(Outline);
