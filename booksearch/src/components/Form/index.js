import React from "react";

function Result(props) {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="searchBar">
            <h2>Search for Google Books</h2>
          </label>
          <input
            onChange={props.handleInputChange}
            value={props.searchBar}
            name="searchBar"
            type="text"
            className="form-control"
            placeholder="Search for Books"
            id="searchBar"
          />
          <button
            onClick={props.handleFormSubmit}
            className="btn btn-dark mt-3 mb-5"
          >
            Search Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default Result;
