import React from 'react'
import {connect} from 'react-redux'

import Video from './Video'

import { Segment, Header } from 'semantic-ui-react'

const Outline = (props) => {
  console.log(props.outline)
  return(
    <Segment>
      <Header>{props.outline[0].videoTitle}</Header>
      {props.outline[0].notes}
      <Video videoId={props.outline[0].videoId} />
    </Segment>
  )
}

let mapStateToProps = ({user, search}) => {
  return {user, search}
}

export default connect(mapStateToProps)(Outline)
