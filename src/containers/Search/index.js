import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions'
import SearchComponent from '../../components/Search'

const SearchContainer = (props) => {
  return (
    <div>search container
      <SearchComponent search={props.search} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (e) => {
      e.preventDefault()
      let input = e.target.elements.input.value
       dispatch(getUsers(input))
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer)