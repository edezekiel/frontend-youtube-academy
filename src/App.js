import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

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
