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
import ListProjects from './ListProjects';
import CardProjects from './CardProjects';

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
  state = {
    listView: false,
  }

  render() {
    return(
      <Container>
        <Divider hidden />
        <Segment clearing basic>
          <Button.Group floated="right">
            <Button onClick={() => this.setState({ listView: false })}>
              <Icon name="block layout"  size="big" />
            </Button>
            <Button onClick={() => this.setState({ listView: true })}>
              <Icon name="list layout" size="big" />
            </Button>
          </Button.Group>
        </Segment>
        <Grid columns={2}>
          <Grid.Column width={3} style={{ borderRight: '2px solid black'}}>
            <Grid.Row>
              <div style={{height: 200}}>Filter by Date</div>
            </Grid.Row>
            <Grid.Row>
              <div style={{height: 200}}>Filter by Type</div>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={13}>
            { this.state.listView ?
              <ListProjects projects={projects} />
              :
              <CardProjects projects={projects} />
            }
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Projects;
