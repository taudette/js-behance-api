import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

describe('App', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  })
})

