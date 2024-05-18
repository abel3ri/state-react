import { useState } from "react";
import { v4 as uuid } from "uuid";

const createPlayers = (num) => {
  return Array.from({ length: num }, (_, i) => {
    return {
      id: uuid(),
      player: `Player ${i + 1}`,
      score: 0,
      isWinner: false,
    };
  });
};

export default function ScoreKeeper({ numPlayers, target }) {
  const [players, setPlayers] = useState(createPlayers(numPlayers));

  const addScore = (id) => {
    setPlayers((players) => {
      return players.map((player) => {
        if (player.id == id) {
          if (player.score == target) {
            return { ...player, isWinner: true };
          }
          return { ...player, score: player.score + 1 };
        }
        return player;
      });
    });
  };

  const resetAllScores = () => {
    setPlayers((players) => {
      return players.map((player) => {
        return { ...player, score: 0, isWinner: false };
      });
    });
  };

  return (
    <div className="ScoreKeeper">
      {players.map((player) => {
        return (
          <div key={player.id}>
            <h2>
              {player.player} score: {player.score}
            </h2>
            <h3>{player.isWinner ? "You are a winner!" : null}</h3>
            <button onClick={() => addScore(player.id)}>+1</button>
          </div>
        );
      })}
      <hr />
      <button onClick={resetAllScores}>Reset</button>
    </div>
  );
}
