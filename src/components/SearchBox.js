import React from "react";

const SearchBox = ({ txtChange, value }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        value={value}
        onChange={txtChange}
      />
    </div>
  );
};

export default SearchBox;
