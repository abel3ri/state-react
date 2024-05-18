import { useState } from "react";
import { v4 as uuid } from "uuid";

const emos = ["😀", "😁", "😂", "😎", "😅", "😋", "🤩", "😴", "😑"];

function randomEmoji() {
  return emos[Math.floor(Math.random() * emos.length)];
}

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);

  const addEmoji = () => {
    setEmojis((emojis) => {
      return [...emojis, { id: uuid(), emoji: randomEmoji() }];
    });
  };

  const deleteEmoji = (id) => {
    setEmojis((emojis) => {
      return emojis.filter((emoji) => {
        return emoji.id != id;
      });
    });
  };

  const makeAllHearts = () => {
    setEmojis((emojis) => {
      return emojis.map((e) => {
        return { ...e, emoji: "♥" };
      });
    });
  };

  return (
    <div className="EmojiClicker">
      {emojis.map((emoji) => {
        return (
          <span
            key={emoji.id}
            style={{ fontSize: "2rem" }}
            onClick={() => deleteEmoji(emoji.id)}
          >
            {emoji.emoji}
          </span>
        );
      })}
      <button onClick={addEmoji}> Add Emoji</button>
      <h1></h1>
      <button onClick={makeAllHearts}>Make them all hearts</button>
    </div>
  );
}
