import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Projects from './Projects';
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Divider hidden style={{marginTop: '100px'}} />
        <Flash />
        <Switch>
          <Route exact path='/' component={Projects} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/projects/:id' component={Project} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
