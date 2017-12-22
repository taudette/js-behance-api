import reducer from '../reducers'
import * as types from '../actions/actionTypes'

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({})
})

