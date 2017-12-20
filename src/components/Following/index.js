import React from 'react';

//TODO: BE ABLE TO VIEW ALL FOLLOWERS
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
  if (props.following && props.following.length > 0) {
    followings = 
      <ul>
        { props.following.map((following, index) => renderfollowing(following, index)) }
        <li>...</li>
      </ul>
  } else {
    followings = null
  }
  return (
    followings 
  )
}

export default FollowingComponent