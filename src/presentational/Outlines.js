import React from "react";

import { Container, Header, List } from "semantic-ui-react";
import OutlineLink from "./OutlineLink";

const Outlines = props => {
  return (
    <Container>
      <List divided animated relaxed verticalAlign="middle">
        {props.outlines.map((outline, i) => (
          <OutlineLink key={outline.id} outline={outline} />
        ))}
      </List>
    </Container>
  );
};

export default Outlines;
