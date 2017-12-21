import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchContainer from './containers/Search'
import UserContainer from './containers/User'
import UsersContainer from './containers/Users'
import SearchComponent from './components/Search'
import UsersComponent from './components/Users'
import UserProfileComponent from './components/UserProfile'
import UserProjectsComponent from './components/UserProjects'
import FollowersComponent from './components/Followers'
import FollowingComponent from './components/Following'
import UserExperienceComponent from './components/UserExperience'
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

describe('User container', () => {
  it('UserContainer is connected', () => {
    const mockStore = configureStore([]);
    const store = mockStore({});
    const wrapper = shallow(<Provider store={store}>
      <UserContainer />
    </Provider>);
    expect(wrapper.text()).toBe('<Connect(UserContainer) />');
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
		expect(search).toMatchSnapshot();
	});
})

describe('Users component', () => {
	const users = shallow(<UsersComponent />);
	it('Users component renders users list correctly', () => {
		expect(users).toMatchSnapshot();
	});
})

describe('UserProfile component', () => {
	const userProfile = shallow(<UserProfileComponent />);
	it('User profile component renders profile correctly', () => {
		expect(userProfile).toMatchSnapshot();
	});
})

describe('UserProjects component', () => {
	const userProjects = shallow(<UserProjectsComponent />);
	it('User projects component renders projects correctly', () => {
		expect(userProjects).toMatchSnapshot();
	});
})

describe('Followers component', () => {
	const followers = shallow(<FollowersComponent />);
	it('Followers component renders projects correctly', () => {
		expect(followers).toMatchSnapshot();
	});
})

describe('Following component', () => {
	const following = shallow(<FollowingComponent />);
	it('Following component renders projects correctly', () => {
		expect(following).toMatchSnapshot();
	});
})