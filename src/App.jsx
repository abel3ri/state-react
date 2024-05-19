import "./App.css";
import Counter from "./components/Counter";
import EmojiClicker from "./components/EmojiClicker";
import Pricing from "./components/Pricing";
import ScoreKeeper from "./components/ScoreKeeper";
import TopLevel from "./components/TopLevel";
import BoxGrid from "./components/BoxGrid";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Pricing /> */}
      {/* <ScoreKeeper numPlayers={4} target={3} /> */}
      {/* <TopLevel /> */}
      <BoxGrid grid={4} numBox={16} />
    </>
  );
}

export default App;
