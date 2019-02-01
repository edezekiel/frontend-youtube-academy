import React from 'react'

import { Segment, Container, Header, Card, Image } from 'semantic-ui-react'

const Profile = (props) => {

  return(
    <Segment>
    <Header>Welcome {JSON.parse(localStorage.user).w3.ig}!</Header>
    <Image src={JSON.parse(localStorage.user).w3.Paa} />

    </Segment>
  )
}

export default Profile
