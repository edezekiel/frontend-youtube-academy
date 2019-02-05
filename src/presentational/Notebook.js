import React from "react";
import { connect } from "react-redux";

import { Segment, Header, Container } from "semantic-ui-react";

const Notebook = props => {
  // fetch the notebook show, and render outlines too
  return (
    <Container>
      <Segment>
        <Header>Notebook for "{props.notebook[0].title}"</Header>
      </Segment>
    </Container>
  );
};

let mapStateToProps = ({ user, notebooks }) => {
  return { user, notebooks };
};

export default connect(mapStateToProps)(Notebook);
