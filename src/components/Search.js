import React, { useState } from "react";

function Search({ handleSearch }) {
  const [searchInput, setSearchInput] = useState("")

  function handleChange(event) {
    console.log(event.target.value)
    setSearchInput(event.target.value)
    handleSearch(searchInput)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
