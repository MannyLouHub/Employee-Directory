import React from "react";

function Search(props) {
  return (
      <div className="container">
        <div className="input-group mb-3">
          <input type="text"
                 onChange={props.handleInputChange}
                 value={props.value}
                 name="search"
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 placeholder="Search for Employee"/>
        </div>
      </div>
  );
}

export default Search;

