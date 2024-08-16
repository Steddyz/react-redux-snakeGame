import { useDispatch, useSelector } from "react-redux";
import { moveSnake, switchButton } from "./store/gameSlice";
import Board from "./components/Board/Board";
import { useRef } from "react";

function App() {
  const { status } = useSelector((store) => store.game);
  const dispatch = useDispatch();

  let timer = useRef(null);

  const update = () => {
    dispatch(moveSnake());
  };

  const startTimer = () => {
    timer.current = setInterval(() => update(), 200);
  };

  const stopTimer = () => clearInterval(timer.current);

  const handleClick = () => {
    if (status !== "Pause") {
      startTimer();
    } else {
      stopTimer();
    }

    dispatch(switchButton("Resume"));
  };

  return (
    <div className="App">
      <Board />
      <button className="start_button" onClick={handleClick}>
        {status}
      </button>
    </div>
  );
}

export default App;
