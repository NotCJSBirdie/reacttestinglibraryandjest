## PARENT COMPONENT

import React from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";

function App() {
const [showDiv, setShowDiv] = useState(true);

return (

<div className="App">
<Input showDiv={showDiv} />
<Button />
</div>
);
}

export default App;

// in this code I passed downed the state showDiv as a prop (PROP DRILLING)

// I also then implicitly type any in the child component

//you have to name the prop as exactly the same as the state being passed (showDiv = {showDiv})

## CHILD COMPONENT

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

## Input.test.js

import { render } from "@testing-library/react";
import Input from "./Input";

describe("Input Component Test", () => {
it("rendered input", () => {
const { getByTestId } = render(<Input showDiv={false} />);

    const input = getByTestId("searchBar");

    expect(input).toBeTruthy();

});

test("rendered div", () => {
const { getByTestId } = render(<Input showDiv={true} />);

    const div = getByTestId("divWeWantedToShow");

    expect(div).toBeTruthy();

});

test("do not render div", () => {
const { queryByTestId } = render(<Input showDiv={false} />);

    const div = queryByTestId("divWeWantedToShow");

    expect(div).toBeFalsy();

});
});

// we use queryByTestId not getByTestId in the third test because we want to know if the element is there or not. Because if we are just saying getByTestId, then we already assume it is there and we are just getting the name of the id.

// by the way, TEST and IT ARE THE SAME!! PERIODT!
#   r e a c t t e s t i n g l i b r a r y a n d j e s t 
 
 
