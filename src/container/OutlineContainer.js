import React, { Component } from "react";
import { connect } from "react-redux";

import { Segment, Grid, Header, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Video from "../presentational/Video";

class OutlineContainer extends Component {
  // state = {
  //   outline: null
  // }
  //
  // componentDidMount(){
  //   this.setState({outline: this.findOutline(this.props.outlines)[0]})
  // }
  //
  // findOutline = (outlines) => {
  //   return outlines.filter(outline => {
  //     return outline.id === parseInt(this.props.match.params.id);
  //   });
  // };

  render() {
    return (
      <Container>
        {this.state.outline ?
          <Container>
          <Segment>
            <Header>Outline: {this.state.outline.videoTitle}</Header>
            <Link to={"/outlines/outlinenote/create/" + this.state.outline.id}>
              <Button inverted color="red">
                Add Outline To Notebook
              </Button>
            </Link>
          </Segment>
          <Segment>
            <Segment basic>
              <Video videoId={this.state.outline.videoId} />
            </Segment>
            <Segment basic>
              <Header>Your Notes:</Header>
              {this.state.outline.notes}
            </Segment>
          </Segment>
          </Container>
        : null
        }
      </Container>
    )
  }
}

let mapStateToProps = ({ user }) => {
  return { user };
};
export default connect(mapStateToProps)(OutlineContainer);
