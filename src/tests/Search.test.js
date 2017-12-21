import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import SearchContainer from '../containers/Search'
import SearchComponent from '../components/Search'

configure({ adapter: new Adapter() });

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

describe('Search component', () => {
	const search = shallow(<SearchComponent />);
	it('Search component renders form correctly', () => {
		expect(search).toMatchSnapshot();
	});
})