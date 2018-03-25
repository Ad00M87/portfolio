import React from 'react';
import {
  Header,
  Grid,
  Divider,
  Container,
  Segment,
  Button,
  Icon,
  Checkbox,
} from 'semantic-ui-react';
import ListProjects from './ListProjects';
import CardProjects from './CardProjects';
import { projects } from './ProjectInfo';
import { setCurrentProject } from '../actions/project';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Projects extends React.Component {
  state = {
    listView: false,
    projects: projects,
    year: '',
    type: '',
  }

  showProject = (id) => {
    const { dispatch, history } = this.props;
    dispatch(setCurrentProject(id));
    history.push(`/projects/${id}`);
  }

  filterByYear = (year) => {
    if (year != this.state.year && this.state.year != '' && this.state.type != '') {
      let byYear = projects.filter( p => (p.year == year && p.types.includes(this.state.type)))
      this.setState({ projects: byYear, year: year })
    } else {
      let byYear = this.state.projects.filter( p => p.year == year )
      this.setState({ projects: byYear, year: year })
    }
  }

  filterByType = (type) => {
    if (type != this.state.type && this.state.type != '' && this.state.year != '') {
      let byType = projects.filter( p => (p.year == this.state.year && p.types.includes(type)))
      this.setState({ projects: byType, type: type })
    } else {
      let byType = this.state.projects.filter( p => p.types.includes(type) )
      this.setState({ projects: byType, type: type })
    }
  }

  clearFilters = () => {
    this.setState({ projects: projects, year: '', type: '' })
  }

  render() {
    const { projects } = this.state;
    return(
      <div style={{marginLeft: "150px", marginRight: "150px"}}>
        <Divider hidden />
        <Segment clearing basic textAlign="center">
          <Header as="h1">Projects</Header>
          <Button.Group floated="right">
            <Button icon labelPosition="right" onClick={() => this.setState({ listView: false })}>
              <Icon name="block layout"  size="big" />
              Card View
            </Button>
            <Button icon labelPosition="right" onClick={() => this.setState({ listView: true })}>
              <Icon name="list layout" size="big" />
              List View
            </Button>
          </Button.Group>
        </Segment>
        <Grid columns={2}>
          <Grid.Column width={3}>
            <Grid.Row>
              <Button onClick={this.clearFilters}>Clear Filters</Button>
              <Segment>
                <Header as="h2">Filter by Year</Header>
                <div>
                  <Checkbox
                    radio
                    label='2017'
                    value='2017'
                    checked={this.state.year == "2017"}
                    onChange={() => this.filterByYear("2017")}
                  />
                </div>
                <div>
                  <Checkbox
                    radio
                    label='2018'
                    value='2018'
                    checked={this.state.year == "2018"}
                    onChange={() => this.filterByYear("2018")}
                  />
                </div>
              </Segment>
            </Grid.Row>
            <Grid.Row>
              <Segment>
                <Header as="h2">Filter by Type</Header>
                <div>
                  <Checkbox
                    radio
                    label='Web'
                    value='Web'
                    checked={this.state.type == "Web"}
                    onChange={() => this.filterByType("Web")}
                  />
                </div>
                <div>
                  <Checkbox
                    radio
                    label='Mobile'
                    value='Mobile'
                    checked={this.state.type == "Mobile"}
                    onChange={() => this.filterByType("Mobile")}
                  />
                </div>
              </Segment>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={13}>
            { this.state.listView ?
              <ListProjects projects={projects} changeview={this.showProject}/>
              :
              <CardProjects projects={projects} changeview={this.showProject}/>
            }
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default withRouter(connect()(Projects));
