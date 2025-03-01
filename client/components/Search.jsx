import React from 'react';
//import { useState } from "react";

// react hook for functional component to manage state
//creating a functional component for Search with destructured props
const Search = ({ handleSearch }) => {
  // triggers when  typed input field
  const change = event => {
    // calls function being passed down by props(get info that was typed in)
    handleSearch(event.target.value);
  };
  return (
    // search for query
    <div className='search-container'>
      <div className='search-input-group'>
        <label className='search-query'>Search</label>
        <input className='form-control' type='text' onChange={change} />
        <button className='btn hidden-sm-down'>
          <span className='glyphicon glyphicon-search'></span>
        </button>
      </div>
    </div>
  );
};
export default Search;
