import React from 'react';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';

const renderExperience = (experience, index) => {
  return (
    <ListGroupItem key={index}>
      <p><strong>{ experience.position }</strong> at <strong>{ experience.organization }</strong></p>
      <p>{ experience.location }</p>
    </ListGroupItem>
  )
}

const UserExperienceComponent = (props) => {
  let experiences
  if (props.experience && props.experience.length > 0) {
    experiences = <ListGroup>{ props.experience.map((experience, index) => renderExperience(experience, index)) }</ListGroup>
  }
  return (
    <Panel className="Experiences-panel">
      <h3>Work Experience</h3>
      {experiences}
    </Panel>
  )
}

export default UserExperienceComponent