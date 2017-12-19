import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchContainer from './containers/Search'
import UserProfileContainer from './containers/UserProfile'
import UsersContainer from './containers/Users'
import SearchComponent from './components/Search'
import UserComponent from './components/Users'
import UserProfileComponent from './components/UserProfile'
import UserProjectsComponent from './components/UserProjects'
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  })
})

describe('Search container', () => {
  it('SearchContainer is connected', () => {
    const mockStore = configureStore([]);
    const store = mockStore({});
    const wrapper = shallow(<Provider store={store}>
      <SearchContainer />
    </Provider>);
    expect(wrapper.text()).toBe('<Connect(SearchContainer) />');
  })
})

describe('User profile container', () => {
  it('UserProfileContainer is connected', () => {
    const mockStore = configureStore([]);
    const store = mockStore({});
    const wrapper = shallow(<Provider store={store}>
      <UserProfileContainer />
    </Provider>);
    expect(wrapper.text()).toBe('<Connect(UserProfileContainer) />');
  })
})

describe('Users container', () => {
  it('UsersContainer is connected', () => {
    const mockStore = configureStore([]);
    const store = mockStore({});
    const wrapper = shallow(<Provider store={store}>
      <UsersContainer />
    </Provider>);
    expect(wrapper.text()).toBe('<Connect(UsersContainer) />');
  })
})

describe('Search component', () => {
	const search = shallow(<SearchComponent />);
	it('Search component renders form correctly', () => {
		expect(shallow(<SearchComponent />)).toMatchSnapshot();
	});
})