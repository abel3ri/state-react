import Box from "./Box";
import "../styles/BoxGrid.css";
import { useState } from "react";
export default function BoxGrid({ grid, numBox = 9 }) {
  const [boxes, setBoxes] = useState(new Array(numBox).fill(false));
  const toggleBox = (index) => {
    setBoxes((boxes) => {
      return boxes.map((value, i) => {
        if (index == i) return !value;
        return value;
      });
    });
  };
  const reset = () => {
    setBoxes(new Array(numBox).fill(false));
  };
  return (
    <div
      className="BoxGrid"
      style={{
        gridTemplateColumns: `repeat(${grid}, 1fr)`,
      }}
    >
      {boxes.map((box, i) => (
        <Box toggleBox={() => toggleBox(i)} key={i} isActive={box} />
      ))}

      <button
        onClick={reset}
        style={{
          gridColumn: "1/-1",
        }}
      >
        Reset
      </button>
    </div>
  );
}
