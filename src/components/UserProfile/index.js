import React from 'react';

const UserProfileComponent = (props) => {
  return (
    <div>
      {props.user && 
        <div>
          { props.user.display_name &&  <h1> {props.user.display_name}</h1> }
          { props.user.username && <p>username: {props.user.username}</p> }
          { props.user.location && <p>location: {props.user.location}</p> }
          { props.user.company && <p>company: {props.user.company}</p> }
          { props.user.stats &&
            <ul>
              <li>followers: {props.user.stats.followers}</li>
              <li>following: {props.user.stats.following}</li>
              <li>appreciations: {props.user.stats.appreciations}</li>
              <li>views: {props.user.stats.views}</li>
              <li>comments: {props.user.stats.comments}</li>
            </ul>
          }
        </div>
      }
    </div>
  )
}

export default UserProfileComponent

