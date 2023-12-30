import React, { useCallback, useState } from "react";
import refresh from "../assets/images//refresh 1.png";

function Main() {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 3);
  };

  const minus = () => {
    if (counter > 0) {
      setCounter(counter - 2);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="Main">
      <div className="main">
        <div className="number">{counter}</div>
      </div>

      <div className="main-buttons">
        <button className="btn-values" onClick={plus}>
          +
        </button>
        <button className="btn-refresh" onClick={reset}>
          <img src="refresh" alt="" />↺
        </button>
        <div className="btn-minus">
          <button className="btn__values-minus" onClick={minus}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
