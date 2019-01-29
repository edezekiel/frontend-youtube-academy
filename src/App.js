import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const URL = "http://localhost:3000/api/v1/users"

class App extends Component {

  responseGoogle = (response) => {
    response.error ? console.log("there was an error:", response.error) : console.log("successfully logged in", response)
  }

  logout = () => {
    console.log('logout')
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(console.log)
  }

  render() {

    return (
      <div>
        <GoogleLogin
        clientId="369548765069-mof01apa10i4vj53dk7g327j8oh91te7.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        />
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={this.logout}
        >
        </GoogleLogout>
      </div>
    );
  }
}

export default App;
