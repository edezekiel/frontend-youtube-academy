import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import NavBar from './presentational/NavBar'
import AppRouter from './AppRouter'

class App extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <AppRouter />
      </Container>
    );
  }
}


export default App;
