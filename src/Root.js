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
      <BrowserRouter>
        <Provider store={this.props.store}>
            <App />
        </Provider>
      </BrowserRouter>
    )
  }
}

export default Root
