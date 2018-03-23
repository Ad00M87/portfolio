import React from 'react';
import {
  Button,
  Card,
  Image,
} from 'semantic-ui-react';

const CardProjects = ({ projects }) => (
  <Card.Group>
    { projects.map( (p, i) => {
      return(
        <Card key={i}>
          <Card.Content>
            <Image
              src='https://upload.wikimedia.org/wikipedia/commons/f/fa/IPhone_5.png'
              size="small"
            />
            <Card.Header style={{padding: 5}}>
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
            { p.types.map( t => {
              return(
                <Button>View {t}</Button>
              )
            })}
          </Card.Content>
        </Card>
      )
    })}
  </Card.Group>
)

export default CardProjects;
