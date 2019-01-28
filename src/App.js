import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

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
    console.log(response)
  };

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(console.log)
  }

  render() {

    return (
      <div>
      <GoogleLogin
        clientId="369548765069-6sev6oe4a6ala4ihahsbhkugiissvkvb.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        />
      <GoogleLogout
        button="Logout"
        onLogoutSuccess={this.logout}
      >
      </GoogleLogout>
      </div>
    );
  }
}

export default App;
