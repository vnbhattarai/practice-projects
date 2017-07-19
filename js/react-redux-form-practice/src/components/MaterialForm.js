import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";

const Form = () => {
  return <TextField />;
};

class MaterialForm extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Form />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default MaterialForm;
