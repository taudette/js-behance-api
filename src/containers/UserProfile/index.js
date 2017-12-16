import React from 'react';
import { connect } from 'react-redux';
import { getUser, getExperience, getFollowers, getFollowing, getProjects } from '../../actions'

class UserProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
    this.props.getUserInfo(userId)
    this.props.getProjects(userId)
    this.props.getExperience(userId)
    this.props.getFollowers(userId)
    this.props.getFollowing(userId)
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
    getUserInfo: (userId) => dispatch(getUser(userId)),
    getProjects: (userId) => dispatch(getProjects(userId)),
    getExperience: (userId) => dispatch(getExperience(userId)),
    getFollowers: (userId) => dispatch(getFollowers(userId)),
    getFollowing: (userId) => dispatch(getFollowing(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer)