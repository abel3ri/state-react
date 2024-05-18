import "./App.css";
import Counter from "./components/Counter";
import EmojiClicker from "./components/EmojiClicker";
import Pricing from "./components/Pricing";
import ScoreKeeper from "./components/ScoreKeeper";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Pricing /> */}
      <ScoreKeeper numPlayers={4} target={3} />
      {/* <EmojiClicker /> */}
    </>
  );
}

export default App;
