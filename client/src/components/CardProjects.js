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
        <Card key={i} style={{boxShadow: '4px 4px 4px 4px grey'}}>
          <Card.Content>
            <Image
              src={p.media[0].image}
              size="large"
            />
            <Card.Header style={{paddingTop: '15px'}}>
              {p.name}
            </Card.Header>
            <Card.Description style={{padding: 3}}>
              {p.description.narritive}
            </Card.Description>
            <Card.Description style={{padding: 3}}>
              Languages: {p.description.languages}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button color="teal" onClick={() => changeview(p.id)}>View Project Sample and Description</Button>
          </Card.Content>
        </Card>
      )
    })}
  </Card.Group>
)

export default CardProjects;
