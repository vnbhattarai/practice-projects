import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 12,
};

const MaterialButton = () => (
  <MuiThemeProvider>
    <div>
      <RaisedButton label="Default" style={style} />
      {/* <RaisedButton label="Primary" primary={true} style={style} />
    <RaisedButton label="Secondary" secondary={true} style={style} />
    <RaisedButton label="Disabled" disabled={true} style={style} /> */}
      <br />

    </div>
  </MuiThemeProvider>
);

export default MaterialButton;
