import React, { Component } from "react";
import { connect } from "react-redux";

import fetchOutlineNote from "../utils/fetchOutlineNote";
import CreateOutlineNoteForm from "../presentational/CreateOutlineNoteForm";

class CreateOutlineNoteContainer extends Component {
  findOutline = props => {
    return props.outlines.filter(outline => {
      return outline.id === parseInt(props.match.params.id);
    });
  };

  submitOutlineNote = (event, selectedNotebook, user, outline) => {
    event.preventDefault();
    let outlineNote = {
      outline: outline.id,
      notebook: selectedNotebook.value,
      user: user
    };
    fetchOutlineNote(outlineNote);
  };

  render() {
    return (
      <CreateOutlineNoteForm
        submitOutlineNote={this.submitOutlineNote}
        user={this.props.user}
        notebooks={this.props.notebooks}
        outline={this.findOutline(this.props)[0]}
      />
    );
  }
}

let mapStateToProps = ({user, outlines, notebooks}) => {
  return {user, outlines, notebooks}
}

export default connect(mapStateToProps)(CreateOutlineNoteContainer)
