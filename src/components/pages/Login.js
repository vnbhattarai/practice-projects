import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../template/Header';
import LoginCard from '../cards/LoginCard';

export default class Login extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
        <LoginCard />
        <p>This is Login page</p>
      </div>
    );
  }
}
