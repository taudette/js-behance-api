import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import UserContainer from '../containers/User'
import UsersContainer from '../containers/Users'
import UsersComponent from '../components/Users'

configure({ adapter: new Adapter() });

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

describe('Users component', () => {
	const users = shallow(<UsersComponent />);
	it('Users component renders users list correctly', () => {
		expect(users).toMatchSnapshot();
	});
})
