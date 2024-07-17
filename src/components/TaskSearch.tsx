import React from "react";

export const TaskSearch = () => {
  return (
    <>
      <form className="d-flex search-container2">
          <input
            className="form-control me-sm-2 my-2 search"
            type="search"
            placeholder="Search"
          />
          <button className="btn btn-secondary my-2 my-sm-9" type="submit">
            Search
          </button>
      </form>
    </>
  );
};
