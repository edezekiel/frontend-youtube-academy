import React, { Component } from "react";
import { connect } from "react-redux";

import { displayNotebook } from "../redux/actions";
import Notebook from "../presentational/Notebook";
import fetchShowNotebook from "../utils/fetchShowNotebook";

class NotebookContainer extends Component {
  componentDidMount() {
    fetchShowNotebook(
      this.findNotebook(this.props.notebooks, this.props.match.params.id)[0].id
    ).then(notebook => displayNotebook(notebook));
  }

  findNotebook = (notebooks, notebookId) => {
    return notebooks.filter(notebook => {
      return notebook.id === parseInt(notebookId);
    });
  };

  render() {
    return (
      <div>
        {this.props.notebook ? (
          <Notebook notebook={this.props.notebook} />
        ) : null}
      </div>
    );
  }
}

let mapStateToProps = ({ user, notebooks, notebook }) => {
  return { user, notebooks, notebook };
};
export default connect(mapStateToProps)(NotebookContainer);
