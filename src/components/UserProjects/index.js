import React from 'react';

const renderProject = (project) =>{
  return (
    <li>
    </li>
  )
}

//TODO: fix this
const UserProjectsComponent = (props) => {
  let projects
  if(props.project && props.project.length > 0){
    projects = <ul>{ props.projects.map(project => renderProject(project)) }</ul>
  }else{
    projects = <p>No projects are currently available</p>
  }
  return (
    <div>
      { projects }  
    </div>
  )
}

export default UserProjectsComponent

