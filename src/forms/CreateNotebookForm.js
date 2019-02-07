import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Segment, Header } from "semantic-ui-react";

import fetchCreateNotebook from "../utils/fetchCreateNotebook";

class CreateNotebookForm extends Component {
  submitNotebook = (event, user) => {
    event.preventDefault();
    let notebook = {
      title: event.target.notebookTitle.value,
    };
    fetchCreateNotebook(notebook, user);
  };

  render() {
    return (
      <Segment>
        <Header>Create Notebook:</Header>
        <Form onSubmit={event => this.submitNotebook(event, this.props.user)}>
          <Form.Field name="notebookTitle" label="Title" control="input" />

          <Button inverted color="red" type="submit">
            Create Notebook
          </Button>
        </Form>
      </Segment>
    );
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(CreateNotebookForm)
