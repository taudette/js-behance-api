import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import stockPhoto from '../../images/behance.png';

const renderUser = (user, index) => {
  let img
  if (user.images["100"]) {
    img = <img src={user.images["100"]} alt="" />
  } else {
    img = <img src={stockPhoto} alt="" />
  }

  return (
    <Col md={4} key={user.id}>
      <ListGroupItem>
        <Link to={"/user/"+user.username} >
          <div>{ img }</div>
          <div>{ user.display_name }</div>
        </Link>
      </ListGroupItem>
    </Col>
  )
}

const UsersComponent = (props) => {
  const users = props.users && props.users.length > 0
  
  return (
    <Panel>
      <Row>
        { users && 
        <ListGroup className="Users-list">
          { props.users.map((user, index) => renderUser(user, index)) }
        </ListGroup>
        }
        { !users &&
          <p>Sorry try a different search!</p>
        }
      </Row>
    </Panel>
  )
}

export default UsersComponent
