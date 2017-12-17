import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import stockPhoto from '../../images/behance.png';

const renderUser = (user, index) => {
  let img
  if(user.images["100"]){
    img = <img src={user.images["100"]} alt="" />
  }else{
    img = <img src={stockPhoto} alt="" />
  }
  return (
    <Col md={4} key={user.id}>
      <li>
        <Link to={"/user/"+user.id} >
            <div>{ img }</div>
            <div>{ user.display_name }</div>
        </Link>
      </li>
    </Col>
  )
}

const UsersComponent = (props) => {
  return (
    <Row>
      <ul>
        { props.users.map((user, index) => renderUser(user, index)) }
      </ul>
    </Row>
  )
}

export default UsersComponent

//two columns