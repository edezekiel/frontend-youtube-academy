import React from "react";

import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

const NotebookLink = props => {
  return (
    <List.Item>
      <Link to={"/notebooks/" + props.notebook.id}>
        <List.Header style={{ color: "rgba(255, 94, 84)" }}>
          {props.notebook.title}
        </List.Header>
      </Link>
    </List.Item>
  );
};

export default NotebookLink;
