import React, { Component } from 'react';
import { connect } from 'react-redux'

import GoogleLogin from './container/GoogleLogin'
import NavBarContainer from './container/NavBarContainer'
import ProfileContainer from './container/ProfileContainer'
import checkLoggedIn from './checkLoggedIn'

class App extends Component {

  render() {
    checkLoggedIn(this.props)
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
