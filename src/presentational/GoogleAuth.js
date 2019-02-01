import React from 'react'

import { Segment, Container, Button, Header, Image, Card } from 'semantic-ui-react'

const GoogleAuth = (props) => {

  return(
    <Segment>
      <Container textAlign="center">
        <Button onClick={props.authHandler}>{props.message}</Button>
      </Container>
    </Segment>
  )
}

export default GoogleAuth
