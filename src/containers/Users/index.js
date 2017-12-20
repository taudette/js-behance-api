import React from 'react';
import { connect } from 'react-redux';
import UsersComponent from '../../components/Users';

const UsersContainer = (props) => {
  return (
    <div>
      { props.users &&
        <UsersComponent users={props.users} />
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(UsersContainer)


