import React from 'react';
//import { useState } from "react";

// react hook for functional component to manage state
//creating a functional component for Search with destructured props
const Search = () => {
  const searchDeezer = query => {
    axios
      .get(`https://api.deezer.com/search?q=${query}`)
      .then(data => {
        console.log('successfully queried deezer', data[0]);
        return data;
      })
      .catch(err => {
        console.error('deezer query failed', err);
      });
  };
  
  return (
    <div className='advanced-search'>
      <h1> Advanced Search </h1>
      <div className='search-container'>
        <form>
          <input class='create-input' placeholder='Artist'></input>
          <input class='create-input' placeholder='Song'></input>
          <input class='create-input' placeholder='Album'></input>
          <button class='submit-button' type='submit'>
            {' '}
            🔎
          </button>
        </form>
      </div>
      <div className='results-container'>
        <div className='result'></div>
      </div>
    </div>
  );
};
export default Search;
