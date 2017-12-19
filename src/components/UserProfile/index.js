import React from 'react';
import { Row, Col, Grid, ListGroup, ListGroupItem, Panel } from 'react-bootstrap'

const UserProfileComponent = (props) => {
  return (
    <Panel className="Profile-panel">
      {props.user && 
        <div>
          <Panel>
          { props.user.display_name &&  <h1> {props.user.display_name}</h1> }
          { props.user.location && <p><strong>location:</strong> {props.user.location}</p> }
          { props.user.company && <p><strong>company:</strong> {props.user.company}</p> }
          </Panel>
          { props.user.stats &&
            <ListGroup>
              <ListGroupItem><strong>followers:</strong> {props.user.stats.followers}</ListGroupItem>
              <ListGroupItem><strong>following:</strong>  {props.user.stats.following}</ListGroupItem>
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

