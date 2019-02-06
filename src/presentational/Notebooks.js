import React from 'react'

import { Container, Header, List } from "semantic-ui-react";
import NotebookLink from "./NotebookLink";

const Notebooks = (props) => {

  return (
    <Container>
      <Header>Your Notebooks:</Header>
      <List divided animated relaxed verticalAlign="middle">
        {props.notebooks.map((notebook, i) => (
          <NotebookLink key={notebook.id} notebook={notebook} />
        ))}
      </List>
    </Container>
  )
}

export default Notebooks
