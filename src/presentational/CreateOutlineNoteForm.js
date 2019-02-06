import React, { Component } from "react";

import Video from "./Video";

import { Button, Form, Segment, Header, Radio } from "semantic-ui-react";

class CreateOutlineNoteForm extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Segment>
        <Header>{this.props.videoTitle}</Header>
        <Form
          onSubmit={event => this.props.submitOutlineNote(event,
            this.state,
            this.props.user,
            this.props.outline
          )}>

          <Header>Notebooks:</Header>
          {this.props.notebooks.map(notebook => {
            return (
              <Form.Field>
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
};

export default CreateOutlineNoteForm;
