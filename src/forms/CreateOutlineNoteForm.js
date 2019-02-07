import React, { Component } from "react";
import { connect } from "react-redux";

import fetchCreateOutlineNote from "../utils/fetchCreateOutlineNote";
import { createOutlineNote } from '../redux/actions'
import { Button, Form, Segment, Header, Radio } from "semantic-ui-react";

class CreateOutlineNoteForm extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  submitOutlineNote = (event, selectedNotebook) => {
    event.preventDefault();
    let outlineNote = {
      outline: this.props.outline.id,
      notebook: selectedNotebook.value,
    };
    fetchCreateOutlineNote(outlineNote, this.props.user.email)
    .then(user => {
      this.props.dispatch(createOutlineNote(user))
      localStorage.setItem('user', JSON.stringify(user))
      this.props.history.push("/")
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
