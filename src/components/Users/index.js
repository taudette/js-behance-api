import React from 'react';
import { Link } from 'react-router-dom';

const renderUser = (user) => {
  let img
  if(user.images["100"]){
    img = <img src={user.images["100"]} alt="" />
  }else{
    img = <p>sorry no images</p>
  }
  return (
    <Link to={"/user/"+user.id} key={user.id}>
      <li>
        {user.display_name}
        {img}   
      </li>
    </Link>
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

