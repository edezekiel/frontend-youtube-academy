import React, { Component } from "react";
import { connect } from "react-redux";

import fetchCreateNotebook from "../utils/fetchCreateNotebook";
import CreateNotebookForm from "../presentational/CreateNotebookForm";

class CreateNotebookContainer extends Component {
  submitNotebook = (event, user) => {
    event.preventDefault();
    let notebook = {
      title: event.target.notebookTitle.value,
    };
    fetchCreateNotebook(notebook, user);
  };

  render() {
    return (
      <CreateNotebookForm
        submitNotebook={this.submitNotebook}
        user={this.props.user}
      />
    );
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(CreateNotebookContainer)
