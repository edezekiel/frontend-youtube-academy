import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from './store'
import AppRouter from './AppRouter'
import checkLoggedIn from './checkLoggedIn'

class App extends Component {
  componentDidMount(){
    checkLoggedIn(store)
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
            <AppRouter />
        </Provider>
      </BrowserRouter>
    );
  }
}


export default App;
