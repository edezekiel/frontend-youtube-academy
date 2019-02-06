import React, { Component } from "react";
import { connect } from "react-redux";

import fetchOutlineNote from "../utils/fetchOutlineNote";
import CreateOutlineNoteForm from "../presentational/CreateOutlineNoteForm";

// title: event.target.notebookTitle.value,

class CreateOutlineNoteContainer extends Component {
  submitOutlineNote = (event, user) => {
    event.preventDefault();
    let outlineNote = {
      outline: null,
      notebook: null,
      user: this.props.user
    };
    fetchOutlineNote(outlineNote);
  };

  render() {
    return (
      <CreateOutlineNoteForm
        submitOutlineNote={this.submitOutlineNote}
        user={this.props.user}
      />
    );
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(CreateOutlineNoteContainer)
