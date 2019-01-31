import React from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import NavBar from './presentational/NavBar'
import Login from './presentational/Login'
import SearchContainer from './container/SearchContainer'
import ProfileContainer from './container/ProfileContainer'

const AppRouter = (props) => {
  return(

    <Container>
      <NavBar />
      <Switch>
        <Route exact path='/login'component={Login}/>
        <Route exact path='/' component={SearchContainer} />
      </Switch>
    </Container>
  )
}

export default AppRouter
