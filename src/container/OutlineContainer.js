import React, { Component } from "react";
import { connect } from "react-redux";

import Outline from "../presentational/Outline";

class OutlineContainer extends Component {
  findOutline = props => {
    return props.outlines.filter(outline => {
      return outline.id === parseInt(props.match.params.id);
    });
  };

  render() {
    return <Outline outline={this.findOutline(this.props)} />;
  }
}

let mapStateToProps = ({ outlines }) => {
  return { outlines };
};
export default connect(mapStateToProps)(OutlineContainer);
