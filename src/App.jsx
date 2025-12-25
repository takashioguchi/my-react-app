// import { useRef, useState } from "react";
// import Btn from "./Btn.jsx";

// const Timer = () => {
//   const [timer, setTimer] = useState(0);
//   const timerRef = useRef(null);

//   const startTimer = () => {
//     if (timerRef.current === null) {
//       timerRef.current = setInterval(() => {
//         setTimer((prev) => prev + 1);
//       }, 1000);
//     }
//   };
//   const stopTimer = () => {
//     if (timerRef.current !== null) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }
//   };

//   return (
//     <div className="content-center text-center p-10">
//       <p className="text-9xl">{timer}</p>
//       <Btn btnClick={startTimer}>タイマー開始</Btn>
//       <Btn btnClick={stopTimer}>タイマー停止</Btn>
//     </div>
//   );
// };
// export default Timer;

// import { useRef } from "react";

// const App = () => {
//   const inputRef = useRef(null);

//   const handleButtonClick = () => {
//     // ボタンが押されたら、inputにフォーカスを当てる
//     inputRef.current.focus();
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <input ref={inputRef} placeholder="ここに入力してね" />
//       <button onClick={handleButtonClick}>入力を開始する</button>
//     </div>
//   );
// };

// export default App;

import { useEffect, useState } from "react";

const App = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="content-center text-center p-10">
      <p className="text-9xl">画面の横幅:{size}</p>
    </div>
  );
};

export default App;
