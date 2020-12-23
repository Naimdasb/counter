import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [disableAdd, setDisableAdd] = useState(false);
  const [disableSub, setDisableSub] = useState(false);

  const handleClick = (event) => {
    if (event.target.name === "add") {
      if (counter < 10) {
        setCounter(counter + 1);
      } else {
        setDisableAdd(true);
        setDisableSub(false);
      }
    } else {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        setDisableAdd(false);
        setDisableSub(true);
      }
    }
  };

  return (
    <div className="App">
      <h1>Hello Counter</h1>
      <h5>{counter}</h5>
      <button name="add" onClick={handleClick} disabled={disableAdd}>
        Add
      </button>
      <button name="sub" onClick={handleClick} disabled={disableSub}>
        Sub
      </button>
    </div>
  );
}