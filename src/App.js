import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import store from './store'
import NavBar from './presentational/NavBar'
import AppRouter from './AppRouter'
import checkLoggedIn from './checkLoggedIn'

class App extends Component {
  componentDidMount(){
    checkLoggedIn(store)
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Container>
            <NavBar />
            <AppRouter />
          </Container>
        </Provider>
      </BrowserRouter>
    );
  }
}


export default App;
