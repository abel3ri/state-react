import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log("rendered");
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((count) => (count += 1));
        }}
      >
        +1
      </button>
      <hr />
      <button
        onClick={() => {
          setCount((count) => count + 3);
        }}
      >
        +3
      </button>
      <hr />
      <button
        onClick={() => {
          setCount((count) => (count = 10));
        }}
      >
        set 10
      </button>
    </>
  );
}
