import React from 'react'
import {connect} from 'react-redux'
import YouTubePlayer from 'react-player/lib/players/YouTube'

import { Segment } from 'semantic-ui-react'

const Outline = (props) => {
  return(
    <Segment>
      <YouTubePlayer
        url={`https://www.youtube.com/watch?v=${props.video}`}
        height='390px'
        width='640px'
        controls
        host="https://www.youtube.com"
      />
      <p>{props.notes}</p>
    </Segment>
  )
}

let mapStateToProps = ({user, search}) => {
  return {user, search}
}

export default connect(mapStateToProps)(Outline)
