import React from "react";
import { Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Playground = () => (
  <Grid stackable columns="equal" container="true">
    <Grid.Row>
      <Grid.Column>
        <Segment> <Link to='/signup_form'>Signup-form</Link></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment textAlign="center">2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>4</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Playground;
