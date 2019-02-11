import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";

import NavBar from "./NavBar";

import GoogleAuthContainer from "./container/GoogleAuthContainer";
import SearchContainer from "./container/SearchContainer";
import Profile from "./container/Profile";
import UserOutlineContainer from "./container/UserOutlineContainer";
import UserNotebookContainer from "./container/UserNotebookContainer";
import Community from "./container/Community";
import CreateNotebookForm from "./forms/CreateNotebookForm";
import CreateOutlineNoteForm from "./forms/CreateOutlineNoteForm";


class App extends Component {
  componentDidMount(){
    window.onbeforeunload = () => localStorage.clear()
  }

  render(){
    return (
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/" render={props =>
            this.props.user ?
              <SearchContainer />
              : <Redirect to='/OAuth'/>
          }/>
          {this.props.user ?
            <Switch>
              <Route exact path="/OAuth" component={GoogleAuthContainer} />
              <Route exact path="/logout" component={GoogleAuthContainer} />
              <Route exact path="/search" component={SearchContainer} />
              <Route exact path="/community" component={Community} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/notebooks/create" component={CreateNotebookForm} />
              <Route exact path="/outlines/outlinenote/create/:id" component={CreateOutlineNoteForm} />
              <Route exact path="/outlines/:id" component={UserOutlineContainer} />
              <Route exact path="/notebooks/:id" component={UserNotebookContainer} />
          </Switch>
          : <GoogleAuthContainer />}
        </Switch>
      </Container>
    );
  }
};

let mapStateToProps = ({ user }, ownProps) => {
  return { user };
};

export default withRouter(connect(mapStateToProps)(App));
