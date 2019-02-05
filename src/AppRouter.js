import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import NavBar from "./presentational/NavBar";
import RootContainer from "./container/RootContainer";
import GoogleAuthContainer from "./container/GoogleAuthContainer";
import SearchContainer from "./container/SearchContainer";
import OutlineContainer from "./container/OutlineContainer";
import NotebookContainer from "./container/NotebookContainer";
import CreateNotebookContainer from "./container/CreateNotebookContainer";

const AppRouter = props => {
  return (
    <Container>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/createNotebook"
          component={CreateNotebookContainer}
        />
        <Route exact path="/logout" component={GoogleAuthContainer} />
        <Route exact path="/search" component={SearchContainer} />
        <Route exact path="/outlines/:id" component={OutlineContainer} />
        <Route exact path="/notebooks/:id" component={NotebookContainer} />
        <Route exact path="/" component={RootContainer} />
      </Switch>
    </Container>
  );
};

export default AppRouter;
