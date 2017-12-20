import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import Home from './containers/Home'
import User from './containers/User'
import Header from './containers/Header'
import store, { history } from './store'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Header />
            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/user/:userName" component={User} />
            </main>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

