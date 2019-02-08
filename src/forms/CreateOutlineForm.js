import React, { Component } from "react";
import { connect } from 'react-redux'

import Video from "../presentational/Video";
import { withRouter } from 'react-router'
import RAILS_API from '../services/Backend'

import { addUserOutline } from '../redux/actions'
import { Button, Form, Segment, Header } from "semantic-ui-react";

class CreateOutlineForm extends Component {
  submitOutline = (event) => {
    event.preventDefault()

    let createOutline = {
      email: JSON.parse(localStorage.getItem('user')).email,
      id_token: JSON.parse(localStorage.getItem('user')).id_token,
      videoId: `https://www.youtube.com/watch?v=${this.props.video.videoId}`,
      videoTitle: this.props.video.videoTitle,
      notes: event.target.videoNotes.value,
    }

    fetch(`${RAILS_API}/outlines`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createOutline)
    })
    .then(res => res.json())
    .then(outline => {
      this.props.dispatch(addUserOutline(outline))
      this.props.history.push(`/outlines/${outline.id}`)
    })
  }

  render() {
    return (
      <Segment>
        <Header>{this.props.video.videoTitle}</Header>
        <Form
          onSubmit={e =>this.submitOutline(e)}
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
