import React from 'react'

import YouTubePlayer from 'react-player/lib/players/YouTube'

import { Button, Form, Segment, Grid } from 'semantic-ui-react'

const SearchResult = (props) => {
  return(
    <Segment>
      <Grid columns={2}>
        <Grid.Column>
          <YouTubePlayer
            width="400px"
            url={`https://www.youtube.com/watch?v=${props.result}`}
            controls
          />
        </Grid.Column>

        <Grid.Column>
          <Form>
            <Form.Field
              label="Your Notes"
              control="textarea"
              rows='15'
              name='videoNotes'
              placeholder="Take notes on your favorite videos."
            />
            <Button>Record Notes</Button>
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default SearchResult
