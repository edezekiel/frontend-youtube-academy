import React from 'react'
import {connect} from 'react-redux'

import Video from './Video'

import { Segment, Container, Header } from 'semantic-ui-react'

const Outline = (props) => {
  return(
    <Segment>
      <Header>{props.videoTitle}</Header>
      {props.notes}
      <Video videoId={props.videoId} />
    </Segment>
  )
}

let mapStateToProps = ({user, search}) => {
  return {user, search}
}

export default connect(mapStateToProps)(Outline)
