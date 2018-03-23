import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import { Switch, Route } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Divider hidden style={{marginTop: '50px'}} />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/skills' component={Skills} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
