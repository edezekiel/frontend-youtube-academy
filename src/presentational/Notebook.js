import React, { Component } from "react";

import { Segment, Header, Container } from "semantic-ui-react";

import Outline from "./Outline";

class Notebook extends Component {


  render() {
    return (
      <Container>
        <Segment>
          <Header>"{this.props.notebook[0].title}"</Header>
        </Segment>
        <Segment>
          {this.state.notebook.outlines
            ? this.state.notebook.outlines.map(outline => (
                <Outline outline={outline} />
              ))
            : null}
        </Segment>
      </Container>
    );
  }
}

export default Notebook;
