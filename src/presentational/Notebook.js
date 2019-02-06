import React from "react";

import { Segment, Header, Container } from "semantic-ui-react";

import Outlines from "./Outlines";

const Notebook = props => {
  return (
    <Container>
      <Segment>
        <Header>Notebook: {props.notebook[0].notebook.title}</Header>
      </Segment>
      <Segment>
        <Header>Outlines:</Header>
        {props.notebook[0].outlines ?
            <Outlines outlines={props.notebook[0].outlines} />
        : null}
      </Segment>
    </Container>
  );
};

export default Notebook;
