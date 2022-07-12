import React from 'react'

function SearchBar({ onChange }) {
  return (
    <input type="text" name="name" id="search" onChange={onChange} />
  )
}

export default SearchBar