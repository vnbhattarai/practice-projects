import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/template/Header';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header />
      </MuiThemeProvider>
    );
  }
}
