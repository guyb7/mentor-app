import React, { Component } from 'react';
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './components/Home'
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <MuiThemeProvider>
          <div>
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
