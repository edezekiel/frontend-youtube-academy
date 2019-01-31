import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";

import checkLoggedIn from './checkLoggedIn'
import App from './App';

class Root extends Component {
  componentDidMount(){
    checkLoggedIn(this.props.store)
  }

  render(){
    return(
      <Provider store={this.props.store}>
        <BrowserRouter>
          <Route path='/' component={App} />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Root
