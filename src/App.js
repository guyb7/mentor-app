import React, { Component } from 'react';
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './components/Home'
import NavBar from './components/NavBar'
import SideDrawer from './components/SideDrawer'
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <MuiThemeProvider>
          <div>
            <NavBar />
            <SideDrawer />
            <div>
              <RaisedButton label="Default" />
            </div>
            <Home />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
