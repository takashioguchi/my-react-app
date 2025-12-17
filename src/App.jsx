import { useState } from "react";
import Btn from "./Btn.jsx";
import "./styles/animation.css";
import "./Test.jsx";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleTap = () => {
    setCount(count - 1);
  };
  return (
    <>
      <Btn btnClick={handleClick}>click</Btn>
      <Btn btnClick={handleTap}>tap</Btn>
      <h1>{count}</h1>
    </>
  );
}

export default App;
