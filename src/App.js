import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import NavBar from "./NavBar";

import RootContainer from "./container/RootContainer";
import GoogleAuthContainer from "./container/GoogleAuthContainer";
import SearchContainer from "./container/SearchContainer";
import Profile from "./container/Profile";
import UserOutlineContainer from "./container/UserOutlineContainer";
import UserNotebookContainer from "./container/UserNotebookContainer";

import CreateNotebookForm from "./forms/CreateNotebookForm";
import CreateOutlineNoteForm from "./forms/CreateOutlineNoteForm";

const App = props => {
  return (
    <Container>
      <NavBar />
      <Switch>
        <Route exact path="/logout" component={GoogleAuthContainer} />
        <Route exact path="/search" component={SearchContainer} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/notebooks/create" component={CreateNotebookForm} />
        <Route exact path="/outlines/outlinenote/create/:id" component={CreateOutlineNoteForm} />
        <Route exact path="/outlines/:id" component={UserOutlineContainer} />
        <Route exact path="/notebooks/:id" component={UserNotebookContainer} />
        <Route exact path="/" component={RootContainer} />
      </Switch>
    </Container>
  );
};

export default App;
