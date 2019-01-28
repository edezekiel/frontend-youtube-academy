import React, { Component } from 'react';

const URL = "https://localhost/3000"

class App extends Component {

  connectBackend = () => {
      fetch(URL)
      .then(res => res.json())
      .then(console.log)
  }

  render() {
    return (
      <div>Hello World {this.connectBackend()}</div>

    );
  }
}

export default App;
