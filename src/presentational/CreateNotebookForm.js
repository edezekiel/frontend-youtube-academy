import React from "react";

import { Button, Form, Segment, Header } from "semantic-ui-react";

const CreateNotebookForm = props => {
  return (
    <Segment>
      <Header>Create Notebook:</Header>
      <Form onSubmit={event => props.submitNotebook(event, props.user)}>
        <Form.Field name="notebookTitle" label="Title" control="input" />

        <Button inverted color="red" type="submit">
          Create Notebook
        </Button>
      </Form>
    </Segment>
  );
};

export default CreateNotebookForm;
