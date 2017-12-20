import React from 'react';

const renderFollower = (follower, index) => {
  if (index < 5) {
    return (
      <a key={follower.id} href={follower.url} target="blank">
        <li>
          <small>{follower.username}</small>
          <img src={follower.img["50"]} />
        </li>
      </a>
    )
  }
}

const FollowersComponent = (props) => {
  let followers
  if (props.followers && props.followers.length > 0) {
    followers = 
      <ul>
        { props.followers.map((follower, index) => renderFollower(follower, index)) }
        <li>...</li>
      </ul>
  } else {
    followers = null
  }
  return (
    followers 
  )
}

export default FollowersComponent