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
      <div>Hello World </div>
    );
  }
}

export default App;
