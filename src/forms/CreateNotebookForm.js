import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Button, Form, Segment, Header } from "semantic-ui-react";
import RAILS_API from "../services/Backend";

class CreateNotebookForm extends Component {
  submitNotebook = (event) => {

    let createNote = {
      email: JSON.parse(localStorage.getItem('user')).email,
      title: event.target.notebookTitle.value,
      id_token: JSON.parse(localStorage.getItem('user')).id_token
    }

    event.preventDefault();
    fetch(`${RAILS_API}/notebooks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(createNote)
      })
    .then(res => res.json());
    //then push?
  };

  render() {
    return (
      <Container>
        {this.props.user ?
          <Segment>
            <Header>Create Notebook:</Header>
            <Form onSubmit={e => this.submitNotebook(e)}>
              <Form.Field name="notebookTitle" label="Title" control="input" />

              <Button inverted color="red" type="submit">
                Create Notebook
              </Button>
            </Form>
          </Segment>
          : null
        }
      </Container>
    );
  }
}

let mapStateToProps = ({user}) => {
  return {user}
}

export default connect(mapStateToProps)(CreateNotebookForm)
