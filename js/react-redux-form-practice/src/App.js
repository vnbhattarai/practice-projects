import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import UserForm from './components/UserForm.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UserForm />
      </Provider>
    );
  }
}

export default App;
