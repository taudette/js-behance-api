import React from 'react';
import { connect } from 'react-redux';
import { getUser, getExperience, getFollowers, getFollowing, getProjects, toggleFollowing, toggleFollowers } from '../../actions';
import UserProfileComponent from '../../components/UserProfile';
import UserProjectsComponent from '../../components/UserProjects';
import UserExperienceComponent from '../../components/UserExperience';
import { Grid, Row, Col } from 'react-bootstrap';

class UserContainer extends React.Component {
  componentDidMount() {
    const userName = this.props.match.params.userName
    this.props.getUserInfo(userName)
    this.props.getProjects(userName)
    this.props.getExperience(userName)
    this.props.getFollowers(userName)
    this.props.getFollowing(userName)
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={4} >
            <UserProfileComponent 
              user={this.props.user} 
              followers={this.props.followers} 
              following={this.props.following} 
              toggleFollowing={this.props.toggleFollowing} 
              followingIsHovering={this.props.followingIsHovering} 
              toggleFollowers={this.props.toggleFollowers} 
              followersIsHovering={this.props.followersIsHovering} 
            />
            <UserExperienceComponent experience={this.props.experience} />
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
    following: state.following,
    followingIsHovering: state.followingIsHovering,
    followersIsHovering: state.followersIsHovering
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (userName) => dispatch(getUser(userName)),
    getProjects: (userName) => dispatch(getProjects(userName)),
    getExperience: (userName) => dispatch(getExperience(userName)),
    getFollowers: (userName) => dispatch(getFollowers(userName)),
    getFollowing: (userName) => dispatch(getFollowing(userName)),
    toggleFollowing: () => dispatch(toggleFollowing()),
    toggleFollowers: () => dispatch(toggleFollowers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)