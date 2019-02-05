import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Form, Segment, Header } from "semantic-ui-react";
import fetchNotebook from "../utils/fetchNotebook";

class CreateNotebookContainer extends Component {
  //---------------------SAVE_NOTEBOOK---------------------//

  submitNotebook = (event, title, outlines, user) => {
    event.preventDefault();
    let notebook = {
      title: title,
      outlines: []
    };
    fetchNotebook(notebook, user);
  };

  render() {
    return (
      <Segment>
        <Header>{this.props.title}</Header>
        <Form
          onSubmit={event =>
            this.props.submitNotebook(
              event,
              this.props.title,
              this.props.outlines,
              this.props.user
            )
          }
        >
          <Form.Field>
            <label>Title</label>
            <input />
          </Form.Field>

          <Button inverted color="red" type="submit">
            Create Notebook
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default CreateNotebookContainer;
