import "./App.css";
import Counter from "./components/Counter";
import EmojiClicker from "./components/EmojiClicker";
import Pricing from "./components/Pricing";
import ScoreKeeper from "./components/ScoreKeeper";
import { v4 as uuid } from "uuid";

const emojis = [
  {
    id: uuid(),
    emoji: "😀",
  },
  {
    id: uuid(),
    emoji: "😁",
  },
  {
    id: uuid(),
    emoji: "😂",
  },
  {
    id: uuid(),
    emoji: "🤣",
  },
  {
    id: uuid(),
    emoji: "😋",
  },
  {
    id: uuid(),
    emoji: "😎",
  },
  {
    id: uuid(),
    emoji: "😐",
  },
];

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Pricing /> */}
      {/* <ScoreKeeper /> */}
      <EmojiClicker emos={emojis} />
    </>
  );
}

export default App;
