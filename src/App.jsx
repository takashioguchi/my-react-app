import { useReducer, useState } from "react";
import Btn from "./Btn.jsx";
import "./styles/animation.css";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "MULTIPLY":
      return { count: state.count * 2 };
    case "TENTIMES":
      return { count: state.count * 10 };
    default:
      return state;
  }
};

const App = () => {
  const [onoff, setOnOff] = useState(false);
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const handleChange = (e) => {
    setOnOff(e.target.checked);
  };

  return (
    <>
      <div className="content-center text-center p-10">
        <Btn btnClick={() => dispatch({ type: "INCREMENT" })} disabled={!onoff}>
          +1
        </Btn>
        <Btn btnClick={() => dispatch({ type: "DECREMENT" })} disabled={!onoff}>
          -1
        </Btn>
        <Btn btnClick={() => dispatch({ type: "MULTIPLY" })} disabled={!onoff}>
          ×2
        </Btn>
        <Btn btnClick={() => dispatch({ type: "TENTIMES" })} disabled={!onoff}>
          ×10
        </Btn>
        <h1>{state.count}</h1>
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
};

export default App;
