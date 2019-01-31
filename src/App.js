import React, { Component } from 'react';
import { connect } from 'react-redux'

import GoogleLogin from './container/GoogleLogin'
import NavBarContainer from './container/NavBarContainer'
import ProfileContainer from './container/ProfileContainer'

class App extends Component {

  render() {
    return (
      <div>
        <GoogleLogin />
        <NavBarContainer />
        <ProfileContainer />
      </div>
    );
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(App);
