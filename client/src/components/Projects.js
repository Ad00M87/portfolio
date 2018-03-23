import React from 'react';
import {
  Header,
  Grid,
  Divider,
  Container,
  Segment,
  Button,
  Icon,
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
        <Segment clearing basic>
          <Button.Group floated="right">
            <Button><Icon name="block layout"  size="big" /></Button>
            <Button><Icon name="list layout" size="big" /></Button>
          </Button.Group>
        </Segment>
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
