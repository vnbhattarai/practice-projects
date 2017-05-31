import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/template/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
        <h1>This is root app and can be accessed without login</h1>
      </div>
    );
  }
}
