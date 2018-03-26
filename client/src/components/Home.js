import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import ImageSlider from './ImageSlider';

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Home Component</Header>
        <ImageSlider />
      </div>
    );
  }
}

export default Home;
