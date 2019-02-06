import React from "react";

import { Button, Form, Segment } from "semantic-ui-react";

const SearchForm = props => {
  return (
    <Segment>
      <Form onSubmit={e => props.search(e)}>
        <Form.Field>
          <label>Search YouTube</label>
          <input placeholder="e.g., Redux tutorials" name="searchTerm" />
        </Form.Field>
        <Button inverted color="red" type="submit">
          Search Youtube
        </Button>
      </Form>
    </Segment>
  );
};

export default SearchForm;
