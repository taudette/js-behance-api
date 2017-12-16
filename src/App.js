import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import Home from './containers/Home'
import configureStore from './store'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">JS Behance API App</h1>
          </header>
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
