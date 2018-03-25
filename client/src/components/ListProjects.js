import React from 'react';
import { Grid, Header, Button, Image } from 'semantic-ui-react';

const ListProjects = ({ projects, changeview }) => (
  <Grid>
    { projects.map( (p, i) => {
      return(
        <Grid.Row
          key={i}
          columns={2}
          style={{marginTop: '10px', marginBottom: '10px', boxShadow: '4px 4px 4px 4px grey', marginLeft: '3px'}}
        >
          <Grid.Column width={6}>
            <Header textAlign="center" as="h1">{p.name}</Header>
            { p.bulletPoints.map( (b,i) => {
              return(
                <Header as="h3">
                  {i+1}. {b}
                </Header>
              )
            })}
            <Button onClick={() => changeview(p.id)}>View Project</Button>
          </Grid.Column>
          <Grid.Column width={10}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <Image src={p.media[0].image} size="large"/>
            </div>
          </Grid.Column>
        </Grid.Row>
      )
    })}
  </Grid>
)

export default ListProjects;
