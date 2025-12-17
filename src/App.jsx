import { useState } from "react";
//import Btn from "./Btn.jsx";
import "./styles/animation.css";
import "./Test.jsx";

function App() {
  const [onoff, setOnOff] = useState(false);
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setOnOff(e.target.checked);
  };

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleTap = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={handleClick} disabled={!onoff}>
        countup
      </button>
      <button onClick={handleTap} disabled={!onoff}>
        countdown
      </button>
      <h1>{count}</h1>
      <label htmlFor="kidou">
        <input
          id="kidou"
          type="checkbox"
          checked={onoff}
          onChange={handleChange}
        />
        起動
      </label>
    </>
  );
}

export default App;
