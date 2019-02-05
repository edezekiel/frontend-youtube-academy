import React from "react";

import Video from "./Video";

import { Button, Form, Segment, Header } from "semantic-ui-react";

const CreateOutlineForm = props => {
  return (
    <Segment>
      <Header>{props.videoTitle}</Header>
      <Form
        onSubmit={event =>
          props.submitOutline(
            event,
            props.videoId,
            props.videoTitle,
            props.user
          )
        }
      >
        <Form.Field>
          <Video videoId={props.videoId} />
        </Form.Field>

        <Form.Field
          label="Your Notes"
          name="videoNotes"
          control="textarea"
          placeholder="Take notes on your favorite videos."
        />

        <Button inverted color="red" type="submit">
          Save Notes
        </Button>
      </Form>
    </Segment>
  );
};

export default CreateOutlineForm;
