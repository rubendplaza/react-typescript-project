import * as React from "react";

interface SearchBoxProps {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = (props: SearchBoxProps) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={props.searchChange}
      />
    </div>
  );
};

export default SearchBox;
