import React from 'react';
//import { useState } from "react";

// react hook for functional component to manage state
//creating a functional component for Search with destructured props
const Search = ({beginSearch}) => {

  // triggers when  typed input field
  const change = (event) =>{
    // calls function being passed down by props(get info that was typed in)
    beginSearch(event.target.value);
     }
     return(
      // search for query
     <div className="search-bar form-inline">
       <input className="form-control" type="text" 
        onChange = {change} />
       <button className="btn hidden-sm-down">
         <span className="glyphicon glyphicon-search"></span>
       </button>
     </div>
   )


  
};
export default Search;  