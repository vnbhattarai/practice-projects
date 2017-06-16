import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from './Button';

const Input = () => (
  <MuiThemeProvider>
    <div>
      <TextField
        hintText="Email"
        floatingLabelText="Email"
        style={{ border: '1px solid #eee' }}
      />
      <br />
      <TextField
        hintText="Password"
        floatingLabelText="Password"
        style={{ border: '1px solid #eee' }}
      />
      <br />
      <Button />
    </div>

  </MuiThemeProvider>
);

export default Input;
