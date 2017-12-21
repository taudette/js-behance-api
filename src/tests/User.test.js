import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import UserContainer from '../containers/User'
import UserProfileComponent from '../components/UserProfile'
import UserProjectsComponent from '../components/UserProjects'
import UserExperienceComponent from '../components/UserExperience'
import FollowersComponent from '../components/Followers'
import FollowingComponent from '../components/Following'

configure({ adapter: new Adapter() });

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