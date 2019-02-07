import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import NavBar from "./NavBar";

import RootContainer from "./container/RootContainer";
import GoogleAuthContainer from "./container/GoogleAuthContainer";
import SearchContainer from "./container/SearchContainer";
import Profile from "./container/Profile";
import OutlineContainer from "./container/OutlineContainer";
import NotebookContainer from "./container/NotebookContainer";

import CreateNotebookForm from "./forms/CreateNotebookForm";
import CreateOutlineNoteForm from "./forms/CreateOutlineNoteForm";

const AppRouter = props => {
  return (
    <Container>
      <NavBar />
      <Switch>
        <Route exact path="/logout" component={GoogleAuthContainer} />
        <Route exact path="/search" component={SearchContainer} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/notebooks/create" component={CreateNotebookForm} />
        <Route exact path="/outlines/outlinenote/create/:id" component={CreateOutlineNoteForm} />
        <Route exact path="/outlines/:id" component={OutlineContainer} />
        <Route exact path="/notebooks/:id" component={NotebookContainer} />
        <Route exact path="/" component={RootContainer} />
      </Switch>
    </Container>
  );
};

export default AppRouter;
