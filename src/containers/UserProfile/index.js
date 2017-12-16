import React from 'react';
import { connect } from 'react-redux';
import { getUser, getExperience, getFollowers, getFollowing, getProjects } from '../../actions'

class UserProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
    console.log(userId)
  }
  render() {
    return (
      <div>
        profile
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    projects: state.projects,
    experience: state.experience,
    followers: state.followers,
    following: state.following
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (id) => dispatch(getUser(id)),
    getProjects: (id) => dispatch(getProjects(id)),
    getExperience: (id) => dispatch(getExperience(id)),
    getFollowers: (id) => dispatch(getFollowers(id)),
    getFollowing: (id) => dispatch(getFollowing(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer)