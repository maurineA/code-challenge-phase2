// SearchButton.js
import React from "react";

function SearchBank({ onSearchChange }) {
  return (
    //search input button
    <div>
      <input
        type="text"
        id="search"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button type="search">Search</button>
    </div>
  );
}

export default SearchBank;
