import React from "react";
import { useState } from "react";

const Button = () => {
  const [showAnotherButton, setShowAnotherButton] = useState(false);
  return (
    <div>
      <button
        type="button"
        data-testid="button"
        onClick={() => {
          setShowAnotherButton(true);
        }}
      >
        CLICK HEREEEEE!!!
      </button>

      {showAnotherButton && (
        <button data-testid="button">CLICK HEREEEEEEEE!!!!!</button>
      )}
    </div>
  );
};

export default Button;
