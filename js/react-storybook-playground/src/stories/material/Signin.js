import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {green500} from 'material-ui/styles/colors';

const Signin = () => (
  <MuiThemeProvider>
    <div>
      <TextField
        hintText="Email"
        floatingLabelText="Email"
        // style={{ border: '1px solid #eee' }}
      />
      <br />
      <TextField
        hintText="Password"
        floatingLabelText="Password"
        // style={{ border: '1px solid #eee' }}
      /><br /><br />
      <RaisedButton label="Sign In" backgroundColor={green500} />
    </div>

  </MuiThemeProvider>
);

export default Signin;
