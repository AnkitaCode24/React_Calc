import React, { useState, usestate } from "react";
import "../Styling/Calc.css";
const Calc = () => {
  const [Result, setResult] = useState("");

  const onclick = (e) => {
    setResult(Result.concat(e.target.value));
  };

  const calculate = () => {
    setResult(eval(Result));
  };

  const cls = () => {
    setResult("");
    console.log("Result");
  };

  const backspace = () => {
    setResult(Result.slice(0, Result.length - 1));
  };

  return (
    <>
      <div>
        <h1 className="title text-center">React Calculator</h1>
      </div>
      <div className="calc-body text-center">
        <form>
          <input type="text" id="screen" readOnly value={Result} />
        </form>

        <div className="keypad">
          <input
            type="button"
            className="highlight"
            value="clear"
            id="clear"
            onClick={cls}
          />
          <input
            type="button"
            className="highlight"
            value="C"
            onClick={backspace}
          />
          <input
            type="button"
            className="highlight"
            value="/"
            onClick={onclick}
          />
          <input type="button" value="7" onClick={onclick} />
          <input type="button" value="8" onClick={onclick} />
          <input type="button" value="9" onClick={onclick} />
          <input
            type="button"
            className="highlight"
            value="*"
            onClick={onclick}
          />
          <input type="button" value="4" onClick={onclick} />
          <input type="button" value="5" onClick={onclick} />
          <input type="button" value="6" onClick={onclick} />
          <input
            type="button"
            className="highlight"
            value="-"
            onClick={onclick}
          />
          <input type="button" value="1" onClick={onclick} />
          <input type="button" value="2" onClick={onclick} />
          <input type="button" value="3" onClick={onclick} />
          <input
            type="button"
            className="highlight"
            value="+"
            onClick={onclick}
          />
          <input type="button" value="0" onClick={onclick} />
          <input
            type="button"
            className="highlight"
            value="."
            onClick={onclick}
          />
          <input
            type="button"
            className="highlight"
            value="%"
            onClick={onclick}
          />
          <input
            type="button"
            className="highlight"
            value="="
            id="equal"
            onClick={calculate}
          />
        </div>
      </div>
    </>
  );
};

export default Calc;
