import React from 'react';

const renderfollowing = (following, index) => {
  if (index < 5) {
    return (
      <a key={following.id} href={following.url} target="blank">
        <li>
          <small>{following.username}</small>
        </li>
      </a>
    )
  }
}

const FollowingComponent = (props) => {
  let followings
  if (props.following && props.following.length > 0 && props.followingIsHovering) {
    followings = 
      <ul>
        { props.following.map((following, index) => renderfollowing(following, index)) }
      </ul>
  } else {
    followings = null
  }
  return (
    followings 
  )
}

export default FollowingComponent