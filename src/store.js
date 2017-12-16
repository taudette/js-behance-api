import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers'

const createAppStore = compose(
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

export default function configureStore(initialState){
  const store = createAppStore(reducer, initialState);
  return store;
};




