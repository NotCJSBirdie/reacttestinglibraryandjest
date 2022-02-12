import React from "react";
import { useState } from "react";

const Input = ({ showDiv }: any) => {
  const [searchWord, setSearchWord] = useState("");
  return (
    <div>
      <input
        type="text"
        data-testid="searchBar"
        placeholder="search...."
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      />

      <h1 data-testid="displaySearch">{searchWord}</h1>

      {showDiv && (
        <div data-testid="divWeWantedToShow">
          Hey I'm Pedro, please subscribe to my channel
        </div>
      )}
    </div>
  );
};

export default Input;

// showdiv is IMPLICITLY ANY TYPE FROM THE PARENT COMPONENT THAT PASSED THE PROPS SHOWDIV TO HERE (CHILD COMPONENT)

// SINCE SHOWDIV IS TRUE THEN THE SHOWDIV STATE WILL DISPLAY (PASSING STATES AS PROPS)
