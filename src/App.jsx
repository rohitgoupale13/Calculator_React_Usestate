// App.js
import { useState } from "react";
import "./App.css"; // for styling

function App() {
  const [input, setInput] = useState("");

  //  Handle button press
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  //  Evaluate the expression
  const calculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  //  Clear all input
  const clear = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <div className="screen">{input || "0"}</div>

      <div className="buttons">
        {/* Row 1 */}
        <button className="btn gray" onClick={clear}>AC</button>
        <button className="btn gray" onClick={() => handleClick("/")}>÷</button>
        <button className="btn gray" onClick={() => handleClick("*")}>×</button>
        <button className="btn orange" onClick={() => handleClick("-")}>-</button>

        {/* Row 2 */}
        <button className="btn" onClick={() => handleClick("7")}>7</button>
        <button className="btn" onClick={() => handleClick("8")}>8</button>
        <button className="btn" onClick={() => handleClick("9")}>9</button>
        <button className="btn orange" onClick={() => handleClick("+")}>+</button>

        {/* Row 3 */}
        <button className="btn" onClick={() => handleClick("4")}>4</button>
        <button className="btn" onClick={() => handleClick("5")}>5</button>
        <button className="btn" onClick={() => handleClick("6")}>6</button>
        <button className="btn equal" onClick={calculate}>=</button>

        {/* Row 4 */}
        <button className="btn" onClick={() => handleClick("1")}>1</button>
        <button className="btn" onClick={() => handleClick("2")}>2</button>
        <button className="btn" onClick={() => handleClick("3")}>3</button>
        <button className="btn" onClick={() => handleClick("0")} style={{ width: "47%" }}>0</button>
        <button className="btn" onClick={() => handleClick(".")}>.</button>
      </div>
    </div>
  );
}

export default App;
