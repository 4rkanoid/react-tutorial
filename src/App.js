import React, { Component } from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <Calculator />
      </Provider>
    );
  }
}

export default App;
