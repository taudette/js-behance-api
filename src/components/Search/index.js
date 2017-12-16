import React from 'react';

const Search = (props) => {
  return (
    <form onSubmit={props.search}>
      <input name="input" type="text" />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search

