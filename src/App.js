import React, { Component } from 'react';
import GoogleLogin from './container/GoogleLogin'
import ProfileContainer from './container/ProfileContainer'

class App extends Component {
  render() {
    return (
      <div>
        <GoogleLogin />
        <ProfileContainer />
      </div>
    );
  }
}

export default App;
