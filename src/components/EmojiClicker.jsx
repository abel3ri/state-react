import { useState } from "react";
import { v4 as uuid } from "uuid";

function randomEmoji(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function EmojiClicker({ emos }) {
  const [emojis, setEmojis] = useState([{}]);
  const addEmoji = () => {
    setEmojis((emojis) => {
      return [...emojis, randomEmoji(emos)];
    });
  };

  const deleteEmoji = (id) => {
    console.log(id);
    setEmojis((emojis) => {
      return emojis.filter((emoji) => {
        return emoji.id != id;
      });
    });
  };

  return (
    <div className="EmojiClicker">
      {emojis.map((emoji) => {
        return (
          <span
            key={uuid()}
            style={{ fontSize: "2rem" }}
            onClick={() => deleteEmoji(emoji.id)}
          >
            {emoji.emoji}
          </span>
        );
      })}
      <button onClick={addEmoji}> Add Emoji</button>
    </div>
  );
}
