import React, { useState } from "react";

export const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <p>Good to see you!</p>}
      {changedText && <p>Changed</p>}
      <button onClick={changeTextHandler}>Change text</button>
    </div>
  );
};
