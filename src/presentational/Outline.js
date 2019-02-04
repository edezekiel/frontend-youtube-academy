import React from 'react'
import {connect} from 'react-redux'
import YouTubePlayer from 'react-player/lib/players/YouTube'

import { Segment, Grid, Header } from 'semantic-ui-react'

const Outline = (props) => {
  return(
    <Segment>
        <Grid columns={2}>
          <Grid.Column>
              <YouTubePlayer
                width="400px"
                url={`https://www.youtube.com/watch?v=${props.video}`}
                controls
              />
          </Grid.Column>

          <Grid.Column>
            <Header>Video notes:</Header>
            <p>{props.notes}</p>
          </Grid.Column>
        </Grid>
    </Segment>
  )
}

let mapStateToProps = ({user, search}) => {
  return {user, search}
}

export default connect(mapStateToProps)(Outline)
