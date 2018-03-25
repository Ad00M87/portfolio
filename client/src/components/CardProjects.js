import React from 'react';
import {
  Button,
  Card,
  Image,
} from 'semantic-ui-react';

const CardProjects = ({ projects, changeview }) => (
  <Card.Group itemsPerRow={2}>
    { projects.map( (p, i) => {
      return(
        <Card key={i}>
          <Card.Content>
            <Image
              src={p.media[0].image}
              size="large"
            />
            <Card.Header style={{paddingTop: '15px'}}>
              {p.name}
            </Card.Header>
            { p.bulletPoints.map( (b,i) => {
              return(
                <Card.Description style={{padding: 3}}>
                  {i+1}. {b}
                </Card.Description>
              )
            })}
          </Card.Content>
          <Card.Content extra>
            <Button onClick={() => changeview(p.id)}>View Project</Button>
          </Card.Content>
        </Card>
      )
    })}
  </Card.Group>
)

export default CardProjects;
