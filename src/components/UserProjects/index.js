import React from 'react';
import stockPhoto from '../../images/behance.png';
import { Col, Row, ListGroup, ListGroupItem, Panel, } from 'react-bootstrap';

const renderProject = (project) =>{
  let img
  if (project.covers["202"]) {
    img = <img src={project.covers["202"]} alt="" />
  } else {
    img = <img src={stockPhoto} alt="" />
  }

  let fieldList
  if (project.fields && project.fields.length) {
   fieldList = project.fields.map((field, index) => {
      return (
        <li key={index}>
          {field}
        </li>
      )
    })
  } else {
    fieldList = null
  }

  return (
    <Col md={6} key={project.id}>
      <ListGroupItem className="Project">
        <a href={project.url} target="_blank">
          <div>{img}</div> 
          { project.name && <h3>{project.name}</h3> }
          <span className="Project-info">
            <ul>{fieldList}</ul>  
            { project.stats.views && <p><strong>views: </strong> {project.stats.views}</p> }
            { project.stats.appreciations && <p><strong>appreciations: </strong> {project.stats.appreciations}</p> }          
          </span>
        </a>
      </ListGroupItem>
    </Col>
  )
}

const UserProjectsComponent = (props) => {
  let projects
  if (props.projects && props.projects.length > 0) {
    projects = <ListGroup>{ props.projects.map(project => renderProject(project)) }</ListGroup>
  } else {
    projects = <p>No projects are currently available</p>
  }

  return (
    <Panel>
      <h3>Projects</h3>
      <Row>
        { projects }  
      </Row>
    </Panel>
  )
}

export default UserProjectsComponent

