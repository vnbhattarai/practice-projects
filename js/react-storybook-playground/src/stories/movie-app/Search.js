import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import AppBar from "material-ui/AppBar";

// const style = {
//   border: "2px solid #eee",
//   margin: "20% 50% 50% 50%",
//   transform: "translate(-50%, -50%)"
//   // margin: "0"
//   // paddingBottom: "10px",
//   // "text-align": "center"
// };

const style = {
  margin: "0",
  background: "grey",
  position: "absolute",
  top: "50%",
  left: "50%",
  marginRight: -"50%",
  transform: "translate(-50%, -50%)",
  "text-align": "center"
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    console.log(`You've submitted the form: ${this.state.value}`);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Movie and TV show app" />
            <div style={style}>
              <form onSubmit={this.handleSubmit}>
                {" "}<div>
                  <h2>Search for a Movie</h2>
                </div>{" "}
                <TextField
                  floatingLabelText="Movie"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <div>
                  <RaisedButton
                    fullWidth={true}
                    label="Search"
                    primary={true}
                    // type="submit"
                    onClick={this.props.onClick}
                  />
                  <br />
                </div>
              </form>
            </div>
          </div>
        </MuiThemeProvider>
        <button onClick={this.props.onClick} label="some" name="name" />
      </div>
    );
  }
}

export default Search;
