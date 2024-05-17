import { useState } from "react";
// import lodash from "lodash";

export default function ScoreKeeper() {
  const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
  const increaseP1Score = () => {
    setScores({ ...scores, p1Score: scores.p1Score + 1 });
  };
  const increaseP2Score = () => {
    setScores({ ...scores, p2Score: scores.p2Score + 1 });
  };
  return (
    <div className="ScoreKeeper">
      <p>Player one score: {scores.p1Score}</p>
      <p>Player two score: {scores.p2Score}</p>
      <hr />
      <button onClick={increaseP1Score}>+1 Player one</button>
      <button onClick={increaseP2Score}>+1 Player two</button>
    </div>
  );
}
