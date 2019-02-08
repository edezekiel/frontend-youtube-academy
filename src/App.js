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

import CreateNotebookForm from "./forms/CreateNotebookForm";
import CreateOutlineNoteForm from "./forms/CreateOutlineNoteForm";


//------------------BRAINSTORMING------------------//

// <Route exact path="/login" component={GoogleAuthContainer} />
// <Route exact path="/logout" component={GoogleAuthContainer} />

// <Route exact path="/search" component={SearchContainer} />

// <Route exact path="/search/{search_term}" component={SearchContainer} />


  // <Route exact path="/outlines" component={__Outlines__} />
    // <Route exact path="/outlines/outlinenote/create/:id" component={CreateOutline} />


// <Route exact path="/profile" component={Profile} />

  // <Route exact path="/outlines" component={__Outlines__} />
    // <Route exact path="/outlines/:id" component={Outline} />
    // <Route exact path="/outlines/outlinenote/create/:id" component={CreateOutline} />

  // <Route exact path="/notebooks" component={__Notebooks__} />
    // <Route exact path="/notebooks/:id" component={Notebook} />
    // <Route exact path="/notebooks/create" component={CreateNotebook} />



//------------------ORIGINAL------------------//
// <Route exact path="/logout" component={GoogleAuthContainer} />
// <Route exact path="/search" component={SearchContainer} />
// <Route exact path="/profile" component={Profile} />
// <Route exact path="/notebooks/create" component={CreateNotebookForm} />
// <Route exact path="/outlines/outlinenote/create/:id" component={CreateOutlineNoteForm} />
// <Route exact path="/outlines/:id" component={UserOutlineContainer} />
// <Route exact path="/notebooks/:id" component={UserNotebookContainer} />

class App extends Component {
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
          <Route exact path="/OAuth" component={GoogleAuthContainer} />

        </Switch>
      </Container>
    );
  }
};

let mapStateToProps = ({ user }, ownProps) => {
  return { user };
};

export default withRouter(connect(mapStateToProps)(App));
