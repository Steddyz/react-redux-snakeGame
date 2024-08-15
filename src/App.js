import { useDispatch, useSelector } from "react-redux";
import { switchButton } from "./store/gameSlice";
import Board from "./components/Board/Board";

function App() {
  const { toggleButton } = useSelector((store) => store.game);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(switchButton("Resume"));
  };

  return (
    <div className="App">
      <Board />
      <button className="start_button" onClick={handleClick}>
        {toggleButton}
      </button>
    </div>
  );
}

export default App;
