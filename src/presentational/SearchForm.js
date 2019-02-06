import React from "react";

import { Container, Button, Header, Form, Segment } from "semantic-ui-react";

const SearchForm = props => {
  return (
    <Container>
    <Segment basic>
      <Header>What Do You Want To Learn Next?</Header>
    </Segment>
    <Segment>
      <Form onSubmit={e => props.search(e)}>
        <Form.Field>
          <label>Search through Youtube, take notes, and save your "outline" for future reference.</label>
          <input placeholder="e.g., Redux tutorials" name="searchTerm" />
        </Form.Field>
        <Button inverted color="red" type="submit">
          Search Youtube
        </Button>
      </Form>
    </Segment>
    </Container>
  );
};

export default SearchForm;
