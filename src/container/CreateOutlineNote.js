import React, { Component } from "react";
import { connect } from "react-redux";

import fetchOutlineNote from "../utils/fetchOutlineNote";
import { Button, Form, Segment, Header, Radio } from "semantic-ui-react";

class CreateOutlineNoteContainer extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  findOutline = props => {
    return props.outlines.filter(outline => {
      return outline.id === parseInt(props.match.params.id);
    });
  };

  submitOutlineNote = (event, selectedNotebook, user, outline) => {
    event.preventDefault();
    let outlineNote = {
      outline: outline.id,
      notebook: selectedNotebook.value,
      user: user
    };
    fetchOutlineNote(outlineNote)
    .then(response => console.log(response))
//this.props.history.push(`/notebooks/${response.notebook.id}`)
  };

  render() {
    return (

      <Segment>
        <Header>{this.props.videoTitle}</Header>
        <Form
          onSubmit={event => this.submitOutlineNote(event,
            this.state,
            this.props.user,
            this.findOutline(this.props.outline)[0]
          )}>

          <Header>Notebooks:</Header>
          {this.props.notebooks.map((notebook, i) => {
            return (
              <Form.Field key={i}>
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

let mapStateToProps = ({user, outlines, notebooks}) => {
  return {user, outlines, notebooks}
}

export default connect(mapStateToProps)(CreateOutlineNoteContainer)
