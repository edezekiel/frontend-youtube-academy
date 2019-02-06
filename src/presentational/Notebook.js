import React, { Component } from "react";
import { connect } from "react-redux";

import { Segment, Header, Container } from "semantic-ui-react";
import fetchShowNotebook from "../utils/fetchShowNotebook";

import Outline from "./Outline";

class Notebook extends Component {
  state = {
    notebook: []
  };
  componentDidMount() {
    fetchShowNotebook(this.props.notebook[0].id).then(notebook =>
      this.setState({ notebook: notebook })
    );
  }

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

let mapStateToProps = ({ user, notebooks }) => {
  return { user, notebooks };
};

export default connect(mapStateToProps)(Notebook);
