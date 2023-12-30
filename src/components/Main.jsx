import React, { useState } from "react";
import Buttons from "./Buttons";
import Number from "./Number";

function Main() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Number counter={counter} />
      <Buttons counter={counter} setCounter={setCounter} />
    </div>
  );
}
export default Main;
