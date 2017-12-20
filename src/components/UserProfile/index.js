import React from 'react';
import { Row, Col, Grid, ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import FollowersCompont from '../Followers'
import FollowingComponent from '../Following'
import stockPhoto from '../../images/behance.png';

const UserProfileComponent = (props) => {
  let img
  if (props.user && props.user.images["100"]) {
    img = <img src={props.user.images["100"]} alt="" />
  } else {
    img = <img src={stockPhoto} alt="" />
  }

  
  let followersPreview = props.followersIsHovering ? <span>(preview)</span> : null
  let followingPreview = props.followingIsHovering ? <span>(preview)</span> : null

  return (
    <Panel className="Profile-panel">
      {props.user && 
        <div>
          <Panel>
          {img}
          { props.user.display_name &&  <h1> {props.user.display_name}</h1> }
          { props.user.location && <p><strong>location:</strong> {props.user.location}</p> }
          { props.user.company && <p><strong>company:</strong> {props.user.company}</p> }
          </Panel>
          { props.user.stats &&
            <ListGroup>
              <ListGroupItem onMouseEnter={props.toggleFollowers} onMouseLeave={props.toggleFollowers}>
                <span className="followers"><strong>followers:</strong> {props.user.stats.followers} {followersPreview}</span>
                <FollowersCompont followers={props.followers} followersIsHovering={props.followersIsHovering} />
              </ListGroupItem>
              <ListGroupItem onMouseEnter={props.toggleFollowing} onMouseLeave={props.toggleFollowing}>
                <span className="following"><strong>following:</strong> {props.user.stats.following} {followingPreview}</span>
                <FollowingComponent following={props.following} followingIsHovering={props.followingIsHovering} />
              </ListGroupItem>
              <ListGroupItem><strong>appreciations:</strong>  {props.user.stats.appreciations}</ListGroupItem>
              <ListGroupItem><strong>views:</strong>  {props.user.stats.views}</ListGroupItem>
              <ListGroupItem><strong>comments:</strong>  {props.user.stats.comments}</ListGroupItem>
            </ListGroup>
          }
        </div>
      }
    </Panel>
  )
}

export default UserProfileComponent

