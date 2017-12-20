import React from 'react';

const renderFollower = (follower, index) => {
  if (index < 5) {
    return (
      <a key={follower.id} href={follower.url} target="blank">
        <li>
          <small>{follower.username}</small>
        </li>
      </a>
    )
  }
}

const FollowersComponent = (props) => {
  console.log(props.followersIsHovering)
  let followers
  if (props.followers && props.followers.length > 0 && props.followersIsHovering) {
    followers = 
      <ul>
        { props.followers.map((follower, index) => renderFollower(follower, index)) }
      </ul>
  } else {
    followers = null
  }
  return (
    followers 
  )
}

export default FollowersComponent