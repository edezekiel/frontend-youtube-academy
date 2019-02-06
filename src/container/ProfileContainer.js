import React, { Component } from "react";
import { connect } from "react-redux";

import { Container, Header, List, Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { addUserOutline } from "../actions/addUserOutline";
import { addUserNotebook } from "../actions/addUserNotebook";
import { clearOutlines } from "../actions/clearOutlines";
import { clearNotebooks } from "../actions/clearNotebooks";

import fetchUserOutlines from "../utils/fetchUserOutlines";
import fetchUserNotebooks from "../utils/fetchUserNotebooks";

import Outlines from '../presentational/Outlines'
import Notebooks from '../presentational/Notebooks'
import ProfileCard from "../presentational/ProfileCard";

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
      <Container>
        <ProfileCard />
        <Grid columns={2}>
          <Grid.Column>
            {this.props.outlines ?
              <Outlines outlines={this.props.outlines} />
              : null
            }
          </Grid.Column>

          <Grid.Column>
            {this.props.notebooks ? (
              <Notebooks notebooks={this.props.notebooks} />
            ) : null}
            <Link to="/notebooks/create">
              <Button as="a" inverted color="red">
                Create Notebook
              </Button>
            </Link>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

let mapStateToProps = ({ user, outlines, notebooks }) => {
  return { user, outlines, notebooks };
};

export default connect(mapStateToProps)(ProfileContainer);
