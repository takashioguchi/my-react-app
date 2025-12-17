import { useState } from "react";
import Btn from "./Btn.jsx";
import "./styles/animation.css";
import "./Test.jsx";

function App() {
  const [onoff, setOnOff] = useState(false);
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setOnOff(e.target.checked);
  };

  const handleCountUp = () => {
    setCount(count + 1);
  };
  const handleCountDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Btn btnClick={handleCountUp} disabled={!onoff}>
        countup
      </Btn>
      <Btn btnClick={handleCountDown} disabled={!onoff}>
        countdown
      </Btn>
      <h1>{count}</h1>
      <h2>{onoff ? "ON" : "OFF"}</h2>
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
