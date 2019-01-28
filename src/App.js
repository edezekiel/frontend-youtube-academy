import React, { Component } from 'react';

const URL = "http://localhost:3000/api/v1/users"

class App extends Component {

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(console.log)
  }

  render() {

    return (
      <div>
        <p>Log in with Google</p>
        <button id="authorize-button">Log In</button>
        <button id="signout-button">Log Out</button>
      </div>
    );
  }
}

export default App;
