import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import UserForm from "./components/UserForm.js";
import MaterialForm from "./components/MaterialForm";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <UserForm /> {""}
          <MaterialForm />
        </div>
      </Provider>
    );
  }
}

export default App;
