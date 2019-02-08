import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, List } from "semantic-ui-react";

import OutlineLink from "../presentational/OutlineLink";

class UserOutlinesContainer extends Component {
  render() {
    return (
      <Container>
        <List divided animated relaxed verticalAlign="middle">
          {this.props.user.outlines.map(outline => (
            <OutlineLink key={outline.id} outline={outline} />
          ))}
        </List>
      </Container>
    );
  }
}

let mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(UserOutlinesContainer);
