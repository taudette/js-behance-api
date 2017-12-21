import { GET_USERS, GET_USER, GET_PROJECTS, GET_EXPERIENCE, GET_FOLLOWERS, GET_FOLLOWING, TOGGLE_FOLLOWING, TOGGLE_FOLLOWERS } from "../actions/actionTypes";

const INITIAL_STATE = {}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_USERS:
    return Object.assign({}, state, {users: action.data});
  case GET_USER:
    return Object.assign({}, state, {user: action.data});
  case GET_PROJECTS:
    return Object.assign({}, state, {projects: action.data});
  case GET_EXPERIENCE:
    return Object.assign({}, state, {experience: action.data});
  case GET_FOLLOWERS:
    return Object.assign({}, state, {followers: action.data});
  case GET_FOLLOWING:
    return Object.assign({}, state, {following: action.data});
  case TOGGLE_FOLLOWING:
    return Object.assign({}, state, {followingIsHovering: !state.followingIsHovering});
  case TOGGLE_FOLLOWERS:
    return Object.assign({}, state, {followersIsHovering: !state.followersIsHovering});
  default:
    return state;
  }
}

