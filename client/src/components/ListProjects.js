import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const ListProjects = ({ projects }) => (
  <Grid>
    { projects.map( (p, i) => {
      if (i % 2 == 0) {
        return(
          <Grid.Row columns={2} style={{marginTop: '10px', marginBottom: '10px'}}>
            <Grid.Column width={6}>
              <Header textAlign="center" as="h1">{p.name}</Header>
              <Header>{p.bulletPoints[0]}</Header>
              <Header>{p.bulletPoints[1]}</Header>
              <Header>{p.bulletPoints[2]}</Header>
            </Grid.Column>
            <Grid.Column width={10}>
              <div style={{height:400, width: 600, backgroundColor: 'rgba(18, 189, 227, 0.51)'}}></div>
            </Grid.Column>
          </Grid.Row>
        )
      } else {
        return(
          <Grid.Row columns={2} style={{marginTop: '10px', marginBottom: '10px'}}>
            <Grid.Column width={10}>
              <div style={{height:400, width: 600, backgroundColor: 'rgba(18, 189, 227, 0.51)'}}></div>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header textAlign="center" as="h1">{p.name}</Header>
              <Header>{p.bulletPoints[0]}</Header>
              <Header>{p.bulletPoints[1]}</Header>
              <Header>{p.bulletPoints[2]}</Header>
            </Grid.Column>
          </Grid.Row>
        )
      }
    })}
  </Grid>
)

export default ListProjects;