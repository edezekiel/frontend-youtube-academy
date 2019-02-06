import React, { Component } from "react";
import { connect } from "react-redux";

import Profile from '../presentational/Profile'

import { addUserNotebook, clearOutlines, clearNotebooks } from '../redux/actions';
import dispatchUserOutlines from '../utils/dispatchUserOutlines';

import fetchUserNotebooks from "../utils/fetchUserNotebooks";

class ProfileContainer extends Component {
  componentDidMount() {
    dispatchUserOutlines(this.props);
    this.dispatchUserNotebooks(this.props);
  }

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
