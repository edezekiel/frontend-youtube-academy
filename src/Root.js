import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import checkLoggedIn from './checkLoggedIn'
import App from './App'

class Root extends Component {
  componentDidMount(){
    checkLoggedIn(this.props.store)
  }

  render(){
    return(
      <Provider store={this.props.store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Root
