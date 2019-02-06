import React from "react";

import { Segment, Header, Container } from "semantic-ui-react";

import Outline from "./Outline";

const Notebook = (props) => {
  return (
    <Container>
      <Segment>
        <Header>"{props.notebook[0].notebook.title}"</Header>
      </Segment>
      <Segment>
        {props.notebook[0].outlines
          ? props.notebook[0].outlines.map(outline => (
              <Outline outline={outline} />
            ))
          : null}
      </Segment>
    </Container>
  );
}

export default Notebook;
