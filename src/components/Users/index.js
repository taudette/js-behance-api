import React from 'react';

const renderUser = (user) => {
  let img
  if(user.images['100']){
    img = <img src={user.images['100']} />
  }else{
    img = <p>sorry no images</p>
  }
  return (
    <li key={user.id}>
      {user.display_name}
      {img}
      
    </li>
  )
}

const UsersComponent = (props) => {
  return (
    <ul>
      { props.users.map(user => renderUser(user)) }
    </ul>
  )
}

export default UsersComponent