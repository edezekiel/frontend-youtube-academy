import React from "react";

import { Grid, Segment, Button, Icon } from "semantic-ui-react";

const GoogleAuth = props => {
  return (
    <Grid>
      <Grid.Row >
        <Grid.Column>
          <Segment
            style={{
              display: "flex",
              "flex-direction": "column",
              "justify-content": "center",
              "align-items": "center",
              height: "90vh",
              background:
                "url(https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80) no-repeat center center fixed"
            }}
          >
            <Button
              size="massive"
              style={{ "text-align": "center" }}
              onClick={props.authHandler}
              as="a"
              color="red"
            >
              <Icon name="google" />
              {props.message}
            </Button>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default GoogleAuth;
