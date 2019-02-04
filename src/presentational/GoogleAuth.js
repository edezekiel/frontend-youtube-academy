import React from 'react'

import { Segment, Container, Button, Image, Card } from 'semantic-ui-react'
import googleLogo from '../assets/google.png'

const GoogleAuth = (props) => {

  return(
    <Segment basic>
      <Container textAlign="center">
        <Card centered>
          <Image src={googleLogo} />
          <Card.Content>
            <Button onClick={props.authHandler} as='a' inverted color='red'>
              {props.message}
            </Button>
          </Card.Content>
        </Card>
      </Container>
    </Segment>
  )
}

export default GoogleAuth
