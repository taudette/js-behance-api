import React from 'react';
import { connect } from 'react-redux';
import { getUser, getExperience, getFollowers, getFollowing, getProjects } from '../../actions'
import UserProfileComponent from '../../components/UserProfile'
import UserProjectsComponent from '../../components/UserProjects'
import { Grid, Row, Col } from 'react-bootstrap'

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
      <Grid>
        <Row>
          <Col md={4} >
            <UserProfileComponent user={this.props.user} experience={this.props.experience} followers={this.props.followers} following={this.props.following} />
          </Col>
          <Col md={8} >
            <UserProjectsComponent projects={this.props.projects} />
          </Col>
        </Row>
      </Grid>
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