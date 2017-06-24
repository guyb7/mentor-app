import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './components/NavBar'
import SideDrawer from './components/SideDrawer'
import Home from './components/Home'
import Teams from './components/Teams'
import TeamEdit from './components/TeamEdit'

class App extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <MuiThemeProvider>
          <Router>
            <div>
              <NavBar />
              <SideDrawer />
              <Route exact path="/" component={Home}/>
              <Route exact path="/teams" component={Teams}/>
              <Route path="/teams/:id" component={TeamEdit}/>
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App
