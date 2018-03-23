import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';

const ListProjects = ({ projects }) => (
  <Grid>
    { projects.map( (p, i) => {
      return(
        <Grid.Row key={i} columns={2} style={{marginTop: '10px', marginBottom: '10px'}}>
          <Grid.Column width={6}>
            <Header textAlign="center" as="h1">{p.name}</Header>
            { p.bulletPoints.map( (b,i) => {
              return(
                <Header as="h3">
                  {i+1}. {b}
                </Header>
              )
            })}
            { p.types.map( t => {
              return(
                <Button>View {t}</Button>
              )
            })}
          </Grid.Column>
          <Grid.Column width={10}>
            <div style={{height: 200, width: 400, backgroundColor: 'rgba(18, 189, 227, 0.51)'}}></div>
          </Grid.Column>
        </Grid.Row>
      )
    })}
  </Grid>
)

export default ListProjects;
