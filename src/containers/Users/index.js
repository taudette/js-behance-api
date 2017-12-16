import React from 'react';
import { connect } from 'react-redux';
import UsersComponent from '../../components/Users'

const UsersContainer = (props) => {
  return (

    <div>Users container
      { props.users &&
      <UsersComponent users={props.users}/>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)