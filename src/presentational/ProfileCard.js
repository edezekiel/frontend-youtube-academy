import React from 'react'

import { Segment, Header, Image } from 'semantic-ui-react'

const ProfileCard = (props) => {

  return(
    <Segment>
      <Header>Welcome {JSON.parse(localStorage.user).w3.ig}!</Header>
      <Image src={JSON.parse(localStorage.user).w3.Paa} />
    </Segment>
  )
}

export default ProfileCard
