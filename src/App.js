import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import Search from './containers/Search'
import configureStore from './store'
import { getUsers } from './actions'

const store = configureStore();
const testUsers = () => {
  store.dispatch(getUsers('Matias'))
}
class App extends Component {
  render() {
    testUsers()
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">JS Behance API App</h1>
          </header>
          <Search />
        </div>
      </Provider>
    );
  }
}

export default App;
