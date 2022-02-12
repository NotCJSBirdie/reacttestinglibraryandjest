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
