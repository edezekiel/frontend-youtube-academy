import React from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'

import App from './App';
import Login from './presentational/Login'
import Search from './presentational/Search'

import ProfileContainer from './container/ProfileContainer'

const AppRouter = (props) => {
  return(
    <Switch>
      <Route exact path='/login'component={Login}/>
      <Route exact path='/search'component={Search}/>
      <Route exact path='/' component={ProfileContainer} />
    </Switch>
  )
}

export default AppRouter
