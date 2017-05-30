import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from '../template/Header';

export default class Login extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
        <p>This is Login page</p>
      </div>
    );
  }
}
