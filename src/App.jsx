import { useState } from "react";
import Btn from "./Btn.jsx";
import "./styles/animation.css";

function App() {
  // 初期値を定数化（リセット処理などにも再利用できる）
  const INITIAL_USER_STATE = {
    id: 0,
    name: "",
    age: 0,
  };

  const [onoff, setOnOff] = useState(false);
  const [countObj, setCount] = useState({ count: 0 });
  const [user, setUser] = useState(INITIAL_USER_STATE);

  const handleChange = (e) => {
    setOnOff(e.target.checked);
  };
  const handleUserChange = (e) => {
    setUser((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleCountUp = () => {
    setCount((prev) => ({ count: prev.count + 1 }));
  };
  const handleCountDown = () => {
    setCount((prev) => ({ count: prev.count - 1 }));
  };
  const handlemMultiplication = () => {
    setCount((prev) => ({ count: prev.count * 2 }));
  };
  return (
    <>
      <div className="content-center text-center p-10">
        <Btn btnClick={handleCountUp} disabled={!onoff}>
          +1
        </Btn>
        <Btn btnClick={handleCountDown} disabled={!onoff}>
          -1
        </Btn>
        <Btn btnClick={handlemMultiplication} disabled={!onoff}>
          ×2
        </Btn>
        <h1>{countObj.count}</h1>
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
    </>
  );
}

export default App;
