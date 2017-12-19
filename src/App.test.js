import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from './containers/Search'
import UserProfile from './containers/UserProfile'
import Users from './containers/Users'
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';


configure({ adapter: new Adapter() });

//full render test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('Search is Connected', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});
  const wrapper = shallow(<Provider store={store}>
      <Search />
  </Provider>);
  expect(wrapper.text()).toBe('<Connect(SearchContainer) />');
});