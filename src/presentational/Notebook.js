import React, { Component } from "react";
import { connect } from "react-redux";

import { Segment, Header, Container } from "semantic-ui-react";
import fetchShowNotebook from "../utils/fetchShowNotebook";

class Notebook extends Component {
  // fetch the notebook show, and render outlines too
  componentDidMount() {
    fetchShowNotebook(this.props.notebook[0].id).then(response =>
      console.log(response)
    );
  }

  render() {
    return (
      <Container>
        <Segment>
          <Header>Notebook for "{this.props.notebook[0].title}"</Header>
        </Segment>
      </Container>
    );
  }
}

let mapStateToProps = ({ user, notebooks }) => {
  return { user, notebooks };
};

export default connect(mapStateToProps)(Notebook);
