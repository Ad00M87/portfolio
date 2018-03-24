import React from 'react';
import {
  Button,
  Card,
  Image,
} from 'semantic-ui-react';

const CardProjects = ({ projects, changeview }) => (
  <Card.Group>
    { projects.map( (p, i) => {
      return(
        <Card key={i}>
          <Card.Content>
            <Image
              src={p.media[0].image}
              size={p.media[0].type === "web" ? "large" : "small"}
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
            { p.types.map( t => {
              return(
                <Button onClick={() => changeview(p.id)}>View {t}</Button>
              )
            })}
          </Card.Content>
        </Card>
      )
    })}
  </Card.Group>
)

export default CardProjects;
