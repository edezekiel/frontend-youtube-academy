import React, { Component } from "react";
import { connect } from "react-redux";

import Profile from '../presentational/Profile'

import { addUserOutline } from "../actions/addUserOutline";
import { addUserNotebook } from "../actions/addUserNotebook";
import { clearOutlines } from "../actions/clearOutlines";
import { clearNotebooks } from "../actions/clearNotebooks";

import fetchUserOutlines from "../utils/fetchUserOutlines";
import fetchUserNotebooks from "../utils/fetchUserNotebooks";

class ProfileContainer extends Component {
  componentDidMount() {
    this.dispatchUserOutlines(this.props);
    this.dispatchUserNotebooks(this.props);
  }

  dispatchUserOutlines = props => {
    props.dispatch(clearOutlines());
    fetchUserOutlines(props.user).then(response => {
      response.map(outline => {
        props.dispatch(addUserOutline(outline));
        return outline;
      });
    });
  };

  dispatchUserNotebooks = props => {
    props.dispatch(clearNotebooks());
    fetchUserNotebooks(props.user).then(response => {
      response.map(notebook => {
        props.dispatch(addUserNotebook(notebook));
        return notebook;
      });
    });
  };

  render() {
    return (
      <Profile outlines={this.props.outlines} notebooks={this.props.notebooks} />
    );
  }
}

let mapStateToProps = ({ user, outlines, notebooks }) => {
  return { user, outlines, notebooks };
};

export default connect(mapStateToProps)(ProfileContainer);
