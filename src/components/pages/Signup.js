import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../template/Header';

const Signup = () => (
  <div>
    <MuiThemeProvider>
      <Header />
    </MuiThemeProvider>
    <p>This is SignUp page</p>
  </div>
);

export default Signup;
