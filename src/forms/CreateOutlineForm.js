import React, { Component } from "react";
import { connect } from 'react-redux'

import Video from "../presentational/Video";
import { withRouter } from 'react-router'

import fetchCreateOutline from '../utils/fetchCreateOutline'
import { addUserOutline } from '../redux/actions'
import { Button, Form, Segment, Header } from "semantic-ui-react";

class CreateOutlineForm extends Component {
  submitOutline = (event, videoId, videoTitle) => {
    event.preventDefault()
    let outline = {
      videoId: `https://www.youtube.com/watch?v=${videoId}`,
      videoTitle: videoTitle,
      notes: event.target.videoNotes.value,
    }
    fetchCreateOutline(outline, this.props.user.email)
    .then(response => {

      //TODO: address hard-refresh - need to put switch inside container or re-fetch
        this.props.dispatch(addUserOutline(response))

        // this.props.history.push(`/outlines/${response.outline.id}`)
    })
  }

  render() {
    return (
      <Segment>
        <Header>{this.props.video.videoTitle}</Header>
        <Form
          onSubmit={event =>
            this.submitOutline(
              event,
              this.props.video.videoId,
              this.props.video.videoTitle,
            )
          }
        >
          <Form.Field>
            <Video videoId={this.props.video.videoId} />
          </Form.Field>

          <Form.Field
            label="Your Notes"
            name="videoNotes"
            control="textarea"
            placeholder="Take notes on your favorite videos."
          />

          <Button inverted color="red" type="submit">
            Save Video Outline
          </Button>
        </Form>
      </Segment>
    );
  }
};

let mapStateToProps = ({user}) => {
  return {user}
}

export default withRouter(connect(mapStateToProps)(CreateOutlineForm))
