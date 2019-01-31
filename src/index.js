import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import Root from './Root';
import store from './store'

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
