import React from 'react';
import Skill from './Skill';
import { languages } from './SkillsInfo';
import { Container, Grid, Header, Divider } from 'semantic-ui-react';

class Skills extends React.Component {

  render() {
    return(
      <Container>
        <Divider hidden />
        <Header textAlign="center" as="h1">Languages and Skills</Header>
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
