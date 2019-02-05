import React from "react";

import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

const OutlineLink = props => {
  return (
    <List.Item>
      <Link to={"/outlines/" + props.outline.id}>
        <List.Header style={{ color: "rgba(255, 94, 84)" }}>
          {props.outline.videoTitle}
        </List.Header>
      </Link>
    </List.Item>
  );
};

export default OutlineLink;
