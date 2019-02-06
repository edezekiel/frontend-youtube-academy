import React, { Component } from "react";
import { connect } from "react-redux";

import { showNotebook, clearNotebooks } from "../redux/actions";
import Notebook from "../presentational/Notebook";
import fetchShowNotebook from "../utils/fetchShowNotebook";

class NotebookContainer extends Component {
  componentDidMount() {
    this.renderNotebook()
  }

  renderNotebook = (props) => {
    this.props.dispatch(clearNotebooks())
    fetchShowNotebook(parseInt(this.props.match.params.id))
    .then(notebook => this.props.dispatch(showNotebook(notebook)));
  }

  render() {
    return (
      <div>
        {this.props.notebooks.length === 1 ?
          <Notebook notebook={this.props.notebooks} />
        : null}
      </div>
    );
  }
}

let mapStateToProps = ({ notebooks }) => {
  return { notebooks };
};
export default connect(mapStateToProps)(NotebookContainer);
