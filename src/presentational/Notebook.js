import React from "react";

import { Segment, Header, Container } from "semantic-ui-react";

// {props.notebook[0].outlines ?
//     <OutlinesContainer outlines={props.notebook[0].outlines} />
// : null}

const Notebook = props => {
  return (
    <Container>
      <Segment>
        <Header>Notebook: {props.notebook[0].notebook.title}</Header>
      </Segment>
      <Segment>
        <Header>Outlines:</Header>

      </Segment>
    </Container>
  );
};

export default Notebook;
