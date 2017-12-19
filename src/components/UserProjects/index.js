import React from 'react';
import { Link } from 'react-router-dom';
import stockPhoto from '../../images/behance.png';
import { Col, Row, ListGroup, ListGroupItem, } from 'react-bootstrap';

//TODO: error handling
const renderProject = (project) =>{
  let img
  if(project.covers["115"]){
    img = <img src={project.covers["115"]} alt="" />
  }else{
    img = <img src={stockPhoto} alt="" />
  }

  return (
    <Col md={2} key={project.id}>
      <ListGroupItem>
        <a href={project.url} target="_blank">
          <div>{img}</div> 
          <h2>{project.name}</h2>
          <p>{project.fields[0]}</p>      
        </a>
      </ListGroupItem>
    </Col>
  )
}

//TODO: fix this
const UserProjectsComponent = (props) => {
  let projects
  if(props.projects && props.projects.length > 0){
    projects = <ListGroup>{ props.projects.map(project => renderProject(project)) }</ListGroup>
  }else{
    projects = <p>No projects are currently available</p>
  }

  return (
    <Row>
      <h1>Projects</h1>
      { projects }  
    </Row>
  )
}

export default UserProjectsComponent

