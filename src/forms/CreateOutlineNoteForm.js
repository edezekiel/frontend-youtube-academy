import React, { Component } from "react";
import { connect } from "react-redux";

import { addOutlineNote } from '../redux/actions'
import { Button, Form, Segment, Header, Radio } from "semantic-ui-react";
import RAILS_API from '../services/Backend'

class CreateOutlineNoteForm extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  submitOutlineNote = (event, selectedNotebook) => {
    event.preventDefault();
    let createOutlineNote = {
      email: JSON.parse(localStorage.getItem('user')).email,
      id_token: JSON.parse(localStorage.getItem('user')).id_token,
      outline: this.props.outline.id,
      notebook: selectedNotebook.value,
    };

    fetch(`${RAILS_API}/outline_notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(createOutlineNote)
      })
    .then(res => res.json())
    .then(response => {
      //TODO: address hard-refresh - need to put switch inside container or re-fetch

      this.props.dispatch(addOutlineNote(response))
      // this.props.history.push(`/notebooks/${response.outlineNote.notebook.id}`)
    })
  };

  render() {
    return (
      <Segment>
        <Header>{this.props.outline.videoTitle}</Header>
        <Form
          onSubmit={event => this.submitOutlineNote(event, this.state)}>

          <Header>Notebooks:</Header>
          {this.props.user.notebooks.map((notebook) => {
            return (
              <Form.Field key={notebook.id}>
                <Radio
                  label={notebook.title}
                  name="radioGroup"
                  value={notebook.id}
                  checked={this.state.value === notebook.id}
                  onChange={this.handleChange}
                />
              </Form.Field>
            )
          })}

          <Button inverted color="red" type="submit">
            Save Outline To Notebook
          </Button>

        </Form>
      </Segment>
    );
  }
}

let mapStateToProps = ({ user }, ownProps) => {
  let outline = user.outlines.find(x => x.id === parseInt(ownProps.match.params.id))
  return {user, outline }
}

export default connect(mapStateToProps)(CreateOutlineNoteForm)
