import React from 'react'

import { Segment, Header, Image } from 'semantic-ui-react'

const ProfileCard = (props) => {

  return(
    <Segment>
      <Image src={JSON.parse(localStorage.user).w3.Paa} />
      <Header>Welcome {JSON.parse(localStorage.user).w3.ig}!</Header>
    </Segment>
  )
}

export default ProfileCard
