import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import Home from './containers/Home'
import UserProfile from './containers/UserProfile'
import store, { history } from './store'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <header className="App-header">
              <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">JS Behance API App</h1>
              </Link>
            </header>
            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/user/:userName" component={UserProfile} />
            </main>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
