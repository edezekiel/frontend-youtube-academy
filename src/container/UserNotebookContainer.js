import React, { Component } from "react";
import { connect } from "react-redux";

import { Segment, Header, Container } from "semantic-ui-react";
import OutlineLink from '../presentational/OutlineLink'

class UserNotebookContainer extends Component {
  render() {
    console.log(this.props.notebook.outlines)
    return (
      <Container>
          <Container>
            <Segment>
              <Header>Notebook: {this.props.notebook.title}</Header>
            </Segment>
            <Segment>
              <Header>Outlines:</Header>
                {this.props.notebook.outlines.map(outline =>
                  <OutlineLink outline={outline}/>
                )}
            </Segment>
          </Container>
      </Container>
    );
  }
}

let mapStateToProps = ({ user }, ownProps) => {
  let notebook = user.notebooks.find(x => x.id === parseInt(ownProps.match.params.id))
  return { user, notebook};
};

export default connect(mapStateToProps)(UserNotebookContainer);
