import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react'

import NavBar from './presentational/NavBar'
import RootContainer from './container/RootContainer'
import GoogleAuthContainer from './container/GoogleAuthContainer'
import SearchContainer from './container/SearchContainer'

const AppRouter = (props) => {
  return(
    <Container>
      <NavBar />
      <Switch>
        <Route exact path='/logout'component={GoogleAuthContainer}/>
        <Route exact path='/search'component={SearchContainer}/>
        <Route exact path='/'component={RootContainer}/>
      </Switch>
    </Container>
  )
}

export default AppRouter
