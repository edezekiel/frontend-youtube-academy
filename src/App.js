import React, { Component } from 'react';
import GoogleLogin from './components/GoogleLogin'
import Profile from './components/Profile'
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
