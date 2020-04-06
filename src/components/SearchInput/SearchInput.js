

import React from "react";
import "./Search.css"

function SearchInput({ search, handleInputChange }) {
    return (
            <input 
                type="text" 
                placeholder="Search.." 
                name="search" 
                value={search} 
                onChange={handleInputChange} 
            />
  );
}

export default SearchInput;
