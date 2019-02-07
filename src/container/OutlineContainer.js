import React, { Component } from "react";
import { connect } from "react-redux";

import { Segment, Grid, Header, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Video from "../presentational/Video";

class OutlineContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <Container>
        {this.props.outline ?
          <Container>
          <Segment>
            <Header>Outline: {this.props.outline.videoTitle}</Header>
            <Link to={"/outlines/outlinenote/create/" + this.props.outline.id}>
              <Button inverted color="red">
                Add Outline To Notebook
              </Button>
            </Link>
          </Segment>
          <Segment>
            <Segment basic>
              <Video videoId={this.props.outline.videoId} />
            </Segment>
            <Segment basic>
              <Header>Your Notes:</Header>
              {this.props.outline.notes}
            </Segment>
          </Segment>
          </Container>
        : null
        }
      </Container>
    )
  }
}

let mapStateToProps = ({ user }, ownProps) => {
  let outline = user.outlines.find(x => x.id === parseInt(ownProps.match.params.id))
  return { user, outline };
};

export default connect(mapStateToProps)(OutlineContainer);
