import React, { Component } from "react";
import { connect } from "react-redux";

import { Segment, Header, Container } from "semantic-ui-react";

import OutlineLink from '../presentational/OutlineLink'

class NotebookContainer extends Component {

  // fetchNotebookOutlines(this.state.notebook.id)
  // .then(response => this.setState({outlines: response}))

  findNotebook = (notebooks) => {
    return notebooks.filter(notebook => {
      return notebook.id === parseInt(this.props.match.params.id);
    });
  };

  render() {
    return (
      <Container>
          <Container>
            <Segment>
              <Header>Notebook: </Header>
            </Segment>
            <Segment>
              <Header>Outlines:</Header>
                <div>outlines for this notebook should go here</div>
            </Segment>
          </Container>
      </Container>
    );
  }
}

let mapStateToProps = ({ notebooks }, ownProps) => {
  console.log(ownProps);
  // props.match.params.id
  // let notebook = notebooks.find(...)
  // return { notebook: notebook }
  return { notebooks };
};

export default connect(mapStateToProps)(NotebookContainer);
