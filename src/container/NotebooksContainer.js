import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, List } from "semantic-ui-react";

import NotebookLink from "../presentational/NotebookLink";

class NotebooksContainer extends Component {

  render() {
    return(
      <Container>
        <List divided animated relaxed verticalAlign="middle">
          {this.props.notebooks.map(notebook => (
            <NotebookLink key={notebook.id} notebook={notebook} />
          ))}
        </List>
      </Container>
    )
  }
}

let mapStateToProps = ({ notebooks }) => {
  return { notebooks };
};
export default connect(mapStateToProps)(NotebooksContainer);
