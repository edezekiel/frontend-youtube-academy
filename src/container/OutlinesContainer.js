import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, List } from "semantic-ui-react";

import OutlineLink from "../presentational/OutlineLink";

class OutlinesContainer extends Component {

  render() {
    return(
      <Container>
        <List divided animated relaxed verticalAlign="middle">
          {this.props.outlines.map(outline => (
            <OutlineLink key={outline.id} outline={outline} />
          ))}
        </List>
      </Container>
    )
  }
}

let mapStateToProps = ({ outlines }) => {
  return { outlines };
};
export default connect(mapStateToProps)(OutlinesContainer);
