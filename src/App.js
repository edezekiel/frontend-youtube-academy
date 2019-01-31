import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import GoogleLogin from './container/GoogleLogin'
import NavBar from './presentational/NavBar'
import ProfileContainer from './container/ProfileContainer'

class App extends Component {

  render() {
    return (
      <Container>
        <NavBar />
        <GoogleLogin />
      </Container>
    );
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(App);
