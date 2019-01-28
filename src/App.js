import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import ReactDOM from 'react-dom'
const URL = "http://localhost:3000/api/v1/users"


class App extends Component {

  state = {
    isAuthenticated: false,
    user: null,
    token: ''
  }

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null})
  }

  onFailure = (error) => { alert(error) }

  responseGoogle = (response) => {
      const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
      const options = {
          method: 'POST',
          body: tokenBlob,
          mode: 'cors',
          cache: 'default'
      };
      fetch('http://localhost:3000/api/v1/auth/google', options).then(r => {
          const token = r.headers.get('x-auth-token');
          r.json().then(user => {
              if (token) {
                  this.setState({isAuthenticated: true, user, token})
              }
          });
      })
  };

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(console.log)
  }

  render() {

    return (
      <GoogleLogin
        clientId="369548765069-c8i73drmbk5q2s47bumpkltp6ebjsljl.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.onFailure}
        />
    );
  }
}

export default App;
