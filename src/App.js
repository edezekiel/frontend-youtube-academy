import React, { Component } from 'react';
import GoogleLogin from './container/GoogleLogin'
import Profile from './container/Profile'

class App extends Component {
  render() {
    return (
      <div>
        <Profile />
        <GoogleLogin />
      </div>
    );
  }
}

export default App;
