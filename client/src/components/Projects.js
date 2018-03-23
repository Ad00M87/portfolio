import React from 'react';
import {
  Header,
  Grid,
  Divider,
  Container,
} from 'semantic-ui-react';

const projects = [
  {
    name: "CanDuu",
    bulletPoints: [
      "One",
      "Two",
      "Three"
    ],
    media: "image or video",
  },
  {
    name: "Whistle Recruiting",
    bulletPoints: [
      "One",
      "Two",
      "Three"
    ],
    media: "image or video",
  },
  {
    name: "DevPoint Studios Website",
    bulletPoints: [
      "One",
      "Two",
      "Three"
    ],
    media: "image or video",
  },
]

class Projects extends React.Component {

  render() {
    return(
      <Container>
        <Divider hidden />
        <Grid columns={2}>
          <Grid.Column width={6}>
            <Grid.Row>
              <div>Hello</div>
            </Grid.Row>
            <Grid.Row>
              <div>Hi</div>
            </Grid.Row>
            <Grid.Row>
              <div>Hey</div>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={10}>
            <Grid.Row>
              <div>Hello</div>
            </Grid.Row>
            <Grid.Row>
              <div>Hi</div>
            </Grid.Row>
            <Grid.Row>
              <div>Hey</div>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Projects;
