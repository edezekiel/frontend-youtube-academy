import React, { Component } from "react";
import { connect } from "react-redux";

import fetchUserOutlines from "../utils/fetchUserOutlines";
import { addUserOutline } from '../redux/actions';

import Profile from '../presentational/Profile'

import { addUserNotebook } from '../redux/actions';

import fetchUserNotebooks from "../utils/fetchUserNotebooks";

class ProfileContainer extends Component {
  componentDidMount() {
    this.dispatchUserOutlines(this.props);
    this.dispatchUserNotebooks(this.props);
  }

  dispatchUserOutlines = props => {
    return fetchUserOutlines(props.user).then(response => {
      response.map(outline => {
        props.dispatch(addUserOutline(outline));
        return outline;
      });
    });
  };

  dispatchUserNotebooks = props => {
    fetchUserNotebooks(props.user).then(response => {
      response.map(notebook => {
        props.dispatch(addUserNotebook(notebook));
        return notebook;
      });
    });
  };

  render() {
    return (
      <Profile />
    );
  }
}

let mapStateToProps = ({ user, outlines, notebooks }) => {
  return { user, outlines, notebooks };
};

export default connect(mapStateToProps)(ProfileContainer);
