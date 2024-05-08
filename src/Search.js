import React, { useState } from "react";

export default function Search(props) {
  let [searchTerm, setSearchTerm] = useState("");

  let handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
