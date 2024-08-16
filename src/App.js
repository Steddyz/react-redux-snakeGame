import { useDispatch, useSelector } from "react-redux";
import { moveSnake, setDirection, switchButton } from "./store/gameSlice";
import Board from "./components/Board/Board";
import { useRef } from "react";

function App() {
  const { status } = useSelector((store) => store.game.status);
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

  const setDirectionHandler = (event) => {
    dispatch(setDirection(event.key));
  };

  return (
    <div className="App" onKeyDownCapture={setDirectionHandler}>
      <Board />
      <button className="start_button" onClick={handleClick}>
        {status}
      </button>
    </div>
  );
}

export default App;
