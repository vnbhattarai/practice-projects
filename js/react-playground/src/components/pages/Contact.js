import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../template/Header';

const Contact = () => (
  <div>
    <MuiThemeProvider>
      <Header />
    </MuiThemeProvider>
    <p>This is Contact page</p>
  </div>
);

export default Contact;
