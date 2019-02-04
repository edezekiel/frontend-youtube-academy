import React from 'react'

import YouTubePlayer from 'react-player/lib/players/YouTube'

import { Button, Form, Segment, Grid } from 'semantic-ui-react'

const SearchResult = (props) => {
  return(
    <Segment>
      <Form onSubmit={(e) => props.submitOutline(e, props.result)}>
        <Grid columns={2}>
          <Grid.Column>
            <Form.Field>
              <YouTubePlayer
                width="400px"
                url={`https://www.youtube.com/watch?v=${props.result}`}
                controls
              />
            </Form.Field>
          </Grid.Column>

          <Grid.Column>
            <Form.Field
              label="Your Notes"
              control="textarea"
              rows='15'
              name='videoNotes'
              placeholder="Take notes on your favorite videos."
            />
            <Button
              inverted
              color='red'
              type="submit">
              Save Notes
            </Button>
          </Grid.Column>
        </Grid>
      </Form>
    </Segment>
  )
}

export default SearchResult
