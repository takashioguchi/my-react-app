import { useState } from "react";
import Btn from "./Btn.jsx";
import "./styles/animation.css";

function App() {
  const [onoff, setOnOff] = useState(false);
  const [count, setCount] = useState({ count: 0 });

  const handleChange = (e) => {
    setOnOff(e.target.checked);
  };

  const handleCountUp = () => {
    setCount((prev) => ({ count: prev.count + 1 }));
  };
  function handleCountDown() {
    setCount((prev) => ({ count: prev.count - 1 }));
  }

  return (
    <div className="content-center text-center p-10">
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
    </div>
  );
}

export default App;
