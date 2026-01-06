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

// import { useEffect, useState } from "react";

// const App = () => {
//   const [size, setSize] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return (
//     <div className="content-center text-center p-10">
//       <p className="text-9xl">画面の横幅:{size}</p>
//     </div>
//   );
// };

// export default App;

// import { memo, useState } from "react";
// import Btn from "./Btn.jsx";

// const Child = memo(({ count }) => {
//   console.log("Childが再レンダリングされました");
//   return <div>カウント:{count}</div>;
// });

// const Parent = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <Btn btnClick={() => setCount((prev) => prev + 1)}>カウントアップ</Btn>
//       <Child count={count} />
//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         className="border border-gray-300 rounded px-2 py-1"
//       />
//       <p>{text}</p>
//     </div>
//   );
// };
// export default Parent;

// import React, { useCallback, useState } from "react";

// const Child = React.memo(({ onClick }) => {
//   console.log("Childが再レンダリングされました");
//   return <button onClick={onClick}>子コンポーネントのボタン</button>;
// });

// const Parent = () => {
//   const [count, setCount] = useState(0);

//   // 毎回新しい関数が作られる
//   const handleClick = useCallback(() => {
//     console.log("count: ", { count }, "ボタンがクリックされました");
//   }, [count]);

//   return (
//     <div>
//       <button onClick={() => setCount((prev) => prev + 1)}>
//         カウントを増やす
//       </button>
//       <Child onClick={handleClick} />
//       <p>{count}</p>
//     </div>
//   );
// };
// export default Parent;

// import { useState } from "react";

// const items = [
//   { id: 1, category: "果物", name: "りんご" },
//   { id: 2, category: "野菜", name: "にんじん" },
//   { id: 3, category: "果物", name: "バナナ" },
//   { id: 4, category: "野菜", name: "キャベツ" },
//   { id: 5, category: "果物", name: "いちご" },
//   { id: 6, category: "野菜", name: "ねぎ" },
//   { id: 7, category: "果物", name: "みかん" },
//   { id: 8, category: "野菜", name: "だいこん" },
//   { id: 9, category: "果物", name: "パイナップル" },
//   { id: 10, category: "野菜", name: "トマト" },
//   { id: 11, category: "果物", name: "ぶどう" },
//   { id: 12, category: "野菜", name: "レタス" },
//   { id: 13, category: "果物", name: "レモン" },
//   { id: 14, category: "野菜", name: "きゅうり" },
//   { id: 15, category: "果物", name: "スイカ" },
//   { id: 16, category: "野菜", name: "ほうれん草" },
//   { id: 17, category: "果物", name: "メロン" },
//   { id: 18, category: "野菜", name: "じゃがいも" },
//   { id: 19, category: "果物", name: "桃" },
//   { id: 20, category: "野菜", name: "なす" },
//   //大量のデータ
// ];

// const FruitList = ({ items }) => {
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// };

// const App = () => {
//   const [text, setText] = useState("");
//   const [category, setCategory] = useState("果物");

//   const filteredItems = items.filter((item) => item.category === category); // フィルタリング処理実行

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button onClick={() => setCategory("果物")}>果物</button>
//       <button onClick={() => setCategory("野菜")}>野菜</button>
//       <FruitList items={filteredItems} />
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// const App = () => {
//   const items = [
//     { id: 1, name: "apple" },
//     { id: 2, name: "banana" },
//     { id: 3, name: "orange" },
//   ];
//   const [text, setText] = useState("");
//   return (
//     <div>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//         {items
//           .filter((item) => item.name.includes(text))
//           .map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//       </ul>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </div>
//   );
// };

// export default App;

import { useState } from "react";
import Btn from "./Btn.jsx";

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const btnData = [
    { id: 1, title: "ボタン1", contents: "ボタン1の内容" },
    { id: 2, title: "ボタン2", contents: "ボタン2の内容" },
    { id: 3, title: "ボタン3", contents: "ボタン3の内容" },
  ];

  const handleOpen = (index) =>
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div>
      {btnData.map((btn) => (
        <Btn
          key={btn.id}
          onToggle={() => handleOpen(btn.id)}
          title={btn.title}
          isOpen={openIndex === btn.id}
        >
          {btn.contents}
        </Btn>
      ))}
      ;
    </div>
  );
};

export default App;
