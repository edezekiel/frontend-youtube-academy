import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import store from './store'
import AppRouter from './AppRouter'

class App extends Component {
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
