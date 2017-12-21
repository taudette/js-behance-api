import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeaderContainer = (props) => {
  return (
    <Jumbotron>
      <Link to="/">
      <h1>JS Behance API App</h1>
      <p>Search for behance users & projects here!</p>
      </Link>
    </Jumbotron>
  )
}

export default HeaderContainer