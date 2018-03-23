import React from 'react';
import Skill from './Skill';
import { languages } from './SkillsInfo';
import { Container, Grid, Image, Segment, Header } from 'semantic-ui-react';

class Skills extends React.Component {

  render() {
    return(
      <Container>
        <Header textAlign="center" style={{fontSize: '50px'}}>Languages and Skills</Header>
        <Grid>
          <Grid.Row columns={4}>
            { languages.map( (l, i) => {
              return(
                <Grid.Column key={i} style={{padding: 0}}>
                  <Skill lang={l} />
                </Grid.Column>
              )
            })}
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Skills;
