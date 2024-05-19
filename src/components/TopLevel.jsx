import { useState } from "react";
import Presentation from "./Presentation";

export default function TopLevel() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => (count += 1));
  };
  return (
    <div>
      <Presentation count={count} />
      <button onClick={increment}>Increment</button>
    </div>
  );
}
